import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // tslint:disable-next-line:max-line-length
  token = 'BQA5xhc7cSHUChJ7IG9Q4_1UJ9POUIjQIvcjgq9CDFAEz9qu0f7IJsKNRWdA-mH4fOYu7OhaVQPPCeoSw_E';
  mensaje: string;
  total: number;

  constructor(
    private http: HttpClient
  ) {
    console.log('servicio de spotify listo');
  }


  getArtista( termino: string ) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      Authorization : `Bearer ${this.token}`
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`, { headers });
  }

  getNewReleases(offset, limit) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      Authorization : `Bearer ${this.token}`
    });
    return this.http.get(`https://api.spotify.com/v1/browse/new-releases?offset=${offset}&limit=${limit}`, { headers });
  }
}
