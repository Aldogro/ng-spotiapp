export class Artista {
  constructor(
    public images?: string[],
    public name: string,
    public followers: number,
    public genero: string[],
    public external_url: string
  ) {}
}