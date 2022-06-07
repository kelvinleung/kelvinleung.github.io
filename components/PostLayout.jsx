import React from "react";
import Head from "next/head";

export default function PostLayout({ meta, children }) {
  return (
    <main>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <article className="post-container">
        <div className="post-title-container">
          <h1 className="post-title">{meta.title}</h1>
          <p className="post-date">{meta.date}</p>
        </div>
        {children}
      </article>
    </main>
  );
}
