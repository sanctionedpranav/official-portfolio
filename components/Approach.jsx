"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { approachSteps } from "@/data";

export function Approach() {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Approach</span>
      </h1>
      <div
        className="my-20 flex flex-col lg:flex-row items-center gap-4">
        {approachSteps?.map(({ phase, title, description, bg, animationSpeed, colors }) => (
          <Card key={title} title={title} icon={<AceternityIcon order={phase} />} description={description} >
            <CanvasRevealEffect animationSpeed={animationSpeed} containerClassName={bg} colors={colors} />
          </Card>
        ))}
      </div>
    </section>
  );
}

const Card = ({
  title,
  description,
  icon,
  children
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[30rem] h-[15rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        {/* Centered Icon (Phase Badge) */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/canvas-card:opacity-0 transition duration-300 ease-out flex items-center justify-center w-full"
        >
          {icon}
        </div>

        {/* Card Title */}
        <h2
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-center opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition-all duration-300 ease-out text-white z-10"
        >
          {title}
        </h2>

        {/* Card Description */}
        <p
          className="mt-3 text-sm md:text-base lg:text-base leading-relaxed text-center text-white/80 opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-1 transition-all duration-300 ease-out max-w-xs mx-auto z-10"
        >
          {description}
        </p>
      </div>

    </div>
  );
};

const AceternityIcon = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 font-bold text-white backdrop-blur-3xl text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
