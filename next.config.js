const path = require("path");
const customHeaders = require("remark-heading-id");
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
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            remarkPlugins: [customHeaders],
          },
        },
        path.join(__dirname, "./plugins/md-layout-loader"),
      ],
    });
    return config;
  },
});
