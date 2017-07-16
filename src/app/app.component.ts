import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//  router: Router;
  title = 'app works!';

  constructor() {
    (<any>console).log('++hdd++ AppComponent constructor');
  }

  ngOnInit() {
    (<any>console).log('++hdd++ AppComponent ngOnInit');
    /*
    this.router.events.subscribe((something: any) => {
      (<any>console).log('++hdd++ something working?');
    })
    */
  }



}
