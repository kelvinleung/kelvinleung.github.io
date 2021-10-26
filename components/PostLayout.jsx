import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

// @Todo 生成目录
function getHeadings(nodes) {
  return React.Children.toArray(nodes)
    .filter(
      (child) =>
        child.props.mdxType && ["h2", "h3"].includes(child.props.mdxType)
    )
    .map((heading) => ({
      id: heading.props.id,
      url: `#${heading.props.id}`,
      text: heading.props.children,
    }));
}

function PostLayout({ meta, children }) {
  return (
    <main>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article className="post-container">
        <div className="post-title-container">
          <h1 className="post-title">{meta.title}</h1>
          <p className="post-date">{meta.date}</p>
        </div>
        <MDXProvider>{children}</MDXProvider>
      </article>
    </main>
  );
}

export default function configurePostLayout(meta) {
  return function PostLayoutWrapper(props) {
    return <PostLayout {...props} meta={meta} />;
  };
}
