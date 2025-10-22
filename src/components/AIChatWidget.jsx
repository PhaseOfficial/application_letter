import React, { useState, useRef, useEffect } from "react";
import companyData from "./data/companyData.json";
import developerData from "./data/developerData.json";

// --- Inline Icons ---
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
// --- End Icons ---

const App = () => {
  const [contextPrompts, setContextPrompts] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello Rubiem Team! I’m Vybrant a custom AI built by Panashe Arthur Mhonde to demonstrate how intelligent assistants can enhance your workflow. You can ask me anything about Rubiem, your services, how AI can transform your operations or about the Developer and Data Scientist.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // 🧠 Build dynamic context from JSON data
  useEffect(() => {
    const companyContext = `
You are Vybrant, an AI assistant prototype built by Panashe Arthur Mhonde for Rubiem.
Your goal is to impress the Rubiem team by showing how conversational AI can interact intelligently about their company, services, and data-driven solutions.

Company Overview:
${companyData.name} — ${companyData.description}

Key Services:
${companyData.services.join(", ")}

Presence:
${companyData.footprint.join(", ")}

Mission:
${companyData.vision || "To lead digital transformation across Africa through data, innovation, and technology."}

Team Highlights:
${companyData.team.map((m) => `${m.name} - ${m.position}`).join("; ")}
`;

    const developerContext = `
Developer:
${developerData.developers[0].name}, ${developerData.developers[0].role}
Core Skills: ${developerData.developers[0].skills.technical.join(", ")}
GitHub: ${developerData.developers[0].contact.github}
LinkedIn: ${developerData.developers[0].contact.linkedin}

This AI assistant was developed as a personal project demo — it can be adapted for Rubiem to:
• Automate internal communication
• Answer client inquiries about services
• Analyze and visualize company data
• Integrate with Rubiem’s web systems or AI Institute Africa
`;

    setContextPrompts(`${companyContext}\n\n${developerContext}`);
  }, []);

  // Scroll behavior
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => scrollToBottom(), [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  // 🚀 Handle user message
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { sender: "user", text: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const conversationText = updatedMessages
        .map((m) => `${m.sender === "user" ? "Rubiem" : "Assistant"}: ${m.text}`)
        .join("\n");

      const prompt = `${contextPrompts}\n\n${conversationText}\nAssistant:`;

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      const payload = { contents: [{ parts: [{ text: prompt }] }] };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`API call failed with status: ${response.status}`);

      const result = await response.json();
      const aiReply = result.candidates?.[0]?.content?.parts?.[0]?.text || "I'm still learning! Could you rephrase that?";

      setMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
    } catch (error) {
      console.error("Gemini API error:", error);
      setMessages((prev) => [...prev, { sender: "ai", text: "⚠️ Oops, something went wrong. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  // 💬 Format Message
  const formatMessage = (text) => {
    if (!text) return "";
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/_(.*?)_/g, "<em>$1</em>")
      .replace(/__(.*?)__/g, "<u>$1</u>")
      .replace(/`([^`]+)`/g, "<code class='bg-gray-200 px-1 rounded text-sm'>$1</code>")
      .replace(/\n/g, "<br>");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        .font-sans { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="flex items-center space-x-3">
          <div className="bg-white text-gray-900 shadow-lg border border-gray-300 px-3 py-2 rounded-full text-sm font-medium animate-bounce-slow whitespace-nowrap">
            🤖 Built by Panashe for Rubiem Try chatting!
          </div>

          <button
            onClick={toggleChat}
            className="bg-gradient-to-r from-pink-600 to-red-500 text-white p-4 rounded-full shadow-xl hover:from-pink-700 hover:to-red-600 transition duration-300 transform hover:scale-105"
            aria-label="Open chat assistant"
          >
            <CommentsIcon size={30} />
          </button>

          <style jsx="true">{`
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-3px); }
            }
            .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
          `}</style>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-full p-4 max-w-sm sm:w-80 md:w-96 h-[420px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 bg-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-red-500 text-white flex justify-between items-center px-4 py-3 rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <CommentsIcon size={20} className="text-pink-100" />
              <h3 className="font-bold text-lg">Vybrant (Panashe’s Demo AI)</h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 text-2xl p-1 leading-none transition-transform duration-200 hover:rotate-90"
              aria-label="Close chat assistant"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-4 py-2 rounded-xl max-w-[80%] text-sm shadow-md ${
                    msg.sender === "user"
                      ? "bg-pink-600 text-white rounded-br-sm"
                      : "bg-white text-gray-800 border border-gray-100 rounded-tl-sm"
                  }`}
                  dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                />
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 text-sm italic">
                  Vybrant is thinking<span className="dot-pulse">...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="flex border-t border-gray-200 p-3 items-center bg-white rounded-b-2xl">
            <input
              type="text"
              placeholder="Ask how this AI can serve Rubiem..."
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm transition"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="ml-2 bg-gradient-to-r from-pink-600 to-red-500 text-white p-2.5 rounded-full shadow-lg hover:from-pink-700 hover:to-red-600 transition-all duration-200 transform hover:scale-105"
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
