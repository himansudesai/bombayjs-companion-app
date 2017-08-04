import { Injectable } from '@angular/core';

@Injectable()
export class Store {
  private numAlbums: number = 12;
  private numRows: number = 4;
  public band: string = 'U2';
  public bands: Object[] = ['Beatles', 'Rolling Stones', 'Bangles', 'Pink Floyd', 'U2', 'Supremes', 'Destinys Child', 'Backstreet Boys', 'Police'];
  public settings: Object = {
    Beatles: {albums: this.numAlbums, rows: this.numRows},
    "Rolling Stones": {albums: this.numAlbums, rows: this.numRows},
    Bangles: {albums: this.numAlbums, rows: this.numRows},
    U2: {albums: this.numAlbums, rows: this.numRows},
    Supremes: {albums: this.numAlbums, rows: this.numRows},
    "Destinys Child": {albums: this.numAlbums, rows: this.numRows},
    "Backstreet Boys": {albums: this.numAlbums, rows: this.numRows},
    Police: {albums: this.numAlbums, rows: this.numRows}
  };
  
  private links: Object = {
    stocks: true,
    albums: false,
    settings: false
  };

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
