import {FilterSelect} from "@/components/FilterSelect";
import {SearchInput} from "@/components/SearchInput";
import {Input} from "@/components/ui/input";

export default function Home() {
  return (
    <section className="flex items-center justify-between">
      <SearchInput className="max-w-56" />
      <FilterSelect />
    </section>
  );
}
