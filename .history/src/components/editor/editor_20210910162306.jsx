import React from "react";
import AddForm from "../add_form/add_form";
import Form from "../form/form";
import styles from "./editor.module.css";

const Editor = ({ cards, setNewCard, deleteCard, updateCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map((card) => (
      <Form
        key={card.id}
        card={card}
        deleteCard={deleteCard}
        updateCard={updateCard}
      />
    ))}
    <AddForm setNewCard={setNewCard} />
  </section>
);

export default Editor;
