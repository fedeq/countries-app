"use client";
import {useCountriesStore} from "@/store/countries";

export function useRegionFilter() {
  const regionFilter = useCountriesStore((state) => state.regionFilter);
  const setRegionFilter = useCountriesStore((state) => state.setRegionFilter);

  return {regionFilter, setRegionFilter};
}
