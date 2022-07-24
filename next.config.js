const withOptimizedImages = require("next-optimized-images");
const isProd = process.env.DEPLOY_TARGET === "gh-pages";

module.exports = withOptimizedImages({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  handleImages: ["jpg", "gif"],
  images: {
    disableStaticImages: true,
  },
  assetPrefix: isProd ? "/kelvinleung.github.io/" : "",
  async redirects() {
    return [
      {
        source: "/posts/:type",
        destination: "/posts/:type/1",
        permanent: true,
      },
    ];
  },
});
