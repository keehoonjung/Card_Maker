import React from "react";
import Cards from "../cards/cards";
import styles from "./preview.module.css";

const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    {Object.keys(cards).map((key) => (
      <Cards key={key} card={cards[key]} />
    ))}
  </section>
);

export default Preview;
