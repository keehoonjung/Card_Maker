import React from "react";
import styles from "./form.module.css";

const Form = ({ card }) => {
  return (
    <>
      <section className={styles.form}>
        <div className={styles.container}>
          <div className={styles.column1}>
            <input className={styles.name} type="text" />
          </div>
          <div className={styles.column1}>
            <input className={styles.company} type="text" />
          </div>
          <div className={styles.column1}>
            <select className={styles.color} name="select" id="">
              <option value="dark">dark</option>
              <option value="light">light</option>
              <option value="colorful">colorful</option>
            </select>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.column2}>
            <input className={styles.jop} type="text" />
          </div>
          <div className={styles.column2}>
            <input className={styles.email} type="text" />
          </div>
        </div>
        <div className={styles.container}>
          <textarea
            className={styles.message}
            name=""
            id=""
            cols="30"
            rows="3"
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
