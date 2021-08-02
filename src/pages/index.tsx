import { NextPage } from "next";
import CartPeekBox from "../components/CartPeekBox";

import Product from "../components/Product";
import styles from "../styles/home.module.css";

const HomePage: NextPage = () => {
  return (
    <>
      <CartPeekBox />
      <h3 className={styles.buyProuctsHeading}>buy your favorite products</h3>
      <Product />
    </>
  );
};

export default HomePage;
