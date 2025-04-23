'use client';

import { socialMedia } from '@/data'
import { motion } from "motion/react";

import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'

const Footer = () => {
  return (
    <footer className='w-full md:mb-5 pb-10' id='contact'>
      <div className='flex flex-col items-center'>
        <h2 className='heading lg:max-w-[45vw]'>
          Let’s elevate <span className='text-purple'>your frontend</span> — clean, fast, and crafted for impact.
        </h2>

        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Open to collaboration, freelance work, and long-term roles. Let’s build something users love.
        </p>

        <a href="mailto:pranavs0208@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />

        </a>

      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center w-full'>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='md:text-base text-sm md:font-normal font-light text-center md:text-left'
        >
          © 2025 Pranav — Built with dedication & clean code
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className='flex items-center md:gap-4 gap-6 py-5'
        >
          {socialMedia?.map((profile) => (
            <motion.a
              key={profile.id}
              href={profile.link}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='group w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-70 bg-[#111827] hover:bg-[#1f2937] rounded-lg border border-white/10 transition duration-300 relative'
            >
              <img
                src={profile.img}
                alt={`social-${profile.id}`}
                width={20}
                height={20}
              />
              <span className='absolute -top-8 scale-0 group-hover:scale-100 transition duration-300 bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-lg z-50'>
                {profile.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

    </footer>
  )
}

export default Footer