import React from "react";
import styles from "./footer.module.css";

const footer = (props) => (
  <header className={styles.header}>
    <img className={styles.logo} src="./images/logo.png" alt="main_logo" />
    <h1 className={styles.title}> Business Card Maker</h1>
  </header>
);

export default footer;
