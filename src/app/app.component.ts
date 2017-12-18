import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from './services/store.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router: Router;

  constructor(public store: Store) {}

  ngOnInit() {}
}

