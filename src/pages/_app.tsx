import { NextPage } from "next";
import { AppProps } from "next/app";
import Layout from "../components/Layout";

import "../styles/global.css";

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default CustomApp;
