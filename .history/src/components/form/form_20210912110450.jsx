import React from "react";
import Button from "../button/button";
import styles from "./form.module.css";

const Form = ({ FileInput, card, deleteCard, updateCard }) => {
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const uploadImage = (url, image) => {
    updateCard({
      ...card,
      url,
      image,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    deleteCard(card.id);
  };
  return (
    <form className={styles.form}>
      <input
        name="name"
        placeholder="Name"
        className={styles.input}
        type="text"
        value={card.name}
        onChange={onChange}
      />
      <input
        name="company"
        placeholder="Company"
        className={styles.input}
        type="text"
        value={card.company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="type"
        value={card.type}
        onChange={onChange}
      >
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        name="jop"
        placeholder="Jop"
        className={styles.input}
        type="text"
        value={card.jop}
        onChange={onChange}
      />
      <input
        name="email"
        placeholder="Email"
        className={styles.input}
        type="text"
        value={card.email}
        onChange={onChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        className={styles.textarea}
        id=""
        cols="30"
        rows="3"
        value={card.message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput
          uploadImage={uploadImage}
          name={card.image ? card.image : undefined}
        />
      </div>
      <Button name="Delete" onclick={onSubmit} />
    </form>
  );
};

export default Form;
