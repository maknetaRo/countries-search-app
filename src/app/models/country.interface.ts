export interface ICountries {
  countries: ICountry[];
}

export interface ICountry {
  name: string;
  topLevelDomain: string[];
  aplha2Code: string;
  aplha3Code: string;
  callingcodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: {};
  currencies: [];
  languages: [];
  translations: {};
  flag: string;
  regionalBlocks: [];
  cios: string;
  independent: boolean;
}
