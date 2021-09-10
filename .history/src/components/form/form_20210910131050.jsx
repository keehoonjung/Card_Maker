import React from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./form.module.css";

const Form = ({ card }) => {
  const nameRef = React.createRef();
  const companyRef = React.createRef();
  const selectRef = React.createRef();
  const jopRef = React.createRef();
  const emailRef = React.createRef();
  const textareaRef = React.createRef();
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        value={card.name}
      />
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        value={card.company}
      />
      <select
        ref={nameRef}
        className={styles.select}
        name="select"
        value={card.type}
      >
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        value={card.jop}
      />
      <input className={styles.input} type="text" value={card.email} />
      <textarea
        className={styles.textarea}
        name=""
        id=""
        cols="30"
        rows="3"
        value={card.message}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onclick={onSubmit} />
    </form>
  );
};

export default Form;
