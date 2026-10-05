import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
// import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sanctionedpranav.vercel.app'),
  title: "Pranav Sharma | Frontend Developer & UI Engineer",
  description:
    "Explore the portfolio of Pranav Sharma — Frontend Developer specializing in React, Next.js, TypeScript, Three.js, and high-performance modern web applications.",
  authors: [{ name: "Pranav Sharma" }],
  keywords: [
    "Pranav Sharma",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "UI/UX Engineer",
    "Software Engineer",
    "Web Developer",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Pranav Sharma | Frontend Developer & UI Engineer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, and high-performance modern web experiences.",
    url: "https://sanctionedpranav.vercel.app",
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
    title: "Pranav Sharma | Frontend Developer & UI Engineer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, and high-performance modern web experiences.",
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
          {children}
        </ThemeProvider>
      </body>
    </html>

  );
}
