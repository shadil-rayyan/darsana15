import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>darsana2</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
      <SpeedInsights />
    </Fragment>
  );
}

export default MyApp;
