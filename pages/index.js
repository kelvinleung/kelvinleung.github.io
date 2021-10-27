import PostList from "components/PostList";
import { getAllPosts } from "lib/posts";

export async function getStaticProps() {
  const postsData = getAllPosts();
  return {
    props: {
      postsData,
    },
  };
}

export default function Home({ postsData }) {
  return <PostList postsData={postsData} />;
}
