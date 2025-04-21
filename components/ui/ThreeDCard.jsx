"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCard({ title, href, children, desc, img, iconLists }) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="relative group/card w-full rounded-xl p-6 border border-black/[0.1] dark:border-white/[0.2] dark:hover:shadow-emerald-500/[0.1] dark:hover:shadow-2xl">
        {/* Title */}
        <CardItem translateZ="50" className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-white">
          {title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          {desc}
        </CardItem>

        {/* Project Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={img}
            width={1000}
            height={1000}
            className="h-48 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {iconLists?.map((icon, index) => (
            <img key={index} src={icon} alt="tech-icon" className="w-6 h-6" />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Visit →
          </CardItem>

          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
