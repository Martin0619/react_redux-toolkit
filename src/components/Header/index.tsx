import { FunctionComponent } from "react";

import styles from "./styles.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>ReduxCart</h1>
      <button className={styles.btn}>
        <span>My Cart</span> <h6 className={styles.quantity}>1</h6>
      </button>
    </header>
  );
};

export default Header;
