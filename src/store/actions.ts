import { Container } from 'aurelia-dependency-injection';
import { Store } from 'aurelia-store';
import { State } from './state';

import firebase from '../common/firebase';
import { FirebaseService } from '../services/firebase-service';

const DB: firebase.firestore.Firestore = firebase.firestore();
const STORE: Store<State> = Container.instance.get(Store);

export async function setUser(state, user) {
  return { ...state, ...{ user } };
}

export async function loadProjects(state) {
  const LOADED_PROJECTS = await DB.collection('projects').get();

  let projects = [];

  LOADED_PROJECTS.docs.forEach(d => projects.push(d.data()));

  return { ...state, ...{ projects } };
}
