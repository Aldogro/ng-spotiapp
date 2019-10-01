export class Cancion {
  constructor(
    public name: string,
    public releaseDate: Date,
    public artists: string[],
    public externalUrl: string,
    public images?: string[]
  ) {}
}
