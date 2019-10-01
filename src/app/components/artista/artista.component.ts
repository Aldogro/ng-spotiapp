import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  loaded = false;

  constructor(
    private route: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.route.params.subscribe( params => {
      console.log( params.id );
      this.getArtista( params.id );
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
}
