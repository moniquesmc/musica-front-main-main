import { Routes, RouterModule } from '@angular/router';
import { MusicListComponent } from './musics/music-list/music-list.component';
import { MusicFormComponent } from './musics/music-form/music-form.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'music-list', component: MusicListComponent },
    { path: '', redirectTo: '/music-list', pathMatch: 'full' },
    {path:'new', component: MusicFormComponent},
    {path:'edit/:id', component: MusicFormComponent},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }