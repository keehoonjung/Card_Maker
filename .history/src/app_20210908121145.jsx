import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";

const App = (props) => {
  return (
    <section className={styles.container}>
      <Login />
    </section>
  );
};

export default App;
