"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);

      setHasInitialized(true);
    }
  }, [direction, speed, hasInitialized]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-[70vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4",
          hasInitialized && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[80vw] max-w-full md:w-[60vw] lg:w-[40vw] shrink-0 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0D111C] to-[#101624] p-6 md:p-10 backdrop-blur-lg shadow-xl transition-all duration-300 hover:scale-[1.01]"
          >
            <blockquote className="flex flex-col gap-6">
              {/* Quote Text */}
              <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed font-light tracking-tight">
                “{item.quote}”
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <Image
                  src="/profile.svg"
                  alt="Profile image"
                  width={48}
                  height={48}
                  className="rounded-full border border-white/20"
                />
                <div className="flex flex-col">
                  <span className="text-white text-base font-semibold">{item.name}</span>
                  <span className="text-white/60 text-sm">{item.title}</span>
                </div>
              </div>
            </blockquote>
          </li>

        ))}
      </ul>
    </div>
  );
};
