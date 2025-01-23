import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "5m0t94n8-1337.euw.devtunnels.ms",
      // },
      {
        protocol: "http",
        hostname: "87.236.23.32",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
