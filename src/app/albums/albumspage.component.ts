import { Component, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Album } from './album.interface';
import { AlbumService } from './album.service';
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

  constructor(private http: Http, private aSvc: AlbumService, private rr: ActivatedRoute) {
    this.selectedBand.band = this.aSvc.band;
    this.aSvc.setActivePage('albums');
  }

  bandSelected(val) {
    this.aSvc.setBand(this.selectedBand.band);
  }

}

