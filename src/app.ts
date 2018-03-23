import { PLATFORM } from 'aurelia-pal';
import { autoinject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-binding';
import { RouterConfiguration, Router } from 'aurelia-router';
import { Store } from 'aurelia-store';

import firebase from './common/firebase';

import { LOAD_PROJECTS, SET_USER } from './store/constants';
import { loadProjects, setUser } from './store/actions';
import { State } from './store/state';

@autoinject()
export class App {
  private router: Router;
  private state: State;

  constructor(private store: Store<State>) {
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

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'OSS Karma';
    config.map([
      { name: 'home', route: [''], moduleId: PLATFORM.moduleName('./routes/home', 'name'), nav: false, title: 'Home' }
    ]);

    this.router = router;
  }
}
