import Layout from "components/Layout";
import "styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout pageTitle="Kelvin's Blog" description="Kelvin's blog">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
