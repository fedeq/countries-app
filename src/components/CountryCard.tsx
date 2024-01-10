import {Card} from "./ui/card";

interface CountryCardProps {
  image: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export default function CountryCard({image, name, population, region, capital}: CountryCardProps) {
  return (
    <Card className="h-full cursor-pointer border-0 shadow-sm transition-all hover:shadow-md">
      <img alt={name} className="w-full" loading="lazy" src={image} />
      <div className="p-6">
        <h2 className="mb-4 text-lg font-semibold">{name}</h2>
        <p className="mb-2 text-sm">
          <span className="font-semibold">Population:</span> {population}
        </p>
        <p className="mb-2 text-sm">
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </Card>
  );
}

export function CountryCardSkeleton() {
  return (
    <Card className="h-full cursor-pointer border-0 shadow-sm transition-all hover:shadow-md">
      <div className="flex h-48 w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
        <svg
          aria-hidden="true"
          className="h-10 w-10 text-gray-200 dark:text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="p-6">
        <div className="mb-4 h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
        <div className="mb-4 h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />

        <div className="mb-4 h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />

        <div className="mb-4 h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>
    </Card>
  );
}
