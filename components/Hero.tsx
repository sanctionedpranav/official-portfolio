'use client';

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { HiDownload, HiEye, HiExternalLink, HiX } from "react-icons/hi";
import toast from 'react-hot-toast';

const Hero = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewOpen(false);
    };
    if (previewOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [previewOpen]);

  const handleDownload = async () => {
    const downloading = toast.loading("Preparing download...");

    try {
      const response = await fetch('/Pranav_Resume.pdf');

      if (!response.ok) {
        throw new Error("File not found");
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = blobUrl;
      link.download = 'Pranav_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      toast.success("Resume downloaded!", { id: downloading });
    } catch (error) {
      console.error("Resume download failed:", error);
      toast.error("Could not download resume.", { id: downloading });
    }
  }

  return (
    <div className='pb-10 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-top-20 md:-left-32 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.05] bg-grid-black/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="flex justify-center relative md:mt-20 md:mb-10 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center gap-3 md:gap-0'>
          {/* Live Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0b0e27]/80 border border-emerald-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.15)] mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-xs sm:text-[13px] font-medium text-emerald-300 tracking-wide">
              Available for Full-Time Roles & Freelance
            </span>
          </div>

          <h2 className='uppercase tracking-widest text-sm text-center text-blue-100 max-w-xl'>
            Full-Stack Architecture & Modern Web Experiences
          </h2>

          <TextGenerateEffect
            className='text-center text-3xl md:text-5xl lg:text-6xl'
            words='Transforming Ideas into High-Performance Full-Stack Applications'
          />

          <p className='max-w-6xl text-center md:tracking-wider mb-4 text-md md:text-lg lg:text-2xl md:mt-4'>
            Hi, I&apos;m <span className="text-purple font-bold">Pranav Sharma</span> — a Full Stack Developer building scalable, end-to-end web applications with <span className='text-purple'>Next.js, Node.js, TypeScript & Modern UI</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6">
            <a href="#about">
              <MagicButton
                title="Explore My Work"
                icon={<FaLocationArrow />}
                position='right'
                otherClasses="hover:bg-slate-900 transition duration-300 !text-md px-7"
              />
            </a>

            <MagicButton
              title="Preview Resume"
              icon={<HiEye />}
              position="right"
              otherClasses="hover:bg-slate-900 transition duration-300 !text-md px-7"
              handleClick={() => setPreviewOpen(true)}
            />

            <MagicButton
              title="Download Resume"
              icon={<HiDownload />}
              position="right"
              otherClasses="hover:bg-slate-900 transition duration-300 !text-md px-7"
              handleClick={handleDownload}
            />
          </div>

          {/* Hero Credibility Metric Bar */}
          <div className="w-full max-w-3xl mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-3 sm:gap-6 text-center">
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm shadow-sm hover:border-purple/30 transition-all duration-300">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple to-indigo-400">
                5+
              </span>
              <span className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
                Years Experience
              </span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm shadow-sm hover:border-cyan-400/30 transition-all duration-300">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                10+
              </span>
              <span className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
                Shipped Projects
              </span>
            </div>

            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm shadow-sm hover:border-emerald-400/30 transition-all duration-300">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                95+
              </span>
              <span className="text-xs sm:text-sm text-neutral-400 font-medium mt-1">
                Performance Score
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Preview Modal */}
      {mounted && previewOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setPreviewOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-preview-title"
          >
            <div
              className="relative w-full max-w-4xl h-[88vh] bg-[#0b0e27] border border-white/15 rounded-3xl shadow-[0_0_50px_rgba(139,92,246,0.3)] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
            >
              {/* Modal Top Toolbar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#080b21]/95 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <h3 id="resume-preview-title" className="text-white font-semibold text-sm sm:text-base">
                    Pranav Sharma — Resume
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {/* Open in New Tab Button */}
                  <a
                    href="/Pranav_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-purple/40 text-neutral-300 hover:text-white text-xs font-medium transition-all"
                    title="Open in new browser tab"
                  >
                    <HiExternalLink className="text-sm" />
                    <span className="hidden sm:inline">New Tab</span>
                  </a>

                  {/* Download Button */}
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple/30 bg-purple/15 hover:bg-purple/25 text-purple-200 text-xs font-medium transition-all"
                    title="Download PDF"
                  >
                    <HiDownload className="text-sm" />
                    <span className="hidden sm:inline">Download</span>
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={() => setPreviewOpen(false)}
                    className="h-8 w-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
                    aria-label="Close modal"
                  >
                    <HiX className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Embedded PDF Viewer Frame */}
              <div className="relative flex-1 w-full h-full bg-[#121629]">
                <iframe
                  src="/Pranav_Resume.pdf#toolbar=0"
                  title="Pranav Sharma Resume"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}

export default Hero