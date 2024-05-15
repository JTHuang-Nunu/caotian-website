const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

const nextConfig = {
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
};

module.exports = withNextra(nextConfig);
