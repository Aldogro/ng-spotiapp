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
  token = 'BQCSO2T7SONthKbNt49ENH70IyWTQ2BxHMFkB4qzTsm-08pSS4fD0uoiADDROEWR3mzlWHg1kd6IFhkUZOA';

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

  getArtista( termino: string ) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      // tslint:disable-next-line:no-string-literal
      .pipe( map( data => data['artists'].items ));
  }

  getNewReleases(offset, limit) {
    return this.getQuery(`browse/new-releases?offset=${offset}&limit=${limit}`)
    // tslint:disable-next-line:no-string-literal
      .pipe( map( data => data['albums'].items ));
  }
}
