import Link from "next/link";
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
  return (
    <ul className="main-posts-list">
      {allPostData.map(({ id, title, date, desc }) => (
        <li key={id}>
          <article>
            <Link href={`/post/${id}`}>
              <a>
                <h1>{title}</h1>
              </a>
            </Link>
            <div className="posts-list-date">{date}</div>
            <p>{desc}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
