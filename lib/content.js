import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { POST_TYPES, POST_PAGE_COUNT } from "../common/constant";

const getDirectory = (type) => path.join(process.cwd(), type);

const getContentData = (type) => {
  const directory = getDirectory(type);

  // 获取 /posts 目录下的文件名，过滤只要 MDX 文件
  const fileNames = fs
    .readdirSync(directory)
    .filter((fileName) => fileName.match(/\.mdx$/));

  const contentData = fileNames.map((fileName) => {
    // 去除后缀名，剩下的文件名为 id
    const id = fileName.replace(/\.mdx$/, "");

    // MDX 文件路径
    const filePath = path.join(directory, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // 读取 MDX 文件头数据
    const { data } = matter(fileContent);

    return {
      id,
      ...data,
    };
  });

  return contentData.sort(({ date: a }, { date: b }) => {
    a = new Date(a);
    b = new Date(b);
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
};

export function getIndexPosts() {
  let postsData = getContentData("posts");
  return postsData.slice(0, 4);
}

export function getPostsByType(type, offset = 1, limit = POST_PAGE_COUNT) {
  let postsData = getContentData("posts");

  // 返回指定类型，且按时间排序的结果
  if (type && type !== "all") {
    postsData = postsData.filter((post) => post.type === type);
  }

  const startIndex = limit * (offset - 1);
  const endIndex = startIndex + limit;

  return postsData.slice(startIndex, endIndex);
}

export function getAllPosts() {
  return getContentData("posts");
}

export function getPostDataById(id) {
  const directory = getDirectory("posts");
  const filePath = path.join(directory, `${id}.mdx`);
  return fs.readFileSync(filePath, "utf-8");
}

export function getPostCountGroupByType() {
  const postsData = getContentData("posts");
  const counts = new Map();
  POST_TYPES.forEach((type) => counts.set(type.id, 0));
  postsData.forEach((post) => {
    if (counts.has(post.type)) {
      counts.set(post.type, counts.get(post.type) + 1);
    }
  });
  counts.set("all", postsData.length);
  return counts;
}
