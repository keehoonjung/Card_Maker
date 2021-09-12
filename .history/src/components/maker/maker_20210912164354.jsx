import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, databaseService }) => {
  const historyState = history?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const history = useHistory();
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = databaseService.readData(userId, (cards) =>
      setCards(cards)
    );
    return () => stopSync();
  }, [userId, databaseService]);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, history, userId]);

  const AddandUpdateCard = useCallback(
    (card) => {
      setCards((cards) => {
        const updated = { ...cards };
        updated[card.id] = card;
        return updated;
      });
      databaseService.writeData(userId, card);
    },
    [databaseService, userId]
  );

  const deleteCard = useCallback(
    (id) => {
      setCards((cards) => {
        const updated = { ...cards };
        delete updated[id];
        return updated;
      });
      databaseService.deleteData(userId, id);
    },
    [databaseService, userId]
  );

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
