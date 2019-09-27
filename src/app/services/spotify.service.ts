import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // tslint:disable-next-line:max-line-length
  token = 'BQAJ1fCQUchEIvUZbSqigUAYo5MY3Tr8_JKxRxGd_G_U-Y7ZXKF27zI62O_sf-l1MCLrVfOmorH9irDb0YE';
  next: any;
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
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, { headers });
  }

  getNewReleases(offset, limit) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      Authorization : `Bearer ${this.token}`
    });
    return this.http.get(`https://api.spotify.com/v1/browse/new-releases?offset=${offset}&limit=${limit}`, { headers });
  }
}
