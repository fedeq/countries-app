import type {Country} from "./types";

export async function fetchCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = (await res.json()) as Country[];

  return countries;
}

export async function fetchCountry(code: string) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const countries = (await res.json()) as Country[];

  return countries[0];
}
