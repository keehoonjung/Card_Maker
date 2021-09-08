import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: "/main",
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => {
        goToMaker(data.user.uid);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker();
    });
  });
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
