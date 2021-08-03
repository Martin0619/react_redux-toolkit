import { FunctionComponent } from "react";
import { cartActions } from "../../redux/cart.slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import styles from "./styles.module.css";

export interface CartProductType {
  id: string;
}

const CartProduct: FunctionComponent<CartProductType> = ({ id }) => {
  const product = useAppSelector((state) => state.cartReducer.productsById[id]);
  const dispatch = useAppDispatch();

  const subtractHandler = () => {
    dispatch(cartActions.substractProductQuantity(id));
  };

  const addHandler = () => {
    dispatch(cartActions.addProductQuantity(id));
  };

  const removeHandler = () => {
    dispatch(cartActions.removeProductFromCart(id));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.name}>{product.name}</h1>

      <h4 className={[styles.price, "justifyEnd"].join(" ")}>
        <span>${(product.price * product.quantity).toFixed(2)}</span>{" "}
        <span>(${product.price.toFixed(2)}/item)</span>
      </h4>

      <p className={styles.quantity}>
        x <span>{product.quantity}</span>
      </p>

      <ul className={[styles.btnGroup, "justifyEnd"].join(" ")}>
        <li>
          <button className={styles.btn} onClick={subtractHandler}>
            -
          </button>
        </li>
        <li>
          <button className={styles.btn} onClick={addHandler}>
            +
          </button>
        </li>
        <li>
          <button className={styles.btn} onClick={removeHandler}>
            X
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CartProduct;
