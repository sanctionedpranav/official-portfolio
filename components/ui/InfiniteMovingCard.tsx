"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    avatar?: string;
    company?: string;
    companyLogo?: string;
    accentColor?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    if (hasInitialized) return;

    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current!.appendChild(duplicatedItem);
      });

      // Set scroll direction
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      // Set scroll speed
      const duration =
        speed === "fast" ? "25s" : speed === "normal" ? "45s" : "90s";
      containerRef.current.style.setProperty("--animation-duration", duration);

      setHasInitialized(true);
    }
  }, [direction, speed, hasInitialized]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,white_6%,white_94%,transparent_100%)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 sm:gap-8 py-4",
          hasInitialized && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[88vw] sm:w-[480px] md:w-[540px] shrink-0 rounded-3xl p-[1px] group transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Aceternity Animated Gradient Border Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple/30 via-blue-500/20 to-purple/15 transition-all duration-500 group-hover:from-purple group-hover:via-cyan-400 group-hover:to-blue-500 opacity-70 group-hover:opacity-100" />

            {/* Testimonial Card Body */}
            <div className="relative h-full min-h-[300px] rounded-3xl bg-gradient-to-b from-[#0b0e27]/95 via-[#080b21]/90 to-[#04071d]/95 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group-hover:shadow-[0_0_35px_-5px_rgba(120,119,198,0.25)]">
              
              {/* Radial Spotlight on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,0.15),transparent_70%)]" />

              <div>
                {/* Header: Quotation Badge & Star Rating */}
                <div className="flex items-center justify-between mb-4 z-10 relative">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-xl bg-purple/15 border border-purple/30 flex items-center justify-center text-purple text-xl font-serif shadow-[0_0_12px_rgba(139,92,246,0.2)]">
                      “
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-purple px-2.5 py-1 rounded-md bg-purple/10 border border-purple/20">
                      Verified Client
                    </span>
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-400 text-sm tracking-wider">
                      ★★★★★
                    </div>
                    <span className="text-xs font-semibold text-white/70 ml-1">5.0</span>
                  </div>
                </div>

                {/* High-Contrast Readable Quote Text */}
                <p className="relative z-10 text-slate-100 text-[14.5px] sm:text-base leading-[1.75] font-normal tracking-wide select-text">
                  “{item.quote}”
                </p>
              </div>

              {/* Author & Organization Footer */}
              <div className="relative z-10 w-full pt-4 mt-6 border-t border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Distinct Colored Gradient Avatar Badge */}
                  <div
                    className={cn(
                      "h-11 w-11 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-[0_0_14px_rgba(139,92,246,0.25)] border border-white/20 bg-gradient-to-br shrink-0",
                      item.accentColor || "from-purple-500 to-indigo-600"
                    )}
                  >
                    {item.avatar || item.name.split(" ").map((n) => n[0]).join("")}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="text-white text-base font-semibold tracking-wide group-hover:text-purple transition-colors duration-300 truncate">
                      {item.name}
                    </span>
                    <span className="text-neutral-400 text-xs sm:text-sm font-medium truncate">
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Company Tag / Logo Badge */}
                {item.companyLogo && (
                  <div className="h-8 px-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center gap-1.5 shrink-0 shadow-inner group-hover:border-purple/30 transition-colors">
                    <img
                      src={item.companyLogo}
                      alt={item.company || "Company"}
                      className="h-4 w-auto object-contain max-w-[20px]"
                    />
                    {item.company && (
                      <span className="text-[11px] font-semibold text-neutral-300 hidden sm:inline">
                        {item.company}
                      </span>
                    )}
                  </div>
                )}
              </div>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
