import { autoinject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-binding';
import { Store } from 'aurelia-store';

import firebase from '../common/firebase';

import { LOAD_PROJECTS } from '../store/constants';
import { loadProjects } from '../store/actions';
import { State } from '../store/state';

@autoinject()
export class Home {
  message = 'Hello OSS World!';

  private state: State;

  constructor(private store: Store<State>) {
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
