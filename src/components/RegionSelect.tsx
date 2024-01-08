"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useRegionFilter} from "@/hooks/useRegionFilter";
import {regions} from "@/store/countries";

export function RegionSelect() {
  const {regionFilter, setRegionFilter} = useRegionFilter();

  return (
    <Select value={regionFilter} onValueChange={setRegionFilter}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent>
        {regions.map((region) => (
          <SelectItem key={region} value={region}>
            {region}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
