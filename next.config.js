/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (!dev) {
      config.optimization.minimize = true;
    } else {
      config.optimization.minimize = false;
    }
    return config;
  },
  env: {
    ASSET_MODE: process.env.NODE_ENV === 'production' ? 'minified' : 'raw',
  },
};

module.exports = nextConfig;
