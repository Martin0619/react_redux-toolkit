import { NextPage } from "next";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import store from "../redux/store";

import "../styles/global.css";

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default CustomApp;
