"use client";
import {Region} from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useRegionFilter} from "@/hooks/useRegionFilter";

export function RegionSelect() {
  const {regionFilter, setRegionFilter} = useRegionFilter();
  const regions = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania];

  return (
    <Select value={regionFilter} onValueChange={setRegionFilter}>
      <SelectTrigger className="w-full md:w-[180px]">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">All</SelectItem>
        {regions.map((region) => (
          <SelectItem key={region} value={region}>
            {region}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
