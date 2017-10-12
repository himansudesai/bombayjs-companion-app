import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes.component';
import { AlbumsPageComponent } from './albums/albumspage.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './albums/album/album.component';
import { SettingsComponent } from './settings/settings.component';
import { Store } from './services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    AlbumsPageComponent,
    AlbumsComponent,
    AlbumComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'jokes', component: JokesComponent },
      { path: 'albums', component: AlbumsPageComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'jokes', pathMatch: 'full' }
    ], {useHash: true})
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
