import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput, databaseService }) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const deleteCard = (id) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[id];
      return updated;
    });
    databaseService.deleteData(userId, id);
  };

  const AddandUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    databaseService.writeData(userId, card);
  };

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    const data = databaseService.readData(userId);
    console.log(data);
    console.log(data);
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.container}>
      <Header onLogout={onLogout} />
      <section className={styles.main}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={AddandUpdateCard}
          deleteCard={deleteCard}
          updateCard={AddandUpdateCard}
        />
        <hr />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;

// 1: {
//   id: "1",
//   name: "ellie",
//   company: "kakao",
//   jop: "programmer",
//   email: "kuku6471@naver.com",
//   message: "dont give up",
//   image: "bob",
//   url: "/images/default_logo.png",
//   type: "dark",
// },
// 2: {
//   id: "2",
//   name: "JK",
//   company: "samsung",
//   jop: "programmer",
//   email: "kuku6471@naver.com",
//   message: "dont give up",
//   image: "sam",
//   url: "/images/default_logo.png",
//   type: "light",
// },
// 3: {
//   id: "3",
//   name: "Jangfor",
//   company: "google",
//   jop: "programmer",
//   email: "kuku6471@naver.com",
//   message: "be Happy",
//   image: "song",
//   url: "https://res.cloudinary.com/dpvhkp8oq/image/upload/v1631275816/siix1qvgt29iwgs97fa9.jpg",
//   type: "colorful",
// },
