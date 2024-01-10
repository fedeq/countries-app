"use client";
import Link from "next/link";

import {useCountries} from "@/hooks/useCountries";

import {CountryCard} from "./CountryCard";

export function CountryGrid() {
  const {filteredCountries} = useCountries();

  return (
    // <section className="grid grid-cols-1 items-center justify-center gap-4 py-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4">
    <section className="grid grid-cols-[repeat(auto-fill,minmax(264px,1fr))] items-stretch justify-center gap-4 py-8">
      {filteredCountries.map((country) => (
        <Link key={country.cca3} href={`/countries/${country.cca3}`}>
          <CountryCard
            key={country.cca3}
            capital={country.capital?.[0] || ""}
            image={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
          />
        </Link>
      ))}
    </section>
  );
}
