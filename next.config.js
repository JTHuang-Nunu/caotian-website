const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

module.exports = withNextra()

const nextConfig = {
  basePath: "/caotian-website",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;