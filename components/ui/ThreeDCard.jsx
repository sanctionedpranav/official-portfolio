"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCard({ title, href, desc, img, iconLists, getCodeLink }) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="flex flex-col gap-4 h-full w-full rounded-xl py-8 px-6 md:px-12 border border-black/[0.1] dark:border-white/[0.2] dark:hover:shadow-emerald-500/[0.1] dark:hover:shadow-2xl transition-shadow duration-300 ease-in-out group/card">
        {/* Title */}
        <CardItem translateZ="50" className="text-xl md:text-2xl font-semibold text-neutral-800 dark:text-white">
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
            className="w-full h-56 object-cover rounded-xl group-hover/card:shadow-2xl transition-all duration-300 rotate-2"
          />
        </CardItem>

        {/* Tech Stack & Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
          {/* Tech Stack */}
          <div className="flex items-center gap-2">
            {iconLists?.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="tech-icon"
                className="w-6 h-6 hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {/* Visit Site Button */}
            <CardItem
              as="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              translateZ={30}
              className="px-5 py-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-semibold shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300"
            >
              Visit Site
            </CardItem>

            {/* Get Code Button */}
            {
              getCodeLink && (
                <CardItem
                  as="a"
                  href={getCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  translateZ={30}
                  className="px-5 py-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-semibold shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300"
                >
                  Get Code
                </CardItem>
              )
            }
          </div>
        </div>

      </CardBody>

    </CardContainer>
  );
}
