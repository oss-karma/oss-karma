import firebase from '../common/firebase';
import { computedFrom, autoinject } from 'aurelia-framework';

@autoinject()
export class UserService {
  private userLoggedIn: boolean = false;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      this.userLoggedIn = user ? true : false;
    });
  }

  @computedFrom('userLoggedIn')
  get isLoggedIn() {
    return this.userLoggedIn;
  }

  getLoggedInUser() {
    return firebase.auth().currentUser;
  }

  logout() {
    return firebase.auth().signOut();
  }

  socialLogin(providerType: 'facebook' | 'google' | 'github') {
    let provider: firebase.auth.FacebookAuthProvider_Instance | firebase.auth.GithubAuthProvider_Instance | firebase.auth.GoogleAuthProvider_Instance;

    switch (providerType) {
      case 'facebook':
        provider = new firebase.auth.FacebookAuthProvider();
      case 'github':
        provider = new firebase.auth.GithubAuthProvider();
      case 'google':
        provider = new firebase.auth.GoogleAuthProvider();
    }

    return firebase.auth().signInWithRedirect(provider);
  }
}
