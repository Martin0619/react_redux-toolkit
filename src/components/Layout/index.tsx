import { FunctionComponent } from "react";
import Header from "../Header";

import styles from "./styles.module.css";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
