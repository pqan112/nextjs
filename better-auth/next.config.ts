import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sj8ced4wbd.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
