import { FunctionComponent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { uiActions } from "../../redux/ui.slice";
import Product from "../Product";
import styles from "./styles.module.css";

const ProductList: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { areProductsLoading, productIds } = useAppSelector((state) => ({
    productIds: state.uiReducer.productIds,
    areProductsLoading: state.uiReducer.areProductsLoading,
  }));

  useEffect(() => {
    dispatch(uiActions.getProducts());
  }, []);

  return (
    <>
      {areProductsLoading ? (
        <h2 className={styles.loading}>loading</h2>
      ) : (
        productIds.map((productId) => (
          <Product key={productId} id={productId} />
        ))
      )}
    </>
  );
};

export default ProductList;
