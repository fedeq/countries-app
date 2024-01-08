import {create} from "zustand";
import {devtools} from "zustand/middleware";

export const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"] as const;

export type Region = (typeof regions)[number] | "All";

interface CountriesState {
  searchFilter: string;
  setSearchFilter: (search: string) => void;
  regionFilter: Region | undefined;
  setRegionFilter: (region: Region) => void;
}

export const useCountriesStore = create<CountriesState, [["zustand/devtools", CountriesState]]>(
  devtools((set, get) => {
    return {
      searchFilter: "",
      regionFilter: undefined,
      setSearchFilter: (searchFilter) => set({searchFilter}),
      setRegionFilter: (regionFilter) => set({regionFilter}),
    };
  }),
);
