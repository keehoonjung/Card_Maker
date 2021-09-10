import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./form.module.css";

const Form = ({ card, deleteItem }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const selectRef = useRef();
  const jopRef = useRef();
  const emailRef = useRef();
  const textareaRef = useRef();

  const onChange = (event) => {
    console.log(event.target);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    deleteItem(card.id);
  };
  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        placeholder="Name"
        className={styles.input}
        type="text"
        value={card.name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        placeholder="Company"
        className={styles.input}
        type="text"
        value={card.company}
        onChange={onChange}
      />
      <select
        ref={selectRef}
        className={styles.select}
        name="select"
        value={card.type}
        onChange={onChange}
      >
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={jopRef}
        placeholder="Jop"
        className={styles.input}
        type="text"
        value={card.jop}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        placeholder="Email"
        className={styles.input}
        type="text"
        value={card.email}
        onChange={onChange}
      />
      <textarea
        ref={textareaRef}
        placeholder="Message"
        className={styles.textarea}
        name=""
        id=""
        cols="30"
        rows="3"
        value={card.message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onclick={onSubmit} />
    </form>
  );
};

export default Form;