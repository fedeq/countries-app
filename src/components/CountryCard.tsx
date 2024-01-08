import {Card} from "./ui/card";

interface CountryCardProps {
  image: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export function CountryCard({image, name, population, region, capital}: CountryCardProps) {
  return (
    <Card className="h-[336px] w-[264px] cursor-pointer border-0 shadow-sm transition-none hover:shadow-md">
      <img alt={name} src={image} />
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
