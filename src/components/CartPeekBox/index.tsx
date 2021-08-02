import { FunctionComponent } from "react";

import styles from "./styles.module.css";

import ProductCart from "../ProductCart";

const CartPeekBox: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.heading}>Your Shopping Cart</h4>

      <ProductCart />
    </div>
  );
};

export default CartPeekBox;
