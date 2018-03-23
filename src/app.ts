import { autoinject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-binding';
import { FirebaseService } from './services/firebase-service';
import { Store } from 'aurelia-store';

import firebase from './common/firebase';

import { LOAD_PROJECTS, SET_USER } from './store/constants';
import { loadProjects, setUser } from './store/actions';
import { State } from './store/state';

@autoinject()
export class App {
  private state: State;

  message = 'Hello OSS World!';

  constructor(private firebaseService: FirebaseService, private store: Store<State>) {
    this.store.state.subscribe(
      (state: State) => this.state = state
    );

    this.setupStore();

    firebase.auth().onAuthStateChanged(user => {
      this.store.dispatch(setUser, user);
    });
  }

  setupStore() {
    this.store.registerAction(SET_USER, setUser);
    this.store.registerAction(LOAD_PROJECTS, loadProjects);
  }

  async activate() {
    await this.store.dispatch(loadProjects);
  }

  @computedFrom('state.projects')
  get projects() {
    return this.state.projects;
  }
}
