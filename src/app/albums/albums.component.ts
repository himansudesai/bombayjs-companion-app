import { Component, OnChanges, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Album } from './album.interface';
import { Store } from '../services/store.service';

@Component({
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  selector: 'albums'
})

export class AlbumsComponent implements OnChanges {
  @Input() band: string;
  @Input() numRows: number;
  @Input() numAlbums: number;

  albums: Array<Album>;
  rows: Array<Album>;

  constructor(private http: Http, store: Store) {}

  ngOnChanges() {
    this.numAlbums = (this.numAlbums < 1) ? 1 : this.numAlbums;
    this.numRows = (this.numRows < 1) ? 1 : this.numRows;

    const p: Promise<any> = this.http.get(`/albums?term=${this.band}&entity=album&limit=${this.numAlbums}`).toPromise();    
    p.then( (res) => {
      const resJson = res.json();
      this.albums = resJson.results;
      this.sort();

      const perRow = Math.ceil(this.albums.length / this.numRows);
      let idx = 0;
      let curRow;
      this.rows = [];
      for (let row = 0; row < this.albums.length; row++) {
        curRow = [];
        for (let col = 0; col < perRow && idx < this.albums.length; col++) {
          curRow.push(this.albums[idx++]);
        }
        this.rows.push(curRow);
      }
    });
  }

  sort() {
    this.albums = this.albums.sort(function(a: Album, b: Album){
      return (new Date(a.releaseDate) < new Date(b.releaseDate) ? -1 : 1);
    }).reverse();
  }

}
