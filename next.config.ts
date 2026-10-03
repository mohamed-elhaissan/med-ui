import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/components", destination: "/docs/components", permanent: false },
      { source: "/components/:name", destination: "/docs/components/:name", permanent: false },
    ];
  },
};

export default nextConfig;
