import { Injectable } from '@angular/core';

@Injectable()
export class Store {
  private numAlbums: number = 12;
  private numRows: number = 4;
  public bands: string[] = ['Beatles', 'Rolling Stones', 'Bangles', 'Pink Floyd', 'U2', 'Supremes', 'Destinys Child', 'Backstreet Boys', 'Police'];
  public band: string = this.bands[0];
  public settings: Object = {};

  constructor() {
    for (let i=0; i<this.bands.length; i++) {
      this.settings[this.bands[i]] = {
        albums: this.numAlbums,
        rows: this.numRows
      };
    }
  }
  
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
