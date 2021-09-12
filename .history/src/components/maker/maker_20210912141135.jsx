import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput, databaseService }) => {
  const [cards, setCards] = useState({});

  const deleteCard = (id) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[id];
      return updated;
    });
  };

  const AddandUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    databaseService.writeData(card.id, card);
  };

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
