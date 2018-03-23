import { autoinject } from 'aurelia-dependency-injection';
import { FirebaseService } from './services/firebase-service';

@autoinject()
export class App {
  db: any;
  message = 'Hello OSS World!';
  projectsLoaded = false;
  projects = []

  constructor(private firebaseService: FirebaseService) {

  }

  async activate() {
    const data = await this.firebaseService.getCollection('projects');

    data.docs.forEach(d => this.projects.push(d.data()));

    this.projectsLoaded = true;
  }
}
