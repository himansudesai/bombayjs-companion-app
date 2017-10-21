import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {Http, Response} from '@angular/http';
import { Store } from '../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  private bands: Array<string> = [];
  private settings: Object = {};
  private selectedBand: string = undefined;
  private postParam;
  private postResults: Object;

  constructor(private http: Http, private store: Store, private router: Router) {
    this.store.setActivePage('settings');
    this.copySettingsFromStore();
    this.bands = Object.keys(this.store.settings);
  }

  copySettingsFromStore() {
    this.copySettings(this.store.settings, this.settings);
  }

  doPost() {
    this.http.post('/postit', {greeting: this.postParam})
      .subscribe((res: Response) => {
        const rawText = res.text();
        var respObj = JSON.parse(rawText);
        this.postResults = {
          headers: {
            Origin: respObj.headers.Origin,
            "User-Agent": respObj.headers["User-Agent"]
          },
          json: respObj.json,
          origin: respObj.origin,
          url: respObj.url
        };
      });
  }

  applyNewSettings() {
    this.copySettings(this.settings, this.store.settings);
    this.router.navigate(['/albums']);
  }

  cancelChanges(event) {
    event.preventDefault();
    this.copySettingsFromStore();
  }

  bandSelected(band) {
    this.selectedBand = band;
  }

  copySettings(srcObject, tarObject) {
    const keys = Object.keys(srcObject);
    for (const key of keys) {
      tarObject[key] = {
        albums: srcObject[key].albums,
        rows: srcObject[key].rows
      };
    }
  }

  isSelected(band: string) {
    return (band == this.selectedBand) ? true: false;
  }
}
