import React from "react";
import styles from "./cards.module.css";

const Cards = ({ card }) => {
  const type = card.type;
  const selectType = (type) => {
    switch (type) {
      case type === "dark":
        console.log(type);
        return "dark";
      case type === "light":
        console.log(type);
        return "light";
      case type === "colorful":
        console.log(type);
        return "colorful";
      default:
        console.error("differnt type");
    }
  };
  return (
    <>
      <section className={`${styles.card} ${styles.dark}`}>
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
