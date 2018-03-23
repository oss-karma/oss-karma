import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAQ4tNDdvJvATeNjso5Y5sCQN7DzdWsLqc",
  authDomain: "oss-karma.firebaseapp.com",
  databaseURL: "https://oss-karma.firebaseio.com",
  projectId: "oss-karma",
  storageBucket: "oss-karma.appspot.com",
  messagingSenderId: "160724122516"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase;
