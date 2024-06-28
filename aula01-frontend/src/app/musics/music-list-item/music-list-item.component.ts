import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Musica } from '../shared/musica';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicService } from '../shared/music.service';

@Component({
  selector: 'app-music-list-item',
  standalone: true,
  imports: [RouterLink, NgClass, FormsModule],
  templateUrl: './music-list-item.component.html',
  styleUrls: ['./music-list-item.component.scss']
})
export class MusicListItemComponent {
  @Input() music!: Musica;

  constructor(public musicService: MusicService) {}

  onCompletedCheckChange(music: Musica) {
    this.musicService.save(music);
  }

  delete(music: Musica) {
    this.musicService.delete(music.id);
  }
}
