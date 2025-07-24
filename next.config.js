/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  // Optimize for 3D assets and large files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf|obj|mtl)$/,
      type: 'asset/resource',
    });
    return config;
  },
}

module.exports = nextConfig 