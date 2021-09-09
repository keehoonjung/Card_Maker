import React from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./form.module.css";

const Form = ({ card }) => {
  const onSubmit = () => {};
  return (
    <>
      <form className={styles.form}>
        <input className={styles.input} type="text" value={card.name} />
        <input className={styles.input} type="text" value={card.company} />
        <select className={styles.select} name="select" value={card.type}>
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="colorful">colorful</option>
        </select>
        <input className={styles.input} type="text" value={card.jop} />
        <input className={styles.input} type="text" value={card.email} />
        <textarea
          className={styles.textarea}
          name=""
          id=""
          cols="30"
          rows="3"
          value={card.message}
        ></textarea>
        <div className={styles.fileInput}></div>
        <ImageFileInput />
        <Button name="Delete" onclick={onSubmit} />
      </form>
    </>
  );
};

export default Form;
