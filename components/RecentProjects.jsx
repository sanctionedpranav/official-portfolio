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

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {projects.map(({ id, title, des, img, link, iconLists }) => (
          <ThreeDCard
            key={id}
            title={title}
            desc={des}
            img={img}
            href={link}
            iconLists={iconLists}
          />
        ))}
      </div>

    </section>
  );
};

export default RecentProjects;
