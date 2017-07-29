import { Injectable } from '@angular/core';

@Injectable()
export class Store {
  public numAlbums: number = 12;
  public numRows: number = 4;
  public band: string = 'Beatles';
  private links: Object = {
    stocks: true,
    albums: false
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
