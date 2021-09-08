import React from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(history.push("/main"));
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
