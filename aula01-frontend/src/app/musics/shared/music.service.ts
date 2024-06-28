import { Injectable } from '@angular/core';
import { Music } from './music';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  musics: Music[] =[]

  listar(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lista`);
  }

  buscarPorNome(nome: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/buscarPorNome`, { params: { nome } });
  }

  filtrarPorArtista(artista: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filtrarPorArtista`, { params: { artista } });
  }

  getById(id:number){
    const music = this.musics.find((value: Music): boolean => value.id == id);
    return music;
  }


  private storelist(){
    window.localStorage.setItem('list-musics', JSON.stringify(this.musics));
  }


  save(music: Music): void{
    if(music.id){
      const musicArr = this.getById(music.id);
      if(musicArr){
        musicArr.nomeMusica = music.nomeMusica
        musicArr.dataLancamento = music.dataLancamento
        musicArr.duracao = music.duracao
        musicArr.nomeAlbum = music.nomeAlbum
        musicArr.nomeBanda = music.nomeBanda
      }
    }else{
      const lastId = this.musics.length > 0 ?
      this.musics[this.musics.length-1].id : 0;
      music.id = lastId + 1;
      this.musics.push(music);
    }

    this.storelist();
  }

  delete(id: number){
    const musicIndex = this.musics.findIndex((value: Music) => value.id == id);
    this.musics.splice(musicIndex, 1);
    this.storelist();
  }


}

