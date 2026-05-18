import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-0218d5cd176b4ab3a44627e4fad3872c.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;