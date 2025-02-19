/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.team-bhp.com",
      },
      {
        protocol: "https",
        hostname: "timesofindia.indiatimes.com",
      },
    ],
  },
};

export default nextConfig;
