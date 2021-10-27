const path = require("path");
const customHeaders = require("remark-heading-id");
const rehypePrism = require("@mapbox/rehype-prism");
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  handleImages: ["jpg"],
  images: {
    disableStaticImages: true,
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            remarkPlugins: [customHeaders],
            rehypePlugins: [rehypePrism],
          },
        },
        path.join(__dirname, "./plugins/md-layout-loader"),
      ],
    });
    return config;
  },
});
