import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/docker",
  assetPrefix: "/docker/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
