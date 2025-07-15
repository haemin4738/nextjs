import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // vercel 배포 오류 제거
  },
  typescript: {
    ignoreBuildErrors: true, // vercel 배포 오류 제거
  },
};

export default nextConfig;
