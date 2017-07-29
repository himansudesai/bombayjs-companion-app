import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { AlbumsPageComponent } from './albums/albumspage.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { Store } from './services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    AlbumsPageComponent,
    AlbumsComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'stocks', component: StocksComponent },
      { path: 'albums', component: AlbumsPageComponent },
      { path: '', redirectTo: 'stocks', pathMatch: 'full' }
    ], {useHash: true})
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
