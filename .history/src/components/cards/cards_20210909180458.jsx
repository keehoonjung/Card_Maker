import React from "react";
import styles from "./cards.module.css";

const Cards = ({ card }) => {
  const type = card.type;
  const selectType = (type) => {
    switch (type) {
      case type === "dark":
        return styles.dark;
      case type === "light":
        return styles.light;
      case type === "colorful":
        return styles.colorful;
      default:
        console.error("differnt type");
    }
  };
  return (
    <>
      <section className={`${styles.card} ${selectType(type)}`}>
        <img className={styles.image} src={card.image} alt="" />
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

export default Cards;
