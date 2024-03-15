/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'tailwindui.com' },
      { hostname: 'res.cloudinary.com' }
    ],
  },
}

export default nextConfig;
