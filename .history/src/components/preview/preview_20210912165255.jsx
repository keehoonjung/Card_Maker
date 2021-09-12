import React from "react";
import Cards from "../cards/cards";
import styles from "./preview.module.css";

const Preview = ({ cards }) => (
  <div className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).map((key) => (
        <Cards key={key} card={cards[key]} />
      ))}
    </ul>
  </div>
);

export default Preview;
