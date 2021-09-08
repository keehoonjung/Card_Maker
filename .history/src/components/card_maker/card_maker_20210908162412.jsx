import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./card_maker.module.css";

const CardMaker = ({ authService }) => {
  return (
    <>
      <Header authService={authService} />
      <section className={styles.main}></section>
      <Footer />
    </>
  );
};

export default CardMaker;
