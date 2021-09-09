import React from "react";
import styles from "./form.module.css";

const Form = ({ card }) => {
  return (
    <>
      <form className={styles.form}>
        <input className={styles.input} type="text" value={card.name} />
        <input className={styles.input} type="text" value={card.company} />
        <select className={styles.select} name="select" value={card.id}>
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
        <button className={styles.button}>me</button>
        <button className={styles.button}>delete</button>
      </form>
    </>
  );
};

export default Form;
