import React from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./form.module.css";

const Form = ({ card, setNewCard }) => {
  const fromRef = React.createRef();
  const nameRef = React.createRef();
  const companyRef = React.createRef();
  const selectRef = React.createRef();
  const jopRef = React.createRef();
  const emailRef = React.createRef();
  const textareaRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const cardForm = {
      id: "5",
      name: nameRef.current.value,
      company: nameRef.current.value,
      email: emailRef.current.value,
      message: textareaRef.current.value,
      image: "/images/default_logo.png",
      type: selectRef.current.value,
    };
    setNewCard(cardForm);
  };
  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        value={card.name}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        value={card.company}
      />
      <select
        ref={selectRef}
        className={styles.select}
        name="select"
        value={card.type}
      >
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={jopRef}
        className={styles.input}
        type="text"
        value={card.jop}
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        value={card.email}
      />
      <textarea
        ref={textareaRef}
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
