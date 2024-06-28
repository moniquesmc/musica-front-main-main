import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicFormComponent } from './music-form/music-form.component';
import { MusicListComponent } from './music-list/music-list.component';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    FormsModule, 
    MusicFormComponent,
    MusicListComponent,
    HttpClientModule,
  ]
})
export class MusicsModule { }
