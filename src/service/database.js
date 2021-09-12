import { firebaseDatabase } from "./firebase";

export default class Database {
  writeData(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }
  deleteData(userId, id) {
    firebaseDatabase.ref(`${userId}/cards/${id}`).remove();
  }
  readData(userId, onUpdate) {
    const cardsRef = firebaseDatabase.ref(`${userId}/cards`);

    cardsRef.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => cardsRef.off();
  }
}
