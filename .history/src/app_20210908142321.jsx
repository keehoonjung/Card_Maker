import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";

const App = ({ authServide }) => {
  return (
    <section className={styles.container}>
      <Login />
    </section>
  );
};

export default App;
