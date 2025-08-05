// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // needed if you use next/image
  },
  // Optional: basePath if deploying to a subfolder
  // basePath: '/englishbytom',
}

module.exports = nextConfig