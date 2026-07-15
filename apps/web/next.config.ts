import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: process.cwd().replace(/\/apps\/web$/, ""),
  transpilePackages: ["@workspace/ui"],
}

export default nextConfig
