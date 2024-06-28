import { Injectable } from '@angular/core';
import { Musica } from './musica';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  musics: Musica[] =[]

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
    const music = this.musics.find((value: Musica): boolean => value.id == id);
    return music;
  }

  save(music: Musica): Observable<any> {
    if (music.id) {
      return this.http.put(`${this.baseUrl}/alterar/${music.id}`, music);
    } else {
      return this.http.post(`${this.baseUrl}/incluir`, music);
    }
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/excluir/${id}`);
  }
}




