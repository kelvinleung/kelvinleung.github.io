import PostList from "components/PostList";
import { getAllPosts } from "lib/posts";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: "horse-sense" } },
      { params: { type: "gibberish" } },
      { params: { type: "xray" } },
      { params: { type: "copycat" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsData = getAllPosts(params.type);
  return {
    props: {
      postsData,
    },
  };
}

export default function Posts({ postsData }) {
  return <PostList postsData={postsData} />;
}
