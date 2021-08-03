import { FunctionComponent } from "react";

import styles from "./styles.module.css";

import CartProductList from "../CartProductList";
import { useAppSelector } from "../../redux/store";

const CartPeekBox: FunctionComponent = () => {
  const shouldDisplay = useAppSelector(
    (state) => state.uiReducer.isCartPeekBoxVisible
  );

  return (
    <>
      {shouldDisplay && (
        <div className={styles.wrapper}>
          <h4 className={styles.heading}>Your Shopping Cart</h4>

          <CartProductList />
        </div>
      )}
    </>
  );
};

export default CartPeekBox;
