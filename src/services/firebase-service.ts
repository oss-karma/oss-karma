import firebase from '../common/firebase';

export class FirebaseService {
  private db: firebase.firestore.Firestore;

  constructor() {
    this.db = firebase.firestore();
  }

  getCollection(name: string) {
    return this.db.collection(name).get();
  }
}
