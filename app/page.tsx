'use client';

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const Grid = dynamic(() => import("@/components/Grid"));
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Clients = dynamic(() => import("@/components/Clients"));
const Experience = dynamic(() => import("@/components/Experience"));
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingButtons = dynamic(() => import("../components/ui/FloatingButtons"), { ssr: false });
const BackToTop = dynamic(() => import("../components/ui/BackToTop"), { ssr: false });
const Toaster = dynamic(() => import("react-hot-toast").then((mod) => mod.Toaster), { ssr: false });

export default function Home() {
  const [position, setPosition] = useState<'bottom-right' | 'bottom-center'>('bottom-right');

  useEffect(() => {
    const updatePosition = () => {
      setPosition(window.innerWidth < 768 ? 'bottom-center' : 'bottom-right');
    };

    updatePosition(); // initial run
    window.addEventListener('resize', updatePosition); // update on resize

    return () => window.removeEventListener('resize', updatePosition);
  }, []);
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <Toaster
        position={position}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1e1e2f", // deep slate-indigo (matches dark theme)
            color: "#ffffff",
            border: "1px solid #3b82f6", // soft neon-blue border
            fontSize: "18px",
            padding: '0.8rem 1.6rem',
            marginBottom: '8px',
            marginTop: '8px',
          },
          success: {
            iconTheme: {
              primary: "#22c55e", // green for success
              secondary: "#1e1e2f",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444", // red for error
              secondary: "#1e1e2f",
            },
          },
        }}
      />


      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
        <FloatingButtons />
        <BackToTop />
      </div>
    </main>
  );
}
