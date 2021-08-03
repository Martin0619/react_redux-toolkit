import { FunctionComponent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { uiActions } from "../../redux/ui.slice";
import Product from "../Product";
import styles from "./styles.module.css";

const ProductList: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { areProductsLoading, products } = useAppSelector((state) => ({
    products: state.uiReducer.products,
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
        products.map((p) => <Product key={p.id} {...p} />)
      )}
    </>
  );
};

export default ProductList;
