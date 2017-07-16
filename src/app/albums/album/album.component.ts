import { Component, Input } from '@angular/core';

@Component({
  selector: 'album-comp',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  @Input() album;

  year(date) {
    return (new Date(date)).getFullYear();
  }
}

