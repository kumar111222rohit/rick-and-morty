// const withSass = require('@zeit/next-sass');
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  distDir: 'build',
  assetPrefix: '',
  env: {
    API_BASE_URL: isProd
      ? 'https://rickandmortyapi.com'
      : 'https://rickandmortyapi.com',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config

    // Important: return the modified config
    return config;
  },
};
