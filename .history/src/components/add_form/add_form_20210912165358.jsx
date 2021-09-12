import React, { memo, useRef } from "react";
import { useState } from "react/cjs/react.development";
import Button from "../button/button";
import styles from "./add_form.module.css";

const AddForm = memo(({ FileInput, addCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const selectRef = useRef();
  const jopRef = useRef();
  const emailRef = useRef();
  const textareaRef = useRef();
  const [file, setFile] = useState({ imageName: null, url: null });

  const onSubmit = (event) => {
    event.preventDefault();
    const cardForm = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: nameRef.current.value || "",
      jop: jopRef.current.value || "",
      email: emailRef.current.value || "",
      message: textareaRef.current.value || "",
      fileURL: file.url || "",
      fileName: file.imageName || "",
      type: selectRef.current.value,
    };
    formRef.current.reset();
    setFile({ imageName: null, url: null });
    addCard(cardForm);
  };

  const uploadImage = (url, image) => {
    setFile({ imageName: image, url });
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
        <FileInput uploadImage={uploadImage} name={file.imageName} />
      </div>
      <Button name="Add" onclick={onSubmit} />
    </form>
  );
});

export default AddForm;
