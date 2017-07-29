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
  public bands: Object[] = ['Beatles', 'Rolling Stones', 'Bangles', 'Pink Floyd', 'U2', 'Supremes', 'Destinys Child', 'Backstreet Boys', 'Police'];
  public selectedBand = {
    band: ''
  }
  private numAlbums;
  private numRows;

  constructor(private http: Http, private store: Store, private rr: ActivatedRoute) {
    this.selectedBand.band = this.store.band;
    this.numAlbums = this.store.numAlbums;
    this.numRows = this.store.numRows;
    this.store.setActivePage('albums');
  }

  bandSelected(val) {
    this.store.setBand(this.selectedBand.band);
  }

  showStats() {
    alert(`num albums/rows/band = ${this.numAlbums} / ${this.numRows} / ${this.selectedBand.band}`);
  }

}

