import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages (user site: https://sarthakbank.github.io/).
 * No basePath / assetPrefix — site root.
 * next/image: unoptimized required for static export (no Image Optimization API on Pages).
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
