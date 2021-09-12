import React, { memo } from "react";
import styles from "./cards.module.css";

const DEFAULT_IMAGE = "/images/default_logo.png";

const Cards = memo(({ card }) => {
  const { name, company, jop, email, message, type, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <>
      <section className={`${styles.card} ${selectType(type)}`}>
        <img className={styles.image} src={url} alt="" />
        <div className={styles.description}>
          <h2 className={styles.name}>{name}</h2>
          <p>{company}</p>
          <hr className={styles.vertical} />
          <p>{jop}</p>
          <p>{email}</p>
          <p>{message}</p>
        </div>
      </section>
    </>
  );
});

function selectType(type) {
  switch (type) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${type}`);
  }
}

export default Cards;
