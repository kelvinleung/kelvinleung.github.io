import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import PostLayout from "components/PostLayout";
import { postsDirectory, getAllPosts } from "lib/posts";
import components from "components/MDXComponents";

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({
      params: { id: post.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(postsDirectory, `${params.id}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { code, frontmatter } = await bundleMDX({
    source: fileContent,
  });

  return { props: { meta: frontmatter, code } };
}

export default function Post({ meta, code }) {
  const Content = getMDXComponent(code);
  return (
    <PostLayout meta={meta}>
      <Content components={components} />
    </PostLayout>
  );
}
