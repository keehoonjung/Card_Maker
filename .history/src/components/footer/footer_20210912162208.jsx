import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo((props) => (
  <footer className={styles.footer}>
    <p>Code your dream</p>
  </footer>
));

export default Footer;