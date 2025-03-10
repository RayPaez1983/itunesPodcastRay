/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (!dev) {
      // Producción: Minimizar y concatenar assets
      config.optimization.minimize = true;
    } else {
      // Desarrollo: Mantener archivos sin minimizar
      config.optimization.minimize = false;
    }
    return config;
  },
  env: {
    ASSET_MODE: process.env.NODE_ENV === 'production' ? 'minified' : 'raw',
  },
};

module.exports = nextConfig;
