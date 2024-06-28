import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MusicListComponent } from './musics/music-list/music-list.component'; 

@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'music-list', component: MusicListComponent },
      { path: '', redirectTo: '/music-list', pathMatch: 'full' }
      // Outras rotas aqui
    ])
  ],
  providers: [],

})
export class AppModule { }
