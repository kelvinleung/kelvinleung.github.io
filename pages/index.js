import Head from "next/head";
import NavBar from "components/navbar";
import { getSortedPostsData } from "lib/posts";

export async function getStaticProps() {
  const allPostData = getSortedPostsData();
  return {
    props: {
      allPostData,
    },
  };
}

export default function Home({ allPostData }) {
  return (
    <div className="container">
      <Head>
        <title>{`Kelvin's Blog`}</title>
        <meta name="description" content="Kelvin's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="main">
        <ul className="main-posts-list">
          {allPostData.map(({ id, title, date, desc }) => (
            <li key={id}>
              <article>
                <h2>{title}</h2>
                <div className="posts-list-date">{date}</div>
                <p>{desc}</p>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
