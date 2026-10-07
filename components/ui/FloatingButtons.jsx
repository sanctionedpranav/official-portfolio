"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaLink, FaCheck, FaComments, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

const FloatingButtons = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    const currentUrl = typeof window !== "undefined" ? window.location.href : "https://pranav-portfolio-woad.vercel.app";
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    toast.success("Portfolio link copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Expanded Quick Contact Action Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 26 }}
            className="flex flex-col items-end gap-2.5 mb-1"
          >
            {/* Copy Portfolio Link */}
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.04, x: -3 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0b0e27]/85 hover:bg-[#12183d]/95 border border-white/15 hover:border-white/30 text-white text-xs sm:text-sm font-medium shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-2xl transition-all duration-300 group"
              aria-label="Copy Portfolio Link"
            >
              <div className="h-7 w-7 rounded-full bg-purple/20 border border-purple/40 flex items-center justify-center text-purple text-xs shrink-0 shadow-inner">
                {copied ? <FaCheck className="text-emerald-400" /> : <FaLink />}
              </div>
              <span className="text-slate-200 group-hover:text-white transition-colors pr-1">
                {copied ? "Link Copied!" : "Copy Link"}
              </span>
            </motion.button>

            {/* Direct Phone Call */}
            <motion.a
              href="tel:+919996633422"
              whileHover={{ scale: 1.04, x: -3 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0b0e27]/85 hover:bg-[#12183d]/95 border border-white/15 hover:border-sky-400/40 text-white text-xs sm:text-sm font-medium shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-2xl transition-all duration-300 group"
              aria-label="Call Pranav Direct"
            >
              <div className="h-7 w-7 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 text-xs shrink-0 shadow-inner">
                <FaPhoneAlt />
              </div>
              <span className="text-slate-200 group-hover:text-white transition-colors pr-1">
                Call Direct
              </span>
            </motion.a>

            {/* WhatsApp Chat */}
            <motion.a
              href="https://wa.me/919996633422?text=Hi%20Pranav,%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, x: -3 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0b0e27]/85 hover:bg-[#12183d]/95 border border-white/15 hover:border-emerald-400/40 text-white text-xs sm:text-sm font-medium shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-2xl transition-all duration-300 group"
              aria-label="Chat on WhatsApp"
            >
              <div className="h-7 w-7 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] text-sm shrink-0 shadow-inner">
                <FaWhatsapp />
              </div>
              <span className="text-slate-200 group-hover:text-white transition-colors pr-1">
                WhatsApp
              </span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Glassmorphic Trigger Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close quick contact menu" : "Open quick contact menu"}
        className="relative group flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-[#0b0e27]/80 hover:bg-[#12183d]/90 backdrop-blur-2xl border border-white/20 hover:border-white/40 text-white shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:shadow-[0_8px_32px_rgba(139,92,246,0.25),inset_0_1px_2px_rgba(255,255,255,0.35)] transition-all duration-300"
      >
        {/* Pulsating Availability Light Ring */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
        </span>

        {/* Animated Rotating Icon Container */}
        <motion.div
          animate={{ rotate: open ? 90 : 0, scale: open ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          className="text-sm text-purple-300"
        >
          {open ? <FaTimes /> : <FaComments />}
        </motion.div>

        {/* Smooth Transitioning Label */}
        <span className="text-xs sm:text-sm font-semibold tracking-wide text-white group-hover:text-purple-200 transition-colors">
          {open ? "Close" : "Quick Contact"}
        </span>
      </motion.button>
    </div>
  );
};

export default FloatingButtons;
