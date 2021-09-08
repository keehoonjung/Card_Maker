import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";

const App = ({ authService }) => {
  return (
    <section className={styles.container}>
      <Login authService={authService} />
    </section>
  );
};

export default App;
