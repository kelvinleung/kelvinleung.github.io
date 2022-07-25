import Link from "next/link";
import { getPostTypeId } from "common/utils";

export default function IndexPostList({ postsData }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {postsData.map(({ id, title, date, type }) => (
        <li key={id}>
          <Link href={`/post/${id}`}>
            <a className="p-8 block h-full bg-neutral-50 rounded-lg hover:bg-red-50 group">
              <div className="mb-4 flex justify-between items-center text-sm text-neutral-400 group-hover:text-red-300">
                <span>{date}</span>
                <span>{getPostTypeId(type)}</span>
              </div>
              <h1 className="inline-block text-xl text-neutral-800 font-bold group-hover:text-red-600">
                {title}
              </h1>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
