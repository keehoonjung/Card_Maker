import React from "react";
import Footer from "../footer/footer";
import styles from "./login.module.css";

const Login = (props) => (
  <section className={styles.container}>
    <header className={styles.header}>
      <img className={styles.logo} src="./images/logo.png" alt="main_logo" />
      <h1 className={styles.title}> Business Card Maker</h1>
    </header>
    <section className={styles.login}>
      <h1 className={styles.login_title}>Login</h1>
      <button className={styles.login_btn}>Google</button>
      <button className={styles.login_btn}>Github</button>
    </section>
    <Footer />
  </section>
);

export default Login;
