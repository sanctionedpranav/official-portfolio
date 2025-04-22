import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import ClientOnly from "@/components/ClientOnly";
import SmoothScrollProvider from "@/components/ui/SmoothScroller";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranav's Portfolio",
  description: "Modern & Minimalist Frontend Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ClientOnly>
          <SmoothScrollProvider />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
