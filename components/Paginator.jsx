import Link from "next/link";

export default function Paginator({
  page,
  pageCount,
  prevUrl = "/",
  nextUrl = "/",
}) {
  return (
    <div className="grid grid-cols-2">
      {page !== 1 && (
        <Link href={prevUrl}>
          <a className="px-8 py-3 col-start-1 col-end-1 justify-self-start bg-neutral-50 text-neutral-500 text-sm hover:text-neutral-800 hover:font-bold rounded-lg">
            退页
          </a>
        </Link>
      )}
      {page < pageCount && (
        <Link href={nextUrl}>
          <a className="px-8 py-3 col-start-2 col-end-2 justify-self-end bg-neutral-50 text-neutral-500 text-sm hover:text-neutral-800 hover:font-bold rounded-lg">
            进页
          </a>
        </Link>
      )}
    </div>
  );
}
