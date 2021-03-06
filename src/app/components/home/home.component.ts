import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* import { HttpClient } from '@angular/common/http'; */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  canciones: any[] = [];
  next: any;
  offset = 0;
  limit = 20;
  mensaje: string;
  total: 100;
  loading: boolean;

  constructor(
    private spotify: SpotifyService
  ) {
    this.loading = true;
    this.spotify.getNewReleases(this.offset, this.limit)
      .subscribe((data) => {
        // tslint:disable-next-line:no-string-literal
        this.canciones = data;
        console.log(data);
        this.loading = false;
      });
  }

  ngOnInit() {
  }

  paginaAnterior() {
    if ( this.offset <= 0 ) {
      this.mensaje = 'no se puede retroceder más';
      console.log(this.mensaje);
    } else {
      this.offset = this.offset - 20;
      this.spotify.getNewReleases(this.offset, this.limit)
      .subscribe( data => {
        // tslint:disable-next-line:no-string-literal
        this.canciones = data;
      });
    }
  }

  proximaPagina() {
    if ( this.offset >= this.total - 20 ) {
      this.mensaje = 'no se puede avanzar más';
      console.log(this.mensaje);
    } else {
      this.offset = this.offset + 20;
      this.spotify.getNewReleases(this.offset, this.limit)
      .subscribe( data => {
        // tslint:disable-next-line:no-string-literal
        this.canciones = data;
      });
    }
  }
}
