import Link from "next/link";
import PostList from "components/PostList";
import Paginator from "components/Paginator";
import { getPostsByType, getPostCountGroupByType } from "lib/content";
import { POST_TYPES, POST_PAGE_COUNT } from "common/constant";

const POST_TYPE = "all";
const NEXT_URL = "/posts/all/2";

export async function getStaticProps() {
  const postsData = getPostsByType(POST_TYPE);
  const counts = getPostCountGroupByType();
  const pageCount = Math.ceil(counts.get(POST_TYPE) / POST_PAGE_COUNT) || 1;
  return {
    props: {
      postsData,
      pageCount,
    },
  };
}

export default function Posts({ postsData, pageCount }) {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {POST_TYPES.map((type) => (
          <li key={type.id}>
            <Link href={`/posts/${type.id}`}>
              <a className="p-4 block relative bg-neutral-50 rounded-lg hover:bg-red-50 group">
                <p className="absolute top-0 right-0 text-neutral-200/50 text-2xl group-hover:text-red-100">
                  {type.id.toUpperCase()}
                </p>
                <p className="relative group-hover:text-red-600">{type.name}</p>
                <p className="relative text-sm text-neutral-400 group-hover:text-red-300">
                  {type.desc}
                </p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <PostList postsData={postsData} />
      {pageCount > 1 && (
        <Paginator page={1} pageCount={pageCount} nextUrl={NEXT_URL} />
      )}
    </div>
  );
}
