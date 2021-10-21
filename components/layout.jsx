import Head from "next/head";
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
      </Head>
      <div className="container">
        <NavBar />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
