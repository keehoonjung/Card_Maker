import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <section className={styles.main}>
        <section className={styles.maker_container}>
          <h1>Card Maker</h1>
        </section>
        <hr />
        <section className={styles.preview_container}>
          <h1>Card Preview</h1>
        </section>
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
