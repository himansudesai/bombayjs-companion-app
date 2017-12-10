import { Component } from '@angular/core';
import { Headers, Http, Response} from '@angular/http';
import { Store } from '../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'stocks',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent {
  router: Router;
  loading: boolean = false;
  loaded: boolean = false;
  rawData: object;
  category: string = '';
  joke: string = '';
  icon_url: string = '';

  constructor(private http: Http, private store: Store) {
      this.store.setActivePage('jokes');
  }
  
   makeRequest(): void {
      // var endpoint = '/finance/info?q=';
      this.loading = true;
      this.loaded = false;

      // const endpoint = 'https://api.chucknorris.io/jokes/search?query=' + this.category;

      const endpoint = '/jokes?query=' + this.category;

      this.http.get(endpoint)
        .subscribe((res: Response) => {
          const rawText = res.text();
          this.rawData = JSON.parse(rawText);
          if (this.rawData && this.rawData['total'] > 0) {
            this.joke = this.rawData['result'][0].value;
            this.icon_url = this.rawData['result'][0]['icon_url'];
          }
          this.loading = false;
          this.loaded = true;
        });    
  }
}
