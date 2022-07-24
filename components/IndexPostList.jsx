import Link from "next/link";
import { getPostTypeId } from "common/utils";

export default function IndexPostList({ postsData }) {
  return (
    <ul className="flex flex-col gap-4 sm:flex-row">
      {postsData.map(({ id, title, date, type }) => (
        <li key={id} className="p-8 pt-4 block bg-neutral-50 rounded-lg">
          <div className="mb-4 flex justify-between items-center text-sm text-neutral-400">
            <span>{date}</span>
            <Link href={`/posts/${type}`}>
              <a className="px-4 py-2 rounded-lg bg-neutral-50 hover:text-red-600 hover:bg-red-50">
                {getPostTypeId(type)}
              </a>
            </Link>
          </div>
          <Link href={`/post/${id}`}>
            <a>
              <h1 className="inline-block text-xl text-neutral-800 font-bold hover:text-red-600">
                {title}
              </h1>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
