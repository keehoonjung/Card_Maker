import React from "react";
import styles from "./cards.module.css";

const Cards = ({ card }) => {
  const selectType = (type) => {
    switch (type) {
      case type === "dark":
        return "dark";
        break;
      case type === "light":
        return "light";
        break;
      case type === "colorful":
        return "colorful";
        break;
      default:
        console.error("differnt type");
    }
  };
  return (
    <>
      <section className={`${styles.card}``${Cards(card.type)}`}>
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
