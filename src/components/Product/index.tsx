import { NextPage } from "next";

import styles from "./styles.module.css";

const Product: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.name}>Test</h1>
      <h4 className={[styles.price, "justifyEnd"].join(" ")}>$6.00</h4>
      <p className={styles.details}>This is a first product - amazing!</p>
      <button className={[styles.btn, "justifyEnd"].join(" ")}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
