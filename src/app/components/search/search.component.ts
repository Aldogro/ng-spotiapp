import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private spotify: SpotifyService
  ) { }

  ngOnInit() {
  }

  buscar(termino) {
    this.spotify.getArtista(termino)
    .subscribe(data => {
      console.log(data);
    });
  }
}
