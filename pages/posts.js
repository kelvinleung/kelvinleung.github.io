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

export default function Posts({ allPostData }) {
  return <PostList postData={allPostData} />;
}
