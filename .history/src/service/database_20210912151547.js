import firebaseApp from "./firebase";

export default class Database {
  writeData(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
  deleteData(userId, id) {
    firebaseApp.database().ref(`${userId}/cards/${id}`).remove();
  }
  readData(userId, onUpdate) {
    const cardsRef = firebaseApp.database().ref(`${userId}/cards`);

    cardsRef.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => cardsRef.off();
  }
}
