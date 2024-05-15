const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

// const nextConfig = {
//   // basePath: process.env.BASE_PATH,
//   // assetPrefix: process.env.ASSET_PREFIX,
//   // reactStrictMode: true,
//   output: 'export',
//   distDir: 'dist',
//   // images: {
//   //   unoptimized: true,
//   // }
// };

module.exports = withNextra(nextConfig);
