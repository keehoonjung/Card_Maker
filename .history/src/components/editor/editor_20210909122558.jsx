import React from "react";
import Form from "../form/form";
import styles from "./editor.module.css";

const Editor = (props) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    <Form />
  </section>
);

export default Editor;
