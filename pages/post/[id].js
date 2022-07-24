import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { getCodeMeta } from "lib/syntax";
import PostLayout from "components/PostLayout";
import { getAllPosts, getPostDataById } from "lib/content";
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
  const postData = getPostDataById(params.id);

  const { code, frontmatter } = await bundleMDX({
    source: postData,
    mdxOptions(options) {
      options.rehypePlugins = [...(options.rehypePlugins ?? []), getCodeMeta];
      return options;
    },
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
