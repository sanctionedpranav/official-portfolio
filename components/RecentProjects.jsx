"use client";

import { projects } from "@/data";
import React, { useState } from "react";
import ThreeDCard from "./ui/ThreeDCard";
import MagicButton from "./ui/MagicButton";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'


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
    <section className="py-20 px-4">
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

        <div className="col-span-full flex items-start justify-center gap-10">
          <MagicButton
            title="Previous"
            icon={<FaArrowLeft />}
            position='left'
            handleClick={handlePrevious}
            otherClasses="hover:bg-slate-900 transition duration-300 !text-lg px-7"

          />
          <MagicButton
            title="Next"
            icon={<FaArrowRight />}
            position='right'
            handleClick={handleNext}
            otherClasses="hover:bg-slate-900 transition duration-300 !text-lg px-7"

          />
          {/* <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </button> */}
        </div>
      </div>

    </section>
  );
};

export default RecentProjects;
