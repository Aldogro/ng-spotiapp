import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Artista } from '../../models/artista.model';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  loaded = false;

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.route.params.subscribe( params => {
      this.getArtista( params.id );
      this.mostrarArtistaTopTracks( params.id );
    });
  }

  ngOnInit() {
  }

  getArtista( id: string ) {
    this.spotify.getArtista( id )
    .subscribe( artista => {
      this.artista = artista;
      console.log( this.artista );
      this.loaded = true;
    });
  }

  mostrarArtistaTopTracks( artistaId: string ) {
    this.spotify.getArtistaTopTracks( artistaId )
    .subscribe( data => {
      // tslint:disable-next-line:no-string-literal
      this.topTracks = data['tracks'];
      console.log( this.topTracks );
    });
  }
}
