import React from "react";
import styles from "./form.module.css";

const Form = (props) => {
  return (
    <>
      <section className={styles.form}>
        <div className={styles.container}>
          <input className={styles.name} type="text" />
          <input className={styles.company} type="text" />
          <select className={styles.color} name="select" id="">
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="colorful">colorful</option>
          </select>
        </div>
        <div className={styles.container}>
          <input className={styles.jop} type="text" />
          <input className={styles.email} type="text" />
        </div>
        <div className={styles.container}>
          <textarea
            className={styles.message}
            name=""
            id=""
            cols="20"
            rows="10"
          ></textarea>
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
