import React from "react";
import styles from "./form.module.css";

const Form = ({ card }) => {
  return (
    <>
      <section className={styles.form}>
        <input className={styles.name} type="text" value={card.name} />
        <input className={styles.company} type="text" value={card.company} />
        <select className={styles.color} name="select" id="">
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="colorful">colorful</option>
        </select>
        <input className={styles.jop} type="text" value={card.jop} />
        <input className={styles.email} type="text" value={card.email} />
        <textarea
          className={styles.message}
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
