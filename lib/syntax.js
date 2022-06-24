import { visit } from "unist-util-visit";

const visitor = (node) => {
  if (node.tagName === "code") {
    if (node.data && node.data.meta) {
      node.properties.metastring = node.data.meta;
    }
  }
};

/* 解析代码行范围，格式：
   add=1,3-5,10
*/
const parseRange = (str) =>
  str.split(",").reduce((res, cur) => {
    let [start, end] = cur.split("-").map(Number);
    if (!end) {
      // 单个数字
      res.add(--start);
    } else {
      // 范围
      --start, --end;
      while (start <= end) {
        res.add(start++);
      }
    }
    return res;
  }, new Set());

export const getCodeMeta = (options) => (tree) => {
  visit(tree, "element", visitor);
};

export const extractMeta = (string) => {
  const result = {};
  if (!string) return result;
  const options = string.split(" ");
  options.forEach((option) => {
    // 解析属性
    const [key, value] = option.split("=");
    // 处理高亮（增、删、普通）
    if (["add", "del", "hl"].includes(key)) {
      result[key] = [...parseRange(value)];
    } else {
      result[key] = value;
    }
  });
  return result;
};
