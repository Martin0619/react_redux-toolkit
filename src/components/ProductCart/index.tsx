import { FunctionComponent } from "react";

import styles from "./styles.module.css";

const ProductCart: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.name}>Test Item</h1>

      <h4 className={[styles.price, "justifyEnd"].join(" ")}>
        <span>$18.00</span> <span>($6.00/item)</span>
      </h4>

      <p className={styles.quantity}>
        x <span>3</span>
      </p>

      <ul className={[styles.btnGroup, "justifyEnd"].join(" ")}>
        <li>
          <button className={styles.btn}>-</button>
        </li>
        <li>
          <button className={styles.btn}>+</button>
        </li>
        <li>
          <button className={styles.btn}>X</button>
        </li>
      </ul>
    </div>
  );
};

export default ProductCart;
