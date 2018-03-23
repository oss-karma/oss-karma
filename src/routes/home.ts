import { autoinject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-binding';
import { FirebaseService } from '../services/firebase-service';
import { Store } from 'aurelia-store';

import firebase from '../common/firebase';

import { LOAD_PROJECTS } from '../store/constants';
import { loadProjects } from '../store/actions';
import { State } from '../store/state';

@autoinject()
export class Home {
  message = 'Hello OSS World!';

  private state: State;

  constructor(private firebaseService: FirebaseService, private store: Store<State>) {
    this.store.state.subscribe(
      (state: State) => this.state = state
    );
  }

  async activate() {
    await this.store.dispatch(loadProjects);
  }

  @computedFrom('state.projects')
  get projects() {
    return this.state.projects;
  }
}
