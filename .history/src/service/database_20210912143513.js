import firebaseApp from "./firebase";

export default class Database {
  writeData(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
  deleteData(userId, id) {
    firebaseApp.database().ref(`${userId}/cards/${id}`).remove();
  }
}
