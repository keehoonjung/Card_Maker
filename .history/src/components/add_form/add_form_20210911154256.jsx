import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./add_form.module.css";

const AddForm = ({ addCard, uploadService }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const selectRef = useRef();
  const jopRef = useRef();
  const emailRef = useRef();
  const textareaRef = useRef();
  let imageurls = "";

  const onSubmit = (event) => {
    event.preventDefault();
    const cardForm = {
      id: Date.now(),
      name: nameRef.current.value,
      company: nameRef.current.value,
      jop: jopRef.current.value,
      email: emailRef.current.value,
      message: textareaRef.current.value,
      image: imageurls,
      type: selectRef.current.value,
    };
    console.log(cardForm);
    addCard(cardForm);
    formRef.current.reset();
  };

  const uploadImage = (files) => {
    const imageurl = uploadService.upload(files[0]);
    imageurl.then((data) => {
      imageurls = data.url;
    });
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
        <ImageFileInput uploadImage={uploadImage} />
      </div>
      <Button name="Add" onclick={onSubmit} />
    </form>
  );
};

export default AddForm;
