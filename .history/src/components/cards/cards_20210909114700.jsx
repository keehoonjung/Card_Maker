import React from "react";
import { getNodeMajorVersion } from "typescript";
import styles from "./cards.module.css";

const Cards = (props) => {
  const card = {
    name: "ellie",
    company: "kakao",
    jop: "programmer",
    email: "kuku6471@naver.com",
    mssage: "dont give up",
    image: "/images/default_logo.png",
  };

  return (
    <>
      <section className={styles.card}>
        <img className={styles.image} src={card.image} alt="" />
        <div>
          <h2>{card.name}</h2>
          <p>{card.company}</p>
          <hr />
          <p>{card.jop}</p>
          <p>{card.email}</p>
          <p>{card.mssage}</p>
        </div>
      </section>
    </>
  );
};

export default Cards;
