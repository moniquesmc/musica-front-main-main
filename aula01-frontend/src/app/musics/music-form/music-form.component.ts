import { Component, OnInit } from '@angular/core';
import { Musica } from '../shared/musica';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicService } from '../shared/music.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-music-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './music-form.component.html',
  styleUrls: ['./music-form.component.scss'],

})
export class MusicFormComponent implements OnInit {
  music: Musica = new Musica();
  title: string = 'Nova Música';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private musicService: MusicService  // Corrigido o nome do serviço para MusicService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Edição do ID:" + id);
    if (id) {
      const musicAux: Musica | undefined = this.musicService.getById(parseInt(id, 10));
      if (musicAux) {
        this.music = musicAux;
        this.title = 'Alterando Música';
      }
    }
  }

  onSubmit(): void {
    this.musicService.save(this.music);
    this.router.navigate(['']);
  }
}
