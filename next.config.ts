import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Обработка SVG как React-компонентов
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "old-images.hb.ru-msk.vkcs.cloud"},
    ],
  },
};

export default nextConfig;
