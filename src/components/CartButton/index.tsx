import { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { uiActions } from "../../redux/ui.slice";
import styles from "./styles.module.css";

const CartButton: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const numOfProductsInCart = useAppSelector(
    (state) => state.cartReducer.productsId.length
  );

  const clickHAndler = () => {
    dispatch(uiActions.toggleCartPeekBoxVisibility());
  };

  return (
    <button className={styles.btn} onClick={clickHAndler}>
      <span>My Cart</span>{" "}
      <h6 className={styles.quantity}>{numOfProductsInCart}</h6>
    </button>
  );
};

export default CartButton;
