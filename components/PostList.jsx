import Link from "next/link";
import { getPostTypeName } from "common/constant";

export default function PostList({ postsData }) {
  return (
    <ul className="main-posts-list">
      {postsData.map(({ id, title, date, desc, type }) => (
        <li key={id}>
          <article>
            <div className="posts-list-head">
              <span>{date}</span>
              <Link href={`/posts/${type}`}>
                <a className="posts-list-type">{getPostTypeName(type)}</a>
              </Link>
            </div>
            <Link href={`/post/${id}`}>
              <a>
                <h1>{title}</h1>
              </a>
            </Link>
            <p>{desc}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
