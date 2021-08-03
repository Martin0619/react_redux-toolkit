import { FunctionComponent } from "react";
import CartButton from "../CartButton";

import styles from "./styles.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>ReduxCart</h1>
      <CartButton />
    </header>
  );
};

export default Header;
