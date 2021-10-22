import PostList from "components/PostList";
import { getAllPosts } from "lib/posts";

export async function getStaticProps() {
  const allPostData = await getAllPosts();
  return {
    props: {
      allPostData,
    },
  };
}

export default function Home({ allPostData }) {
  return <PostList postData={allPostData} />;
}
