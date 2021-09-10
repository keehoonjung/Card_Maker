import React from "react";
import Form from "../form/form";
import styles from "./editor.module.css";

const Editor = ({ cards }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map((card) => (
      <Form key={card.id} card={card} />
    ))}
    <Form card={{}} />
  </section>
);

export default Editor;
