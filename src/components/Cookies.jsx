import React, { useState, useEffect } from "react";
import { FaCookieBite } from "react-icons/fa";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    } else {
      setShowIcon(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
    setShowIcon(true);
  };

  const reopenMessage = () => {
    setVisible(true);
  };

  return (
    <>
      {/* Floating Cookie Icon (after accept) */}
      {showIcon && !visible && (
        <div
          onClick={reopenMessage}
          className="fixed bottom-6 left-4 bg-pink-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-800 z-50 transition-all"
          title="Manage cookie consent"
        >
          <FaCookieBite size={22} />
        </div>
      )}

      {/* Full Cookie Consent Message */}
      {visible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-4 rounded-lg shadow-lg w-full max-w-md flex flex-col sm:flex-row items-center justify-between gap-2 z-50 animate-fadeIn">
          <p className="text-sm sm:text-base text-center sm:text-left">
            We use cookies to improve your experience. By continuing, you accept our cookie policy.
          </p>
          <button
            onClick={handleAccept}
            className="bg-pink-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm sm:text-base"
          >
            Accept
          </button>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
