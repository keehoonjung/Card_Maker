import firebaseApp from "./firebase";

export default class Database {
  writeData(userId, card) {
    console.log("hello");
    firebaseApp
      .database()
      .ref("cards/" + userId)
      .set({
        card: card,
      });
  }
}
