const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

const nextConfig = {
  basePath: "/caotian-website",
  assetPrefix: "/caotian-website/",
  reactStrictMode: true,
};

// 使用 withNextra 高階函數來封裝你的 nextConfig
module.exports = withNextra(nextConfig);
