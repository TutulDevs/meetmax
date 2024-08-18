/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        // https://t-meetmax.vercel.app/
        protocol: "https",
        hostname: "t-meetmax.vercel.appe",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
