'use client'
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [position, setPosition] = useState<'top-right' | 'bottom-center'>('top-right');

  useEffect(() => {
    const updatePosition = () => {
      setPosition(window.innerWidth < 768 ? 'bottom-center' : 'top-right');
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
            fontSize: "15px",
            marginBottom:'8px',
            marginTop:'8px',
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
      </div>
    </main>
  );
}
