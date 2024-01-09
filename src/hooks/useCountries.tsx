"use client";
import {useEffect, useMemo} from "react";

import {useCountriesStore} from "@/store/countries";

export function useCountries() {
  const countries = useCountriesStore((state) => state.countries);
  const fetchCountries = useCountriesStore((state) => state.fetchCountries);
  const searchFilter = useCountriesStore((state) => state.searchFilter);
  const regionFilter = useCountriesStore((state) => state.regionFilter);

  const filteredCountries = useMemo(() => {
    if (!countries.length) {
      return [];
    }

    return countries.filter((country) => {
      if (regionFilter && regionFilter != "All" && country.region !== regionFilter) {
        return false;
      }

      if (searchFilter) {
        return (
          country.name.common.toLowerCase().includes(searchFilter.toLowerCase()) ||
          country.name.official.toLowerCase().includes(searchFilter.toLowerCase())
        );
      }

      return true;
    });
  }, [countries, regionFilter, searchFilter]);

  useEffect(() => {
    if (!countries.length) {
      fetchCountries();
    }
  }, [countries, fetchCountries]);

  return {filteredCountries};
}
