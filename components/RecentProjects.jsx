"use client";

import { projects } from "@/data";
import React, { useState } from "react";
import ThreeDCard from "./ui/ThreeDCard";
import MagicButton from "./ui/MagicButton";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { motion } from "framer-motion";


const RecentProjects = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;

  const totalPages = Math.ceil(projects.length / cardsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedProjects = projects.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  );
  return (
    <section id="projects" className="py-20 px-4 section-defer">
      <h2 className="text-center text-3xl md:text-4xl font-bold">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h2>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 justify-items-center">
        {displayedProjects.map(({ id, title, des, img, link, iconLists, getCodeLink }) => (
          <ThreeDCard
            key={id}
            title={title}
            desc={des}
            img={img}
            href={link}
            iconLists={iconLists}
            getCodeLink={getCodeLink}
          />
        ))}

        {/* Pagination & Catalog Depth Controls */}
        <div className="col-span-full w-full flex flex-col items-center justify-center gap-4 mt-8">
          {/* Page Indicator & Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={currentPage === 0}
              aria-label="Previous Page"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border font-medium text-sm transition-all duration-300 ${
                currentPage === 0
                  ? "border-white/[0.05] bg-white/[0.02] text-neutral-600 cursor-not-allowed"
                  : "border-white/[0.1] bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-purple/40 shadow-sm"
              }`}
            >
              <FaArrowLeft className="text-xs" />
              <span>Previous</span>
            </button>

            {/* Interactive Page Pills with Smooth Gliding Glassmorphic Indicator */}
            <div className="relative flex items-center gap-1 bg-[#0b0e27]/85 p-1.5 rounded-full border border-white/15 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)]">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  aria-label={`Go to page ${idx + 1}`}
                  aria-current={currentPage === idx ? "page" : undefined}
                  className={`relative h-9 w-9 rounded-full font-semibold text-sm transition-colors duration-200 flex items-center justify-center z-10 ${
                    currentPage === idx
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {currentPage === idx && (
                    <motion.div
                      layoutId="activePagePill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-white/[0.14] border border-white/30 backdrop-blur-md shadow-[0_0_16px_rgba(255,255,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.35)]"
                    />
                  )}
                  <span className="relative z-20">{idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              aria-label="Next Page"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border font-medium text-sm transition-all duration-300 ${
                currentPage === totalPages - 1
                  ? "border-white/[0.05] bg-white/[0.02] text-neutral-600 cursor-not-allowed"
                  : "border-white/[0.1] bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/[0.08] hover:border-purple/40 shadow-sm"
              }`}
            >
              <span>Next</span>
              <FaArrowRight className="text-xs" />
            </button>
          </div>

          {/* Project Count Indicator */}
          <span className="text-xs font-medium text-neutral-400 tracking-wide">
            Showing <span className="text-white font-semibold">{currentPage * cardsPerPage + 1}–{Math.min((currentPage + 1) * cardsPerPage, projects.length)}</span> of <span className="text-white font-semibold">{projects.length}</span> featured projects
          </span>
        </div>
      </div>

    </section>
  );
};

export default RecentProjects;
