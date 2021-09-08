import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <header className={styles.head}>
    <img className={styles.logo} src="./images/logo.png" alt="main_logo" />
    <h1 className={styles.title}> Business Card Maker</h1>
  </header>
);

export default Header;
