import {CountryCard} from "@/components/CountryCard";
import {FilterSelect} from "@/components/FilterSelect";
import {SearchInput} from "@/components/SearchInput";
import {Input} from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-between">
        <SearchInput className="max-w-56" />
        <FilterSelect />
      </section>
      <section className="mt-8">
        <CountryCard
          capital="Kabul"
          image="https://flagcdn.com/w320/de.png"
          name="Afghanistan"
          population={27657145}
          region="Asia"
        />
      </section>
    </>
  );
}
