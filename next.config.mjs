/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images2.minutemediacdn.com",
      },
      {
        protocol: "https",
        hostname: "image.tving.com",
      },
      {
        protocol: "https",
        hostname: "puui.wetvinfo.com",
      },
      {
        protocol: "https",
        hostname: "m.ykimg.com",
      },
      {
        protocol: "https",
        hostname: "occ-0-64-58.1.nflxso.net",
      },
      {
        protocol: "https",
        hostname: "d2anahhhmp1ffz.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "prod-images.viu.com",
      },
    ],
  },
};

export default nextConfig;
