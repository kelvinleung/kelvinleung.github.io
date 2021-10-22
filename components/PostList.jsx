import Link from "next/link";

export default function PostList({ postData }) {
  return (
    <ul className="main-posts-list">
      {postData.map(({ id, title, date, desc }) => (
        <li key={id}>
          <article>
            <div className="posts-list-date">{date}</div>
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
