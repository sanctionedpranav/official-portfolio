'use client';

import { workExperience } from '@/data';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './ui/MovingBorder';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';

const Experience = () => {
  const [selected, setSelected] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrev = () => {
    setSelected((prev) => (prev > 0 ? prev - 1 : workExperience.length - 1));
  };

  const handleNext = () => {
    setSelected((prev) => (prev < workExperience.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelected(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    if (selected !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  return (
    <section id="experience" className="py-20 section-defer">
      <h1 className="heading">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience?.map((card, index) => (
          <Button
            key={card?.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius="1.75rem"
            className="relative flex-1 text-white border-neutral-200 dark:border-slate-800 group"
            onClick={() => setSelected(index)}
            aria-label={`Open details for ${card?.title}`}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card?.thumbnail}
                alt={`${card?.title} icon`}
                loading="lazy"
                decoding="async"
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card?.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card?.desc}
                </p>
              </div>
            </div>
            <span className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 pointer-events-none">
              Click to read
            </span>
          </Button>
        ))}
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {selected !== null && (
              <motion.div
                className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto overscroll-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelected(null)}
                aria-modal="true"
                role="dialog"
                aria-labelledby={`experience-title-${selected}`}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 15 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-3xl my-auto flex flex-col max-h-[85vh] rounded-3xl bg-[#0b0e27]/98 border border-white/20 shadow-[0_0_60px_rgba(139,92,246,0.35)] backdrop-blur-2xl text-white overflow-hidden"
                >
                  {/* Header (fixed at top of modal) */}
                  <div className="shrink-0 relative p-6 sm:p-8 pb-4 border-b border-white/10 flex items-start justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.05] border border-white/10 p-3 flex items-center justify-center shrink-0">
                        <img
                          src={workExperience[selected]?.thumbnail}
                          alt={`${workExperience[selected]?.title} thumbnail`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple/20 text-purple border border-purple/30 font-semibold">
                            Role {selected + 1} of {workExperience.length}
                          </span>
                        </div>
                        <h2 id={`experience-title-${selected}`} className="text-xl sm:text-2xl font-bold mt-1.5 text-white">
                          {workExperience[selected]?.title}
                        </h2>
                        <p className="mt-1 text-white/80 text-sm sm:text-base leading-relaxed">
                          {workExperience[selected]?.desc}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      aria-label="Close modal"
                      className="shrink-0 text-neutral-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all text-xl"
                    >
                      <MdClose />
                    </button>
                  </div>

                  {/* Scrollable Content Body */}
                  <div className="flex-1 overflow-y-auto overscroll-contain p-6 sm:p-8 space-y-5 custom-scrollbar" data-lenis-prevent>
                    {workExperience[selected]?.modalContent?.paragraph && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-purple mb-1.5">Overview</h4>
                        <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                          {workExperience[selected]?.modalContent?.paragraph}
                        </p>
                      </div>
                    )}

                    {workExperience[selected]?.modalContent?.responsibilities && (
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Key Contributions & Impact</h4>
                        <ul className="space-y-2.5">
                          {workExperience[selected]?.modalContent?.responsibilities?.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-white/75 leading-relaxed">
                              <span className="h-1.5 w-1.5 rounded-full bg-purple mt-2 shrink-0 shadow-[0_0_8px_rgba(203,172,249,0.8)]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Sticky Footer */}
                  <div className="shrink-0 p-4 sm:px-8 border-t border-white/10 bg-[#080b21]/90 backdrop-blur-md flex items-center justify-between">
                    <span className="text-xs text-neutral-400 hidden sm:inline">
                      Navigate with <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[11px] font-mono border border-white/10">←</kbd> <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[11px] font-mono border border-white/10">→</kbd> or <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[11px] font-mono border border-white/10">Esc</kbd>
                    </span>
                    <div className="flex items-center gap-3 ms-auto">
                      <button
                        onClick={handlePrev}
                        className="text-xs sm:text-sm px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-neutral-200 hover:text-white border border-white/10 transition-all font-medium"
                        aria-label="Previous experience"
                      >
                        Previous
                      </button>
                      <button
                        onClick={handleNext}
                        className="text-xs sm:text-sm px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-neutral-200 hover:text-white border border-white/10 transition-all font-medium"
                        aria-label="Next experience"
                      >
                        Next
                      </button>
                      <button
                        onClick={() => setSelected(null)}
                        className="text-xs sm:text-sm px-4 py-2 rounded-xl bg-purple/20 hover:bg-purple/30 text-purple border border-purple/30 transition-all font-medium"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};

export default Experience;
