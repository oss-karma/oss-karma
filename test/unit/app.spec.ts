import { Container } from 'aurelia-dependency-injection';
import { App } from '../../src/app';
import { Store } from 'aurelia-store';
import { FirebaseService } from '../../src/services/firebase-service';

const container = new Container();
const firebaseService = container.get(FirebaseService);
const store = container.get(Store);

describe('the app', () => {
  it('says hello', () => {
    expect(new App(firebaseService, store).message).toBe('Hello World!');
  });
});
