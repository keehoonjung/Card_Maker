import firebaseApp from "./firebase";

export default class Database {
  writeData(userId, card) {
    firebaseApp
      .database()
      .ref("cards/" + userId)
      .set({
        card,
      });
  }
}
