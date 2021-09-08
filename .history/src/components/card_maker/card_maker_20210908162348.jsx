import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./card_maker.module.css";

const CardMaker = (props) => {
  return (
    <>
      <Header />
      <section className={styles.main}></section>
      <Footer />
    </>
  );
};

export default CardMaker;
