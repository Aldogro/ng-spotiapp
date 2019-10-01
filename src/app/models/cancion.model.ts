export class Cancion {
  constructor(
    public name: string,
    public release_date: Date,
    public artists: string[],
    public external_url: string,
    public images?: string[]
  ) {}
}