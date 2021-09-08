import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authServide }) => {
  const onLogin = (event) => {
    authServide.login(event.currentTarget.textContent);
  };
  return (
    <section className={styles.container}>
      <Header />
      <section className={styles.login}>
        <h1 className={styles.login_title}>Login</h1>
        <button onClick={onLogin} className={styles.login_btn}>
          Google
        </button>
        <button onClick={onLogin} className={styles.login_btn}>
          Github
        </button>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
