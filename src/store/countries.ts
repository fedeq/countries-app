import type {Country, Region} from "@/types";

import {create} from "zustand";
import {devtools} from "zustand/middleware";

interface CountriesState {
  countries: Country[];
  searchFilter: string;
  setSearchFilter: (search: string) => void;
  regionFilter: Region | "All" | undefined;
  setRegionFilter: (region: Region | "All") => void;
  fetchCountries: () => Promise<void>;
}

async function fetchCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = (await res.json()) as Country[];

  return countries;
}

export const useCountriesStore = create<CountriesState, [["zustand/devtools", CountriesState]]>(
  devtools((set, get) => {
    return {
      countries: [] as Country[],
      searchFilter: "",
      regionFilter: undefined,
      setSearchFilter: (searchFilter) => set({searchFilter}),
      setRegionFilter: (regionFilter) => set({regionFilter}),

      fetchCountries: async () => {
        const currentCountries = get().countries;

        if (currentCountries.length) return;

        set({countries: await fetchCountries()});
      },
    };
  }),
);
