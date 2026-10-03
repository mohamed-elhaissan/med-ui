import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/docs", permanent: false },
      { source: "/components", destination: "/docs/components", permanent: false },
      { source: "/components/:name", destination: "/docs/components/:name", permanent: false },
      { source: "/docs/installation", destination: "/docs#installation", permanent: false },
      { source: "/docs/cli", destination: "/docs#installation", permanent: false },
      { source: "/docs/registry", destination: "/docs#registry", permanent: false },
    ];
  },
};

export default nextConfig;
