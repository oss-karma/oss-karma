import { Container } from 'aurelia-dependency-injection';
import { App } from '../../src/app';
import { Store } from 'aurelia-store';
import { FirebaseService } from '../../src/services/firebase-service';

const container = new Container();
const store = container.get(Store);

describe('the app', () => {
  // Eventually this will become a real test
  it('test passes', () => {
    expect(true).toBe(true);
  });
});
