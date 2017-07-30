import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Store } from '../services/store.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  constructor(private http: Http, private store: Store) {
        this.store.setActivePage('settings');
  }
}
