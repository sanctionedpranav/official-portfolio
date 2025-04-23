"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaChevronLeft, FaLink } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  return (
    <div className="hidden md:flex fixed bottom-6 right-0 z-50 items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 rounded-s-full py-2 px-2 shadow-lg">
      {/* Toggle Arrow */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white p-3 transition"
      >
        <FaChevronLeft
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-3"
          >
            {/* Copy Button */}
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center px-2.5 py-2 rounded-full bg-[#DDDDDD] text-[#5b5b5b] text-sm font-medium shadow-md transition-all duration-300"
            >
              <FaLink className="text-base" />
              <span className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out">
                <span className="inline-block pl-2 whitespace-nowrap">
                  {copied ? "Link Copied!" : "Copy Portfolio Link"}
                </span>
              </span>
            </motion.button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919996633422?text=Hi%20Pranav,%20I%20visited%20your%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-2 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium shadow-lg transition-all duration-300"
            >
              <FaWhatsapp size={20} />
              <span className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out">
                <span className="inline-block pl-2 whitespace-nowrap">
                  Chat on WhatsApp
                </span>
              </span>
            </a>

            {/* Call Button */}
            <a
              href="tel:+919996633422"
              className="group flex items-center px-2 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium shadow-lg transition-all duration-300"
            >
              <FaPhoneAlt size={18} />
              <span className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-300 ease-in-out">
                <span className="inline-block pl-2 whitespace-nowrap">
                  Call Pranav
                </span>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;
