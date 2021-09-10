import React from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./form.module.css";

const AddForm = ({ card, setNewCard }) => {
  const formRef = React.createRef();
  const nameRef = React.createRef();
  const companyRef = React.createRef();
  const selectRef = React.createRef();
  const jopRef = React.createRef();
  const emailRef = React.createRef();
  const textareaRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const cardForm = {
      id: Date.now(),
      name: nameRef.current.value,
      company: nameRef.current.value,
      jop: jopRef.current.value,
      email: emailRef.current.value,
      message: textareaRef.current.value,
      image: "/images/default_logo.png",
      type: selectRef.current.value,
    };
    console.log(cardForm);
    setNewCard(cardForm);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        placeholder="Name"
        className={styles.input}
        type="text"
      />
      <input
        ref={companyRef}
        placeholder="Company"
        className={styles.input}
        type="text"
      />
      <select ref={selectRef} className={styles.select} name="select">
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={jopRef}
        placeholder="Jop"
        className={styles.input}
        type="text"
      />
      <input
        ref={emailRef}
        placeholder="Email"
        className={styles.input}
        type="text"
      />
      <textarea
        ref={textareaRef}
        placeholder="Message"
        className={styles.textarea}
        name=""
        id=""
        cols="30"
        rows="3"
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onclick={onSubmit} />
    </form>
  );
};

export default AddForm;
