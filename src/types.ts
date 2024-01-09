export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: Record<string, string>;
  translations: Record<string, Translation>;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  cioc?: string;
  borders?: string[];
  fifa?: string;
  gini?: Record<string, number>;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  AUD?: TartuGecko;
  ERN?: TartuGecko;
  WST?: TartuGecko;
  MKD?: TartuGecko;
  DJF?: TartuGecko;
  JOD?: TartuGecko;
  PKR?: TartuGecko;
  XPF?: TartuGecko;
  EUR?: TartuGecko;
  MRU?: TartuGecko;
  DKK?: TartuGecko;
  NAD?: TartuGecko;
  ZAR?: TartuGecko;
  GHS?: TartuGecko;
  SSP?: TartuGecko;
  USD?: TartuGecko;
  MDL?: TartuGecko;
  KPW?: TartuGecko;
  MOP?: TartuGecko;
  SCR?: TartuGecko;
  AMD?: TartuGecko;
  ANG?: TartuGecko;
  XAF?: TartuGecko;
  SYP?: TartuGecko;
  AOA?: TartuGecko;
  TJS?: TartuGecko;
  VES?: TartuGecko;
  PLN?: TartuGecko;
  SAR?: TartuGecko;
  BAM?: BAM;
  CZK?: TartuGecko;
  GTQ?: TartuGecko;
  KRW?: TartuGecko;
  NPR?: TartuGecko;
  BWP?: TartuGecko;
  PHP?: TartuGecko;
  IQD?: TartuGecko;
  LBP?: TartuGecko;
  BIF?: TartuGecko;
  MNT?: TartuGecko;
  FOK?: TartuGecko;
  PYG?: TartuGecko;
  NOK?: TartuGecko;
  NZD?: TartuGecko;
  GBP?: TartuGecko;
  GGP?: TartuGecko;
  DZD?: TartuGecko;
  PAB?: TartuGecko;
  EGP?: TartuGecko;
  ILS?: TartuGecko;
  YER?: TartuGecko;
  BRL?: TartuGecko;
  NGN?: TartuGecko;
  JPY?: TartuGecko;
  TZS?: TartuGecko;
  KZT?: TartuGecko;
  SHP?: TartuGecko;
  LKR?: TartuGecko;
  MAD?: TartuGecko;
  MMK?: TartuGecko;
  COP?: TartuGecko;
  PEN?: TartuGecko;
  XOF?: TartuGecko;
  KGS?: TartuGecko;
  CNY?: TartuGecko;
  AFN?: TartuGecko;
  TRY?: TartuGecko;
  LRD?: TartuGecko;
  CLP?: TartuGecko;
  KID?: TartuGecko;
  CVE?: TartuGecko;
  JEP?: TartuGecko;
  ISK?: TartuGecko;
  GMD?: TartuGecko;
  VUV?: TartuGecko;
  UYU?: TartuGecko;
  OMR?: TartuGecko;
  SDG?: BAM;
  INR?: TartuGecko;
  LAK?: TartuGecko;
  AWG?: TartuGecko;
  KMF?: TartuGecko;
  XCD?: TartuGecko;
  UZS?: TartuGecko;
  MVR?: TartuGecko;
  GIP?: TartuGecko;
  IDR?: TartuGecko;
  VND?: TartuGecko;
  MYR?: TartuGecko;
  CKD?: TartuGecko;
  SZL?: TartuGecko;
  UGX?: TartuGecko;
  MGA?: TartuGecko;
  FJD?: TartuGecko;
  TWD?: TartuGecko;
  PGK?: TartuGecko;
  RWF?: TartuGecko;
  CDF?: TartuGecko;
  RSD?: TartuGecko;
  KHR?: TartuGecko;
  AED?: TartuGecko;
  BMD?: TartuGecko;
  CUC?: TartuGecko;
  CUP?: TartuGecko;
  HKD?: TartuGecko;
  MUR?: TartuGecko;
  ARS?: TartuGecko;
  NIO?: TartuGecko;
  UAH?: TartuGecko;
  GYD?: TartuGecko;
  TVD?: TartuGecko;
  LSL?: TartuGecko;
  TOP?: TartuGecko;
  GEL?: TartuGecko;
  ETB?: TartuGecko;
  DOP?: TartuGecko;
  BZD?: TartuGecko;
  IMP?: TartuGecko;
  HTG?: TartuGecko;
  BDT?: TartuGecko;
  KWD?: TartuGecko;
  JMD?: TartuGecko;
  RON?: TartuGecko;
  STN?: TartuGecko;
  BSD?: TartuGecko;
  MXN?: TartuGecko;
  TMT?: TartuGecko;
  SRD?: TartuGecko;
  SEK?: TartuGecko;
  BOB?: TartuGecko;
  MZN?: TartuGecko;
  MWK?: TartuGecko;
  ALL?: TartuGecko;
  ZMW?: TartuGecko;
  CHF?: TartuGecko;
  QAR?: TartuGecko;
  SBD?: TartuGecko;
  LYD?: TartuGecko;
  BBD?: TartuGecko;
  HNL?: TartuGecko;
  SOS?: TartuGecko;
  KYD?: TartuGecko;
  KES?: TartuGecko;
  BHD?: TartuGecko;
  GNF?: TartuGecko;
  RUB?: TartuGecko;
  BND?: TartuGecko;
  SGD?: TartuGecko;
  ZWL?: TartuGecko;
  BYN?: TartuGecko;
  THB?: TartuGecko;
  TND?: TartuGecko;
  SLL?: TartuGecko;
  BTN?: TartuGecko;
  FKP?: TartuGecko;
  CAD?: TartuGecko;
  TTD?: TartuGecko;
  HUF?: TartuGecko;
  CRC?: TartuGecko;
  BGN?: TartuGecko;
  AZN?: TartuGecko;
  IRR?: TartuGecko;
}

export interface TartuGecko {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: Record<string, Translation>;
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
