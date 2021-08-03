import { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import styles from "./styles.module.css";

const CartButton: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const numOfProductsInCart = useAppSelector(
    (state) => state.cartReducer.productsId.length
  );
  return (
    <button className={styles.btn}>
      <span>My Cart</span>{" "}
      <h6 className={styles.quantity}>{numOfProductsInCart}</h6>
    </button>
  );
};

export default CartButton;
