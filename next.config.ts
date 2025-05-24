// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   sassOptions: {
//     silenceDeprecations: ["legacy-js-api"],
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//       },
//       {
//         protocol: "https",
//         hostname: "assets.aceternity.com",
//       },
//       {
//         protocol: "https",
//         hostname: "images.pexels.com",
//       },
//       {
//         protocol: "https",
//         hostname: "img.freepik.com",
//       },
//     ],
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // 👇 Add this line to enable static export
  output: "export",

  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },

  images: {
     unoptimized: true, 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
};

export default nextConfig;
