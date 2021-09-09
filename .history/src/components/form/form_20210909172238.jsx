import React from "react";
import styles from "./form.module.css";

const Form = ({ card }) => {
  return (
    <>
      <section className={styles.form}>
        <input className={styles.name} type="text" />
        <input className={styles.company} type="text" />
        <select className={styles.color} name="select" id="">
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="colorful">colorful</option>
        </select>

        <div className={styles.column2}>
          <input className={styles.jop} type="text" />
        </div>
        <div className={styles.column2}>
          <input className={styles.email} type="text" />
        </div>

        <textarea
          className={styles.message}
          name=""
          id=""
          cols="30"
          rows="3"
        ></textarea>
        <button className={styles.uploadBtn}>me</button>
        <button className={styles.deleteBtn}>delete</button>
      </section>
    </>
  );
};

export default Form;
