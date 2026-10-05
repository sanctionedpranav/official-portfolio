"use client"; 

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";

import { motion } from "motion/react";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 section-defer">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 w-full">
        <div
          className="w-full min-h-[26rem] md:min-h-[29rem] py-4 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Section Divider Badge */}
        <div className="flex items-center justify-center gap-3 mt-14 mb-8">
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-purple/50" />
          <span className="text-xs uppercase tracking-widest text-purple font-semibold px-4 py-1.5 rounded-full border border-purple/30 bg-purple/10 backdrop-blur-md">
            Previous Organizations & Experience
          </span>
          <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-purple/50" />
        </div>

        {/* Aceternity Glowing Company Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-[1px] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Aceternity Animated Gradient Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple/30 via-blue-500/20 to-purple/10 rounded-2xl transition-all duration-500 group-hover:from-purple group-hover:via-cyan-400 group-hover:to-blue-500 group-hover:opacity-100 opacity-60" />

              {/* Card Container */}
              <div className="relative h-48 sm:h-52 rounded-2xl bg-gradient-to-b from-[#0b0e27]/95 via-[#080b21]/90 to-[#04071d]/95 backdrop-blur-xl p-5 flex flex-col justify-between items-center transition-all duration-300 group-hover:shadow-[0_0_35px_-5px_rgba(120,119,198,0.25)]">
                
                {/* Radial Spotlight Light on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.18),transparent_70%)]" />

                {/* Company Name Badge on Top */}
                <div className="w-full flex items-center justify-between z-10">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 group-hover:text-purple transition-colors duration-300">
                    {company.name}
                  </span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple opacity-75 group-hover:block hidden" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple/40 group-hover:bg-purple transition-colors" />
                  </span>
                </div>

                {/* Logo Center Display with Elevated Glass Box */}
                <div className="w-full h-24 my-auto rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center px-3 py-2 transition-all duration-300 group-hover:bg-white/[0.06] group-hover:border-purple/30 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.12)] z-10">
                  {company.id === 1 ? (
                    <div className="flex items-center gap-3">
                      <img
                        src={company.img}
                        alt={company.name}
                        loading="lazy"
                        decoding="async"
                        className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(74,229,181,0.4)] group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="text-white font-bold text-lg tracking-wide group-hover:text-cyan-300 transition-colors duration-300">
                        AvalonTribe
                      </span>
                    </div>
                  ) : (
                    <img
                      src={company.img}
                      alt={company.name}
                      aria-label={company.name}
                      loading="lazy"
                      decoding="async"
                      className={`object-contain group-hover:scale-105 transition-transform duration-300 ${company.customClassName}`}
                    />
                  )}
                </div>

                {/* Role / Experience Tag */}
                <div className="w-full pt-2 border-t border-white/[0.06] flex items-center justify-center z-10">
                  <span className="text-xs text-[#C1C2D3] font-medium group-hover:text-white transition-colors duration-300">
                    {company.role}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;