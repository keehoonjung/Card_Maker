import firebaseApp from "./firebase";

const database = firebaseApp.database();

export default class Database {
  writeData(userId, card) {
    database()
      .ref("cards/" + userId)
      .set({
        card,
      });
  }
}
