import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "ellie",
      company: "kakao",
      jop: "programmer",
      email: "kuku6471@naver.com",
      message: "dont give up",
      image: "/images/default_logo.png",
      type: "dark",
    },
    {
      id: "2",
      name: "JK",
      company: "samsung",
      jop: "programmer",
      email: "kuku6471@naver.com",
      message: "dont give up",
      image: "/images/default_logo.png",
      type: "light",
    },
    {
      id: "3",
      name: "Jangfor",
      company: "google",
      jop: "programmer",
      email: "kuku6471@naver.com",
      message: "be Happy",
      image: "/images/default_logo.png",
      type: "colorful",
    },
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <section className={styles.main}>
        <Editor cards={cards} />
        <hr />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
