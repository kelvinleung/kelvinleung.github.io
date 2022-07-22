import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

const PAGE_TITLE = "般若阁";
const PAGE_DESCRIPTION = "Kelvin's blog";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="icon" href="/images/favicon.ico" />
        <title>{PAGE_TITLE}</title>
      </Head>
      <div className="max-w-[800px] min-h-screen pt-16 m-auto flex flex-col">
        <NavBar />
        <main className="p-6 flex flex-col grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
