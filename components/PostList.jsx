import Link from "next/link";
import { getPostTypeId } from "common/utils";

const POST_TYPE_URL = (type) => `/posts/${type}/1`;
const POST_URL = (id) => `/post/${id}`;

export default function PostList({ postsData }) {
  return (
    <ul className="pt-16">
      {postsData.map(({ id, title, date, desc, type }) => (
        <li key={id} className="mb-16">
          <article>
            <div className="flex justify-between items-center text-sm text-neutral-400">
              <span>{date}</span>
              <Link href={POST_TYPE_URL(type)}>
                <a className="px-4 py-2 rounded-lg bg-neutral-50 hover:text-red-600 hover:bg-red-50">
                  {getPostTypeId(type)}
                </a>
              </Link>
            </div>
            <Link href={POST_URL(id)}>
              <a>
                <h1 className="inline-block mt-4 mb-8 text-2xl text-neutral-800 font-bold hover:text-red-600">
                  {title}
                </h1>
              </a>
            </Link>
            <p className="leading-relaxed text-neutral-500">{desc}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
