import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.nasa.gov",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
