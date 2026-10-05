"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";

export default function ThreeDCard({ title, href, desc, img, iconLists, getCodeLink }) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="flex flex-col gap-4 h-full w-full rounded-2xl py-7 px-6 md:px-8 border border-white/[0.1] bg-[#0b0e27]/70 backdrop-blur-xl shadow-xl dark:hover:shadow-[0_0_35px_-5px_rgba(139,92,246,0.25)] transition-all duration-300 ease-in-out group/card">
        {/* Title */}
        <CardItem translateZ="50" className="text-xl md:text-2xl font-bold text-white group-hover/card:text-purple transition-colors">
          {title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-400 text-sm leading-relaxed line-clamp-3"
        >
          {desc}
        </CardItem>

        {/* Preview Image (Straight by default, smoothly scales on 3D hover) */}
        <CardItem translateZ="80" className="w-full mt-2">
          <div className="w-full h-56 rounded-xl overflow-hidden border border-white/10 bg-[#080b21] relative shadow-lg">
            <img
              src={img}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-xl group-hover/card:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </CardItem>

        {/* Tech Stack & Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-5 gap-4 pt-2 border-t border-white/[0.06]">
          {/* Overlapping Glassmorphic Tech Stack Pills */}
          <div className="flex items-center pl-1">
            {iconLists?.map((icon, index) => (
              <div
                key={index}
                style={{ transform: `translateX(-${index * 8}px)` }}
                className="h-8 w-8 rounded-full border border-white/[0.15] bg-[#0b0e27] backdrop-blur-md flex items-center justify-center p-1.5 shadow-sm transition-transform duration-300 hover:scale-125 hover:z-30 hover:border-purple/50 group/icon"
                title="Tech stack item"
              >
                <img
                  src={icon}
                  alt="tech-icon"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Action Buttons: Primary & Secondary Hierarchy */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            {/* Secondary: Source Code Button (Frosted Glass Outline) */}
            {getCodeLink && (
              <CardItem
                as="a"
                href={getCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                translateZ={30}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-purple/40 text-neutral-300 hover:text-white text-xs font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105"
              >
                <FaGithub className="text-xs" />
                <span>Code</span>
              </CardItem>
            )}

            {/* Primary: Visit Site Live Button (Glowing Gradient) */}
            <CardItem
              as="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              translateZ={40}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-purple to-indigo-600 hover:from-purple hover:to-cyan-400 text-white text-xs font-semibold shadow-[0_0_15px_rgba(139,92,246,0.35)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105"
            >
              <span>Visit Live</span>
              <FaLocationArrow className="text-[10px]" />
            </CardItem>
          </div>
        </div>

      </CardBody>
    </CardContainer>
  );
}
