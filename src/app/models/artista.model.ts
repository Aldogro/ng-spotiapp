export class Artista {
  name: string;
  followers: number;
  genero: string[];
  externalUrl: string;
  images?: string[];

  constructor(artista) {
    this.name = artista.name;
    this.followers = artista.followers;
    this.genero = artista.gender;
    this.externalUrl = artista.external_urls.spotify;
    this.images = artista.images;
  }
}
