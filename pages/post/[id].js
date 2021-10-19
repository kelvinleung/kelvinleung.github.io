import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getPost } from "lib/posts";

export async function getStaticPaths() {
  const paths = (await getAllPosts()).map(({ id }) => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return {
    props: { ...post },
  };
}

export default function Post({ code, frontmatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <article className="post-container">
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <Component />
    </article>
  );
}
