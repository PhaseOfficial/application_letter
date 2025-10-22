import React, { useState, useRef, useEffect } from "react";



// --- START: Inline SVG Icon Replacements (FaComments, FaPaperPlane) ---
const CommentsIcon = ({ size = 30, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <path d="M13 8H7"/>
    <path d="M17 12H7"/>
  </svg>
);

const PaperPlaneIcon = ({ size = 14, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m22 2-7 20-4-9-9-4Z"/>
    <path d="M22 2 11 13"/>
  </svg>
);
// --- END: Inline SVG Icon Replacements ---


// 🧠 Context prompts: defines assistant role, tone, and company info
const contextPrompts = `
You are Vybrant AI — a warm, professional assistant representing Vybrant Care Services UK.
You help users with inquiries about home care with free Home Assessment,After Hospital Care, job opportunities,
Our supported, Specialist Care,Respite Care, Companionship Service, Live-in Care, Emergency Care, housing that provides
safe and supportive environments for young adults aged 18 to 25 and older adults
transitioning to independent living, Independent Living Spaces, Our Stop Over Bed hosts 
are available for young and older adults for a maximum of 
three nights giving the referring agency the opportunity to find suitable long-term 
accommodation and contact details.
Speak politely, empathetically, and clearly.
If a question is not related to care, gently redirect to relevant topics.

Branches and contact details:
- South Yorkshire Branch: Knowle House, 4 Norfolk Park Road, Sheffield, S2 3QE.
  Call 0114 551 1332 / 07828 402 043, Email info@vybrantcareservices.com
- East Riding Branch: One Business Village, 1 Emily Street, Hull HU9 1ND.
  Call 07479 251 733, Email eastriding@vybrantcareservices.com
- Scotland Branch: Geddes House, Kirkton North Road, Livingston, West Lothian.
  Call 07940 136 941, Email info@vybrantcareservices.com

Always maintain confidentiality and encourage contacting official numbers for personal discussions.
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello 👋 I'm Vybrant AI Assistant — how can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Ref for auto-scrolling the message window
  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to bottom whenever messages or open state changes
  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { sender: "user", text: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // 1. Construct the full conversation history for context
      const conversationText = updatedMessages
        .map((m) => `${m.sender === "user" ? "User" : "Assistant"}: ${m.text}`)
        .join("\n");

      const prompt = `${contextPrompts}\n\n${conversationText}\nAssistant:`;

      // 2. Setup API Call parameters
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // Set as empty string for Canvas environment
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const payload = {
          contents: [{ parts: [{ text: prompt }] }],
      };

      // 3. Fetch response from the Gemini API
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const result = await response.json();

      // Extract text from the structured JSON response
      const aiReply = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (aiReply) {
        setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: "Sorry, I received an empty response. Please try rephrasing your question." },
        ]);
      }
    } catch (error) {
      console.error("Gemini API error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Oops! Something went wrong. I couldn't reach the server. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

// 🪄 Simple text formatter: supports **bold**, _italic_, __underline__, `code`, and line breaks
const formatMessage = (text) => {
  if (!text) return "";

  let formatted = text
    // Replace bold **text**
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Replace italic _text_
    .replace(/_(.*?)_/g, "<em>$1</em>")
    // Replace underline __text__
    .replace(/__(.*?)__/g, "<u>$1</u>")
    // Replace inline code `code`
    .replace(/`([^`]+)`/g, "<code class='bg-gray-200 px-1 rounded text-sm'>$1</code>")
    // Replace newlines with <br>
    .replace(/\n/g, "<br>");

  return formatted;
};


  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <style>{`
        /* Import Inter font for a clean, modern look */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-pink-600 text-white p-4 rounded-full shadow-xl hover:bg-pink-700 transition duration-300 transform hover:scale-105"
          aria-label="Open chat assistant"
        >
          <CommentsIcon size={30} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="w-full p-4 max-w-sm sm:w-80 md:w-96 h-[400px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          
          {/* Header */}
          <div className="bg-pink-600 text-white flex justify-between items-center px-4 py-3 rounded-t-2xl">
            <div className="flex items-center space-x-2">
                <CommentsIcon size={20} className="text-pink-200" />
                <h3 className="font-bold text-lg">Vybrant AI Assistant</h3>
            </div>
            <button 
              onClick={toggleChat} 
              className="text-white hover:text-gray-200 text-2xl p-1 leading-none transition-transform duration-200 hover:rotate-90"
              aria-label="Close chat assistant"
            >
              &times;
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
  <div
    key={idx}
    className={`flex ${
      msg.sender === "user" ? "justify-end" : "justify-start"
    }`}
  >
    <div
      className={`px-4 py-2 rounded-xl max-w-[80%] text-sm shadow-md transition-all duration-300 ${
        msg.sender === "user"
          ? "bg-pink-600 text-white rounded-br-sm"
          : "bg-white text-gray-800 border border-gray-100 rounded-tl-sm"
      }`}
      dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
    />
  </div>
))}

            {/* Typing Indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-xl max-w-[75%] text-sm bg-gray-100 text-gray-500 rounded-bl-sm italic">
                  Vybrant AI is typing
                  <span className="dot-pulse ml-1 inline-block">.</span>
                  <span className="dot-pulse delay-150 ml-0 inline-block">.</span>
                  <span className="dot-pulse delay-300 ml-0 inline-block">.</span>
                </div>
                <style jsx="true">{`
                  .dot-pulse {
                    animation: dot-pulse 1s infinite alternate;
                    opacity: 0;
                  }
                  .dot-pulse.delay-150 { animation-delay: 0.15s; }
                  .dot-pulse.delay-300 { animation-delay: 0.3s; }
                  @keyframes dot-pulse {
                    0% { opacity: 0; transform: scale(0.8); }
                    100% { opacity: 1; transform: scale(1); }
                  }
                `}</style>
              </div>
            )}
            
            {/* Scroll Anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex border-t border-gray-200 p-3 items-center bg-white rounded-b-2xl"
          >
            <input
              type="text"
              placeholder="Ask about care, jobs, or contact details..."
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm transition"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              aria-label="Message input"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="ml-2 bg-pink-600 text-white p-2.5 rounded-full shadow-lg hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
              aria-label="Send message"
            >
              <PaperPlaneIcon size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
