"use client";
import type {BAM, Country, TartuGecko} from "@/types";

import {useRouter} from "next/navigation";
import Link from "next/link";

import {useCountry} from "@/hooks/useCountry";
import {Button} from "@/components/ui/button";
import {LeftArrow} from "@/components/icons/LeftArrow";
import {getCountryByCode} from "@/store/countries";

function getCurrencyNames(country: Country) {
  if (!country.currencies) {
    return [];
  }

  return Object.values(country.currencies).map((currency: TartuGecko | BAM) => currency.name);
}

function getLanguageNames(country: Country) {
  if (!country.languages) {
    return [];
  }

  return Object.values(country.languages);
}

export default function CountryDetailsPage({params}: {params: {id: string}}) {
  const {country} = useCountry({code: params.id});
  const router = useRouter();

  if (!country) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  const currencies = getCurrencyNames(country);
  const languages = getLanguageNames(country);
  const borderCountries = country.borders?.map((border) => getCountryByCode(border));

  return (
    <>
      <Button className="px-6 shadow-md" type="button" onClick={() => router.back()}>
        <LeftArrow className="mr-2" />
        Back
      </Button>
      <div className="grid h-[500px] grid-cols-1 items-center justify-between gap-32 py-8 lg:grid-cols-2">
        <img alt={country.name.common} className="h-auto w-full" src={country.flags.png} />
        <div>
          <h1 className="py-8 text-3xl">
            <strong>{country.name.common}</strong>
          </h1>
          <section className="grid grid-cols-1 gap-20 md:grid-cols-2">
            <div className="flex flex-col gap-3 ">
              <div>
                <span>
                  <strong>Native Name:</strong>{" "}
                </span>
                {country.name.official}
              </div>
              <div>
                <span>
                  <strong>Population:</strong>{" "}
                </span>
                {country.population}
              </div>
              <div>
                <span>
                  <strong>Region:</strong>{" "}
                </span>
                {country.region}
              </div>
              <div>
                <span>
                  <strong>Sub Region:</strong>{" "}
                </span>
                {country.subregion}
              </div>
              <div>
                <span>
                  <strong>Capital:</strong>{" "}
                </span>
                {country.capital}
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <div>
                <span>
                  <strong>Top Level Domain:</strong>{" "}
                </span>
                {country.tld}
              </div>
              <div>
                <span>
                  <strong>Currencies:</strong>{" "}
                </span>
                {currencies.join(", ")}
              </div>
              <div>
                <span>
                  <strong>Languages:</strong>{" "}
                </span>
                {languages.join(", ")}
              </div>
            </div>
          </section>
          <section>
            <h2 className="py-4 text-xl">
              <strong>Border Countries:</strong>
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {borderCountries?.map((border) => (
                <Link
                  key={border?.cca3}
                  className="rounded-md bg-primary px-6 py-2 text-center shadow-md transition-all hover:shadow-lg"
                  href={`/countries/${border?.cca3}`}
                >
                  {border?.name.common}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
