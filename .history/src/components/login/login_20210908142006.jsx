import React from "react";
import AuthService from "../../service/auth_service";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = (props) => {
  const onLogin = (event) => {
    AuthService.login(event.currentTarget.textContent).then(console.log);
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
