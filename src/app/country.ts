export interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
  };
  nativeName: string;
  subregion: string;
  topLevelDomain: string;
  demonym: string;
  numericCode: string;
  borders: string[];
  alpha3Code: string;
}
