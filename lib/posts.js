import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const postsDirectory = path.join(process.cwd(), "posts");
// 获取 /posts 目录下的文件名，过滤只要 MDX 文件
const fileNames = fs
  .readdirSync(postsDirectory)
  .filter((fileName) => fileName.match(/\.mdx$/));

export function getAllPosts(type, limit = 10) {
  let postsData = fileNames.map((fileName) => {
    // 去除后缀名，剩下的文件名为 id
    const id = fileName.replace(/\.mdx$/, "");

    // MDX 文件路径
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // 读取 MDX 文件头数据
    const { data } = matter(fileContent);

    return {
      id,
      ...data,
    };
  });
  // 返回指定类型，且按时间排序的结果
  if (type && type !== "all")
    postsData = postsData.filter((post) => post.type === type);

  return postsData
    .sort(({ date: a }, { date: b }) => {
      a = new Date(a);
      b = new Date(b);
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    })
    .slice(0, limit);
}
