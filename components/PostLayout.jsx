import React from "react";
import Head from "next/head";

export default function PostLayout({ meta, children }) {
  return (
    <main>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article>
        <div className="mt-8 mb-16">
          <h1 className="my-4 text-2xl text-neutral-800 font-bold">
            {meta.title}
          </h1>
          <p className="text-sm text-neutral-400">{meta.date}</p>
        </div>
        <div className="post-content leading-loose text-neutral-600">
          {children}
        </div>
      </article>
    </main>
  );
}
