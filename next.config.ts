import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "uxvwfmtqdoosetjbuudq.supabase.co", // 你自己的 Supabase 存储域名
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
