import Head from "next/head";
import FullLayout from "../components/Layout/FullLayout";
// import "../styles/globals.css";

import "swiper/css";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Plz-web</title>
      </Head>
      <FullLayout>
        <Component {...pageProps} />
      </FullLayout>
    </>
  );
}

export default MyApp;
