export class Artista {
  constructor(
    public name: string,
    public followers: number,
    public genero: string[],
    public externalUrl: string,
    public images?: string[]
  ) {}
}
