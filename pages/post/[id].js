import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getPost } from "lib/posts";

const Marker = () => (
  <svg
    className="marker"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const UList = (props) => (
  <ul>
    {props.children
      .filter((child) => {
        return child.type && child.type === "li";
      })
      .map((el, i) => (
        <li key={i}>
          <Marker />
          <div>{el.props.children}</div>
        </li>
      ))}
  </ul>
);

const OList = (props) => (
  <ol>
    {props.children
      .filter((child) => {
        return child.type && child.type === "li";
      })
      .map((el, i) => (
        <li key={i}>
          <span className="marker">{`${i + 1}.`}</span>
          <div>{el.props.children}</div>
        </li>
      ))}
  </ol>
);

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
      <h1 className="post-title">{frontmatter.title}</h1>
      <p className="post-date">{frontmatter.date}</p>
      <div className="post-content">
        <Component components={{ ul: UList, ol: OList }} />
      </div>
    </article>
  );
}
