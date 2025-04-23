import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import ClientOnly from "@/components/ClientOnly";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranav's Portfolio",
  description: "Modern & Minimalist Frontend Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        <meta name="theme-color" content="#111827" />
      </head>
      <body className={`${inter.className}`}>
        <ClientOnly>
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
