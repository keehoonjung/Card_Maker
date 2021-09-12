import React from "react";
import styles from "./cards.module.css";

const Cards = ({ card }) => {
  const type = card.type;
  return (
    <>
      <section className={`${styles.card} ${selectType(type)}`}>
        <img className={styles.image} src={card.url} alt="" />
        <div className={styles.description}>
          <h2 className={styles.name}>{card.name}</h2>
          <p>{card.company}</p>
          <hr className={styles.vertical} />
          <p>{card.jop}</p>
          <p>{card.email}</p>
          <p>{card.mssage}</p>
        </div>
      </section>
    </>
  );
};

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
