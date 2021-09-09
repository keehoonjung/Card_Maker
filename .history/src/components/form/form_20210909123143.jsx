import React from "react";
import styles from "./form.module.css";

const Form = (props) => {
  return (
    <>
      <section className={styles.form}>
        <div className={styles.container}>
          <input type="text" />
          <input type="text" />
          <select name="select" id="">
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="colorful">colorful</option>
          </select>
        </div>
        <div className={styles.container}>
          <input type="text" />
          <input type="text" />
        </div>
        <div className={styles.container}>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className={styles.container}>
          <button className={styles.uploadBtn}>me</button>
          <button className={styles.deleteBtn}>delete</button>
        </div>
      </section>
    </>
  );
};

export default Form;
