import React from "react";
import { useHistory } from "react-router";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout().then(() => {
      history.push("/");
    });
  };

  return (
    <header className={styles.head}>
      {onLogout && (
        <button onClick={onLogout} className={styles.logout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src="./images/logo.png" alt="main_logo" />
      <h1 className={styles.title}> Business Card Maker</h1>
    </header>
  );
};

export default Header;
