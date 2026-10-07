import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import SmoothScroll from "@/components/SmoothScroll";
// import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pranav-portfolio-woad.vercel.app'),
  title: "Pranav Sharma | Full Stack Developer & Software Engineer",
  description:
    "Explore the portfolio of Pranav Sharma — Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, Three.js, and high-performance scalable web applications.",
  authors: [{ name: "Pranav Sharma" }],
  keywords: [
    "Pranav Sharma",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Web Developer",
    "Frontend & Backend Engineer",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Pranav Sharma | Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and high-performance modern web experiences.",
    url: "https://pranav-portfolio-woad.vercel.app",
    siteName: "Pranav Sharma Portfolio",
    images: [
      {
        url: "/portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Pranav Sharma Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Sharma | Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and high-performance modern web experiences.",
    images: ["/portfolio.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://pranav-portfolio-woad.vercel.app/#person",
                  name: "Pranav Sharma",
                  url: "https://pranav-portfolio-woad.vercel.app",
                  jobTitle: "Full Stack Developer & Software Engineer",
                  description:
                    "Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, Three.js, and scalable web applications.",
                  image: "https://pranav-portfolio-woad.vercel.app/profile.svg",
                  sameAs: [
                    "https://github.com/sanctionedpranav",
                    "https://www.linkedin.com/in/pranav-sharma-frontend/",
                    "https://instagram.com/sanctionedpranav",
                  ],
                  knowsAbout: [
                    "Full Stack Development",
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "Express.js",
                    "TypeScript",
                    "JavaScript",
                    "REST APIs",
                    "Tailwind CSS",
                    "GSAP",
                    "Three.js",
                    "Redux Saga",
                    "Framer Motion",
                    "Web Performance Optimization",
                    "Scalable Architecture",
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "Full Stack Software Engineering",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://pranav-portfolio-woad.vercel.app/#website",
                  url: "https://pranav-portfolio-woad.vercel.app",
                  name: "Pranav Sharma — Full Stack Portfolio",
                  description:
                    "Official Portfolio of Pranav Sharma — Full Stack Developer & Software Engineer",
                  publisher: {
                    "@id": "https://pranav-portfolio-woad.vercel.app/#person",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className}`}>
        <Analytics />
        {/* <CustomCursor />   */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
