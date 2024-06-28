import { Component, OnInit } from '@angular/core';
import { MusicService } from '../shared/music.service';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicListItemComponent } from '../music-list-item/music-list-item.component';

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [RouterLink, NgForOf, NgIf, FormsModule, MusicListItemComponent],
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {
  musics: any[] = [];
  nomeBusca: string = '';
  artistaFiltro: string = '';

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.listarMusicas();
  }

  listarMusicas() {
    this.musicService.listar().subscribe(data => {
      this.musics = data;
    });
  }

  buscarPorNome() {
    this.musicService.buscarPorNome(this.nomeBusca).subscribe(data => {
      this.musics = data;
    });
  }

  filtrarPorArtista() {
    this.musicService.filtrarPorArtista(this.artistaFiltro).subscribe(data => {
      this.musics = data;
    });
  }
}
