import { Container } from 'aurelia-dependency-injection';
import { Store } from 'aurelia-store';
import { State } from './state';

import { FirebaseService } from '../services/firebase-service';

const STORE: Store<State> = Container.instance.get(Store);

export async function setUser(state, user) {
  return { ...state, ...{ user } };
}

export async function loadProjects(state) {
  const LOADED_PROJECTS = await API.getCollection('projects');

  let projects = [];

  LOADED_PROJECTS.docs.forEach(d => projects.push(d.data()));

  return { ...state, ...{ projects } };
}
