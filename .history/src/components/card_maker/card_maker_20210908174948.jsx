import React from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./card_maker.module.css";

const CardMaker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout().then(() => {
      history.push("/");
    });
  };

  return (
    <>
      <Header onLogout={onLogout} />
      <section className={styles.main}></section>
      <Footer />
    </>
  );
};

export default CardMaker;
