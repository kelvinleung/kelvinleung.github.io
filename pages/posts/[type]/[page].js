import PostList from "components/PostList";
import Paginator from "components/Paginator";
import { getPostsByType, getPostCountGroupByType } from "lib/content";
import { POST_PAGE_COUNT } from "common/constant";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const counts = getPostCountGroupByType();
  let paths = [];
  for (const [type, count] of counts) {
    const pageCount = Math.ceil(count / POST_PAGE_COUNT) || 1;
    for (let i = 1; i <= pageCount; i++) {
      paths.push({ params: { type, page: `${i}` } });
    }
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { type, page } = params;
  const postsData = getPostsByType(type, page);
  const counts = getPostCountGroupByType();
  const pageCount = Math.ceil(counts.get(type) / POST_PAGE_COUNT) || 1;
  return {
    props: {
      postsData,
      pageCount,
    },
  };
}

export default function Posts({ postsData, pageCount }) {
  const router = useRouter();
  const { type } = router.query;
  const page = +router.query.page;
  const prevUrl =
    type === "all" && page === 2 ? "/posts" : `/posts/${type}/${page - 1}`;
  const nextUrl = `/posts/${type}/${page + 1}`;
  return (
    <div>
      <PostList postsData={postsData} />
      {pageCount > 1 && (
        <Paginator
          page={page}
          pageCount={pageCount}
          prevUrl={prevUrl}
          nextUrl={nextUrl}
        />
      )}
    </div>
  );
}
