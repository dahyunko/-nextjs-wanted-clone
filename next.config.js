/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, //application 내에서 문제가 일어날 수 있는 부분에 대한 경고
  experimental: {
    swcMinifyDebugOptions: {
      compress: {
        default: true,
        side_effects: false,
      },
    },
  },
  swcMinify: true, //Terser의 역할, 공백이나 주석을 삭제하여 용량을 줄이고 해당 스크립트를 암호화 하는 것
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
