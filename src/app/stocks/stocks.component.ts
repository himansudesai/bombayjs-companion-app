import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { StockQuote } from './stockquote';
import { Router } from '@angular/router';

/*
export class AppComponent {
  router: Router;
  constructor(router: Router) {
    (<any>console).log('\n\n++hdd++ constructor of app component');
*/


@Component({
  selector: 'stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  router: Router;
  data: StockQuote;
  loading: boolean;
  symbol: Object;
  percentChange: string;
  change: string;
  name: string;
  last: string;
  loaded: boolean;
  lastTrade: string;

  constructor(private http: Http) {
    (<any>console).log("++hdd++ StocksComponent constructor");
  }

  ngOnInit() {
    (<any>console).log('\n\n++hdd++\n\n');
  }
/*
// [
{
"id": "12607212"
,"t" : "TSLA"
,"e" : "NASDAQ"
,"l" : "308.35"
,"l_fix" : "308.35"
,"l_cur" : "308.35"
,"s": "0"
,"ltt":"4:00PM EDT"
,"lt" : "May 5, 4:00PM EDT"
,"lt_dts" : "2017-05-05T16:00:02Z"
,"c" : "+12.89"
,"c_fix" : "12.89"
,"cp" : "4.36"
,"cp_fix" : "4.36"
,"ccol" : "chg"
,"pcls_fix" : "295.46"
}
]
*/

   makeRequest(): void {
    console.log('BUTTON!');
    if (this.symbol) {
      var endpoint = '/finance/info?client=ig&q=NASDAQ%3A';
      this.http.get(endpoint + this.symbol)
        .subscribe((res: Response) => {
          const rawText = res.text();
          const minusComments = rawText.substr(4);
          this.data = (JSON.parse(minusComments))[0];
          this.loading = false;
          this.percentChange = this.data.cp_fix;
          this.name = this.data.t;
          this.last = this.data.l;
          this.change = this.data.c;
          this.lastTrade = this.data.lt;
          this.loaded = true;
        });
    }
  }
}
