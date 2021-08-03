import { FunctionComponent } from "react";
import { cartActions } from "../../redux/cart.slice";
import { useAppDispatch } from "../../redux/store";
import { ProductType } from "../../redux/ui.slice";

import styles from "./styles.module.css";

const Product: FunctionComponent<ProductType> = (props) => {
  const { name, price, details } = props;
  const dispatch = useAppDispatch();

  const addProductToCartHandler = () => {
    dispatch(cartActions.addProductToCart({ ...props }));
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
