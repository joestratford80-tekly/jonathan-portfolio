/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add remote domains here if you ever load images from an external host.
    // Local images in /public are optimized automatically.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
