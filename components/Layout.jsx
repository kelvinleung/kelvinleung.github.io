import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

const PAGE_TITLE = "Kelvin's Blog";
const PAGE_DESCRIPTION = "Kelvin's blog";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="icon" href="favicon.ico" />
        <title>{PAGE_TITLE}</title>
      </Head>
      <div className="container">
        <NavBar />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
