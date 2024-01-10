import type {Country, Region} from "@/types";

import {create} from "zustand";
import {devtools} from "zustand/middleware";

import {fetchCountries} from "@/api";

interface CountriesState {
  countries: Country[];
  searchFilter: string;
  setSearchFilter: (search: string) => void;
  regionFilter: Region | "All" | undefined;
  setRegionFilter: (region: Region | "All") => void;
  fetchCountries: () => Promise<void>;
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

export function getCountryByCode(code: string) {
  const countries = useCountriesStore.getState().countries;

  return countries.find((country) => country.cca3 === code);
}
