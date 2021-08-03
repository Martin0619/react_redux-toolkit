import { FunctionComponent } from "react";
import { cartActions } from "../../redux/cart.slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ProductType } from "../../redux/ui.slice";

import styles from "./styles.module.css";

export interface ProductComponentType {
  id: string;
}

const Product: FunctionComponent<ProductComponentType> = (props) => {
  const { name, details, price, id } = useAppSelector(
    (state) => state.uiReducer.products[props.id]
  );
  const dispatch = useAppDispatch();

  const addProductToCartHandler = () => {
    dispatch(cartActions.addProductToCart({ id, name, price, details }));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.name}>{name}</h1>
      <h4 className={[styles.price, "justifyEnd"].join(" ")}>
        ${price.toFixed(2)}
      </h4>
      <p className={styles.details}>{details}</p>
      <button
        className={[styles.btn, "justifyEnd"].join(" ")}
        onClick={addProductToCartHandler}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
