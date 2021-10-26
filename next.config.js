const path = require("path");
const customHeaders = require("remark-heading-id");
const rehypePrism = require("@mapbox/rehype-prism");

module.exports = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  reactStrictMode: true,
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
};
