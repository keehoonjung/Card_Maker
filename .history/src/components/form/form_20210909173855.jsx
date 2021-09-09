import React from "react";
import styles from "./form.module.css";

const Form = ({ card }) => {
  return (
    <>
      <section className={styles.form}>
        <input className={styles.input} type="text" value={card.name} />
        <input className={styles.input} type="text" value={card.company} />
        <select className={styles.color} name="select" id="">
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
        <button className={styles.uploadBtn}>me</button>
        <button className={styles.deleteBtn}>delete</button>
      </section>
    </>
  );
};

export default Form;
