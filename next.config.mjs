// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   images:{
//     domains: ['i.postimg.cc', 'www.svgrepo.com']

//   }
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;