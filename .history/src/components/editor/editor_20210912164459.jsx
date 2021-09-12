import React from "react";
import AddForm from "../add_form/add_form";
import Form from "../form/form";
import styles from "./editor.module.css";

const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => (
      <Form
        key={key}
        FileInput={FileInput}
        card={cards[key]}
        deleteCard={deleteCard}
        updateCard={updateCard}
      />
    ))}
    <AddForm FileInput={FileInput} addCard={addCard} />
  </section>
);

export default Editor;
