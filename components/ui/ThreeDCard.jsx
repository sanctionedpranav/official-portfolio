"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCard({ title, href, desc, img, iconLists }) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="flex flex-col gap-4 h-full w-full rounded-xl py-8 px-12 border border-black/[0.1] dark:border-white/[0.2] dark:hover:shadow-emerald-500/[0.1] dark:hover:shadow-2xl transition-shadow duration-300 ease-in-out group/card">
        {/* Title */}
        <CardItem translateZ="50" className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-white">
          {title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300 line-clamp-3"
        >
          {desc}
        </CardItem>

        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={img}
            alt={title}
            className="w-full h-48 object-contain rounded-xl group-hover/card:shadow-xl transition-all duration-300"
          />
        </CardItem>

        {/* Tech Stack & Button */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            {iconLists?.map((icon, index) => (
              <img key={index} src={icon} alt="tech-icon" className="w-6 h-6" />
            ))}
          </div>
          <CardItem
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            translateZ={20}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Visit site
          </CardItem>
        </div>
      </CardBody>

    </CardContainer>
  );
}
