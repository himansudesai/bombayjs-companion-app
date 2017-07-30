import { Component, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Album } from './album.interface';
import { Store } from '../services/store.service';
import { AlbumsComponent } from './albums.component';


@Component({
  templateUrl: './albumspage.component.html',
  styleUrls: ['./albumspage.component.css']
})

export class AlbumsPageComponent {
  private selectedBand = '';
  private albums;
  private rows;

  constructor(private http: Http, private store: Store, private rr: ActivatedRoute) {
    this.selectedBand = this.store.band;
    this.fetchStoreSettings(this.selectedBand);
    this.store.setActivePage('albums');
  }

  bandSelected(val) {
    this.store.setBand(this.selectedBand);
    this.fetchStoreSettings(this.selectedBand);
  }

  private fetchStoreSettings(band) {
    this.albums = this.store.settings[band].albums;
    this.rows = this.store.settings[band].rows;    
  }

}

