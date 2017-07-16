import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Album } from './album.interface';
import { AlbumService } from './album.service';
import { AlbumsComponent } from './albums.component';


@Component({
  templateUrl: './albumspage.component.html',
  styleUrls: ['./albumspage.component.css']
})

export class AlbumsPageComponent implements OnChanges, OnInit {

  constructor(private http: Http, private aSvc: AlbumService, private rr: ActivatedRoute) {}

  ngOnInit() {
    (<any>console).log('++hdd++ AlbumsPageComponent ngOnInit');
  }

  ngOnChanges() {
    (<any>console).log('++hdd++ AlbumsPageComponent ngOnChanges');
  }

}
