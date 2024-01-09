import {CountryCard} from "@/components/CountryCard";
import {CountryGrid} from "@/components/CountryGrid";
import {RegionSelect} from "@/components/RegionSelect";
import {SearchInput} from "@/components/SearchInput";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-between gap-4 sm:flex-row md:items-center">
        <SearchInput className="w-full md:max-w-56" />
        <RegionSelect />
      </section>
      <CountryGrid />
    </>
  );
}
