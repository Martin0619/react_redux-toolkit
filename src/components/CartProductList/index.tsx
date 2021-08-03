import { FunctionComponent } from "react";
import { useAppSelector } from "../../redux/store";
import CartProduct from "../CartProduct";
import styles from "./styles.module.css";

const CartProductList: FunctionComponent = () => {
  const productIds = useAppSelector((state) => state.cartReducer.productsId);

  return (
    <>
      {productIds.length > 0 ? (
        <ul className={styles.wrapper}>
          {productIds.map((productId) => (
            <li key={productId}>
              <CartProduct id={productId} />
            </li>
          ))}
        </ul>
      ) : (
        <h4 className={styles.empty}>Empty</h4>
      )}
    </>
  );
};

export default CartProductList;
