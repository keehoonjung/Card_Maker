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
      <section>
        <img src="" alt="" />
        <div>
          <h2></h2>
          <p></p>
          <hr />
          <p></p>
          <p></p>
          <p></p>
        </div>
      </section>
    </>
  );
};

export default Cards;
