"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts: unknown) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(0, {
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.85 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          aria-label="Scroll back to top"
          className="fixed bottom-6 left-4 sm:left-6 z-50 flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-full bg-[#0b0e27]/85 hover:bg-[#12183d]/95 border border-white/15 hover:border-purple/40 text-neutral-300 hover:text-white shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-2xl transition-all duration-300 group"
        >
          <div className="h-6 w-6 rounded-full bg-purple/20 border border-purple/30 flex items-center justify-center text-purple text-xs group-hover:bg-purple group-hover:text-black transition-all">
            <FaArrowUp />
          </div>
          <span className="text-xs font-semibold tracking-wide hidden sm:inline text-neutral-300 group-hover:text-white transition-colors">
            Back to Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
