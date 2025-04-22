"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  HiOutlineMenu,
  HiX,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineDocumentText,
  HiOutlineMail,
} from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        direction < 0 ? setVisible(true) : setVisible(false);
      }
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuAnimation = {
    hidden: { opacity: 0, y: "-100%", scaleY: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      scaleY: 0.8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      {isMobile ? (
        <>
          <div className="fixed top-5 right-5 z-[6000] flex items-center gap-3">
            {/* Theme Toggle Placeholder */}
            {/* <button className="p-2 rounded-full border border-white/20 bg-[#1a1a1a] text-white hover:bg-white/10">
              <MdOutlineDarkMode size={20} />
            </button> */}

            {/* Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-full bg-slate-900 text-white shadow-md"
            >
              {isMenuOpen ? <HiX size={34} /> : <HiOutlineMenu size={34} />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Background Blur Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[4999] bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                  variants={menuAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={cn(
                    "fixed top-0 left-0 right-0 z-[5000] mx-auto mt-20 w-[90%] max-w-md px-6 py-8 text-white shadow-2xl border border-white/10 backdrop-blur-xl rounded-2xl bg-[rgba(17,25,40,0.65)]",
                    className
                  )}
                >
                  <nav className="flex flex-col gap-6 text-lg font-medium">
                    {navItems.map((navItem, idx) => (
                      <Link
                        key={`link-${idx}`}
                        href={navItem.link}
                        className="flex items-center gap-3 hover:text-purple transition"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-xl"><MdKeyboardArrowRight /></span>
                        <span>{navItem.name}</span>
                      </Link>
                    ))}
                  </nav>

                  {/* Socials */}
                  <div className="mt-6 border-t border-gray-700 pt-5">
                    <p className="text-sm mb-2">Follow us on</p>
                    <div className="flex gap-4">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        className="text-white bg-slate-800 p-2 rounded-md hover:bg-sky-600 transition"
                      >
                        <FaLinkedin size={20} />
                      </a>
                      <a
                        href="https://x.com"
                        target="_blank"
                        className="text-white bg-slate-800 p-2 rounded-md hover:bg-pink-600 transition"
                      >
                        <FaXTwitter size={20} />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        className="text-white bg-slate-800 p-2 rounded-md hover:bg-fuchsia-600 transition"
                      >
                        <FaInstagram size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 1, y: -100 }}
            animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-full border border-white/10 shadow-[0_0_10px_rgba(59,130,246,0.4)] items-center justify-center space-x-4",
              className
            )}
            style={{
              backdropFilter: "blur(10px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
          >
            {navItems.map((navItem, idx: number) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className="relative dark:text-neutral-50 flex items-center space-x-2 text-neutral-400 dark:hover:text-neutral-200 hover:text-neutral-300 transition"
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="text-base font-medium">{navItem.name}</span>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      )
      }
    </>
  );
};
