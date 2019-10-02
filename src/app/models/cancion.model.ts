export class Cancion {
  name: string;
  releaseDate: Date;
  artists: string[];
  externalUrl: string;
  images: string[];

  constructor(cancion) {
    this.name = cancion.name;
    this.releaseDate = cancion.release_date;
    this.artists = cancion.artists;
    this.externalUrl = cancion.external_urls.sporify;
    this.images = cancion.images;
  }
}
