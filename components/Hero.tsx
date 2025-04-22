'use client';

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { HiDownload } from "react-icons/hi";
import toast from 'react-hot-toast';

const Hero = () => {
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
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-top-20 md:-left-32 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.05] bg-grid-black/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="flex justify-center relative md:my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center gap-3 md:gap-0'>
          <h2 className='uppercase tracking-widest text-sm text-center text-blue-100 max-w-96'>
            Dynamic Web Magic with PIXEL-PERFECT UI IN next.js"
          </h2>

          <TextGenerateEffect
            className='text-center text-3xl md:text-5xl lg:text-6xl'
            words='Transforming Concepts into High-Performance User Experiences'
          />

          <p className=' max-w-6xl text-center md:tracking-wider mb-4 text-md md:text-lg lg:text-2xl md:mt-4'>
            Hi, I&apos;m <span className="text-purple font-bold">Pranav Sharma</span> — a Frontend Engineer building fast, scalable interfaces with <span className='text-purple'>React.js and Next.js</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <a href="#about">
              <MagicButton
                title="Explore My Work"
                icon={<FaLocationArrow />}
                position='right'
                otherClasses="hover:bg-slate-900 transition duration-300 !text-md px-7"

              />
            </a>

            <MagicButton
              title="Download Resume"
              icon={<HiDownload />}
              position="right"
              otherClasses="hover:bg-slate-900 transition duration-300 !text-md px-7"
              handleClick={handleDownload}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero