import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlbumService {
  public numAlbums: number = 12;
  public numRows: number = 4;
  public band: string = 'Beatles';
  private links: Object = {
    stocks: true,
    albums: false
  };

  constructor(private http: Http) {
    setTimeout( () => {
      this.numRows = 3;
   }, 2000);
  };

  public getAlbums(num): Promise<any> {
    const ob = this.http.get(`http://localhost:4200/albums?term=the+beatles&entity=album&limit=${num}`);
    return ob.toPromise();
  }

  public setBand(band: string): void {
    this.band = band;
  }

  public setActivePage(page: string) {
    const ob: Object = this.links;
    for (const page in this.links) {
      this.links[page] = false;
    }
    this.links[page] = true;
  }

}
