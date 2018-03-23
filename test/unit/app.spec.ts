import {App} from '../../src/app';
import { FirebaseService } from '../../src/services/firebase-service';

describe('the app', () => {
  it('says hello', () => {
    expect(new App(new FirebaseService()).message).toBe('Hello World!');
  });
});
