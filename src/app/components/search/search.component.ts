import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(
    private spotify: SpotifyService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  buscar( termino ) {
    this.spotify.getArtistas( termino )
    .subscribe(data => {
      this.loading = true;
      // tslint:disable-next-line:no-string-literal
      this.artistas = data;
      this.loading = false;
      console.log(this.artistas);
    });
  }

  mostrarArtista( artista: any ) {
    console.log( artista.id );
    this.router.navigate([ '/artist', artista.id ]);
  }
}
