// next.config.ts

import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during build
  },

  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during build
  },

  // other configs can go here
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
