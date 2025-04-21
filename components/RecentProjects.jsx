"use client";

import { projects } from "@/data";
import React from "react";
import ThreeDCard from "./ui/ThreeDCard";

const RecentProjects = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-10 mt-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] flex justify-center"
          >
            <ThreeDCard
              title={project.title}
              desc={project.des}
              img={project.img}
              href={project.link}
              iconLists={project.iconLists}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
