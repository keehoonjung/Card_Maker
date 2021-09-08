import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = (props) => (
  <section className={styles.container}>
    <Header />
    <section className={styles.login}>
      <h1 className={styles.login_title}>Login</h1>
      <button className={styles.login_btn}>Google</button>
      <button className={styles.login_btn}>Github</button>
    </section>
    <Footer />
  </section>
);

export default Login;
