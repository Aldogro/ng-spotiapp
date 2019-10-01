import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // tslint:disable-next-line:max-line-length
  mensaje: string;
  total: number;
  token = 'BQAULOhbuyOfvfu9hK3DjHZu1y14QmJ8aonVMw9QUYv9nPONLkk97WNWCgKVCHvYwxOu-YoNt53EL5e0P4k';

  constructor(
    private http: HttpClient
  ) {
    console.log('servicio de spotify listo');
  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization : `Bearer ${this.token}`
    });
    return this.http.get(url, { headers });
  }

  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      // tslint:disable-next-line:no-string-literal
      .pipe( map( data => data['artists'].items ));
  }

  getNewReleases(offset, limit) {
    return this.getQuery(`browse/new-releases?offset=${offset}&limit=${limit}`)
    // tslint:disable-next-line:no-string-literal
      .pipe( map( data => data['albums'].items ));
  }

  getArtista( artistId: string ) {
    return this.getQuery(`artists/${artistId}`);
    // tslint:disable-next-line:no-string-literal
    // .pipe( map( data => data['albums'].items));
  }
}
