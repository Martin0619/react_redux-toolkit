import { FunctionComponent } from "react";

import styles from "./styles.module.css";

import CartProductList from "../CartProductList";

const CartPeekBox: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.heading}>Your Shopping Cart</h4>

      <CartProductList />
    </div>
  );
};

export default CartPeekBox;
