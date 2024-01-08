"use client";
import {useCountriesStore} from "@/store/countries";

export function useSearchFilter() {
  const searchFilter = useCountriesStore((state) => state.searchFilter);
  const setSearchFilter = useCountriesStore((state) => state.setSearchFilter);

  return {searchFilter, setSearchFilter};
}
