import firebaseApp from "./firebase";

export default class Database {
  writeData(userId, card) {
    const database = firebaseApp.database();
    database()
      .ref("cards/" + userId)
      .set({
        card,
      });
  }
}
