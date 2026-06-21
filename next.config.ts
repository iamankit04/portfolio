import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained .next/standalone bundle for minimal Docker images.
  // The standalone folder includes only the traced files needed to run the app
  // and a minimal server.js entry point (no separate `next start` needed).
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js/output
  output: "standalone",
};

export default nextConfig;
