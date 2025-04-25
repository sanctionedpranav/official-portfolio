"use client"; 

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";

import { motion } from "motion/react";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 p-6 sm:p-10 rounded-2xl border border-white/10 bg-[rgba(17,25,40,0.45)] backdrop-blur-xl shadow-lg"
      >
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              src={company.img}
              alt={company.name}
              aria-label={company.name}
              loading="lazy"
              className={`object-contain ${company.customClassName}`}
            />
          </div>
        ))}
      </motion.div>
      </div>
    </section>
  );
};

export default Clients;