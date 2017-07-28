import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from './albums/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  router: Router;
  title = 'app works!';

  constructor(private svc: AlbumService) {}

  ngOnInit() {}
}

