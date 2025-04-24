'use client';

import { workExperience } from '@/data';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './ui/MovingBorder';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';

const Experience = () => {
  const [selected, setSelected] = useState(null);

  const handlePrev = () => {
    setSelected((prev) => (prev > 0 ? prev - 1 : workExperience.length - 1));
  };

  const handleNext = () => {
    setSelected((prev) => (prev < workExperience.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="experience" className="py-20">
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

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl p-6 sm:p-10 md:p-12 rounded-3xl bg-[rgba(17,25,40,0.65)] border border-white/10 shadow-2xl backdrop-blur-lg text-white 
             max-h-[78vh] overflow-y-auto"
            >

              <button
                onClick={() => setSelected(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-white text-2xl"
              >
                <MdClose />
              </button>
              <div className="flex flex-col items-start gap-6">
                <div className='flex flex-col lg:flex-row items-center gap-6'>
                  <img
                    src={workExperience[selected]?.thumbnail}
                    alt={`${workExperience[selected]?.title} thumbnail`}
                    className="w-24 h-24 object-contain "
                  />
                  <div>
                    <h2 className="text-3xl font-bold">
                      {workExperience[selected]?.title}
                    </h2>
                    <p className="mt-3 text-white/90 text-lg">
                      {workExperience[selected]?.desc}
                    </p>
                  </div>
                </div>
                <div>
                  {workExperience[selected]?.modalContent?.paragraph && (
                    <p className="mt-4 text-base text-white/80">
                      {workExperience[selected]?.modalContent?.paragraph}
                    </p>
                  )}
                  <ul className="mt-4 list-disc list-inside text-base text-white/70 space-y-2">
                    {workExperience[selected]?.modalContent?.responsibilities?.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex justify-end gap-4">
                <button
                  onClick={handlePrev}
                  className="text-sm px-4 py-2 rounded bg-white/10 hover:bg-white/20"
                  aria-label="Previous experience"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="text-sm px-4 py-2 rounded bg-white/10 hover:bg-white/20"
                  aria-label="Next experience"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
