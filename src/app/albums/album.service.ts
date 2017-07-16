import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlbumService {
  public numAlbums: number = 12;
  public numRows: number = 4;

  constructor(private http: Http) {
    setTimeout( () => {
      this.numRows = 3;
   }, 3000);
  }

  public getAlbums(num): Promise<any> {
    (<any>console).log('++hdd++ AlbumsService --> getAlbums');
    const ob = this.http.get(`http://localhost:4200/albums?term=the+beatles&entity=album&limit=${num}`);
    return ob.toPromise();
  }

}
