import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
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
