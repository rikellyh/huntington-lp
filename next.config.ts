import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pt-BR", "en-US"],
    defaultLocale: "pt-BR",
  },
};

export default nextConfig;
