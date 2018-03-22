import { firebase } from '@firebase/app'
import '@firebase/firestore'

export class App {
  db: any;
  message = 'Hello OSS World!';
  projectsLoaded = false;
  projects = []

  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyAQ4tNDdvJvATeNjso5Y5sCQN7DzdWsLqc",
      authDomain: "oss-karma.firebaseapp.com",
      databaseURL: "https://oss-karma.firebaseio.com",
      projectId: "oss-karma",
      storageBucket: "oss-karma.appspot.com",
      messagingSenderId: "160724122516"
    })
    this.db = firebase.app().firestore();
  }

  async activate() {
    //  let db = firebase.app().firestore()

    let data = await this.db.collection('projects').get()
    data.docs.forEach(d => {
      this.projects.push(d.data())
    })
    this.projectsLoaded=true;
  }
}
