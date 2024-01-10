"use client";
import {useEffect, useMemo} from "react";

import {useCountriesStore} from "@/store/countries";

export function useCountry({code}: {code: string}) {
  const countries = useCountriesStore((state) => state.countries);
  const fetchCountries = useCountriesStore((state) => state.fetchCountries);

  const country = useMemo(() => {
    if (!countries.length) {
      return null;
    }

    return countries.find((country) => country.cca3 === code);
  }, [countries, code]);

  useEffect(() => {
    if (!countries.length) {
      fetchCountries();
    }
  }, [countries, fetchCountries]);

  return {country};
}
