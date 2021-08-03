import { NextPage } from "next";
import CartPeekBox from "../components/CartPeekBox";
import ProductList from "../components/ProductList";
import styles from "../styles/home.module.css";

const HomePage: NextPage = () => {
  return (
    <>
      <CartPeekBox />
      <h3 className={styles.buyProuctsHeading}>buy your favorite products</h3>
      <ProductList />
    </>
  );
};

export default HomePage;
