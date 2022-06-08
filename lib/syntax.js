import { visit } from "unist-util-visit";

const visitor = (node) => {
  if (node.tagName === "code") {
    if (node.data && node.data.meta) {
      node.properties.metaString = node.data.meta;
    }
  }
};

export const getCodeMeta = (options) => (tree) => {
  visit(tree, "element", visitor);
};

export const extractMeta = (string) => {
  const result = {};
  if (!string) return result;
  const options = string.split(" ");
  options.forEach((option) => {
    const [key, value] = option.split("=");
    result[key] = value;
  });
  return result;
};
