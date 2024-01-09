"use client";
import * as React from "react";

import {cn} from "@/lib/utils";
import {useSearchFilter} from "@/hooks/useSearchFilter";

import {SearchIcon} from "./icons/SearchIcon";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, ...props}, ref) => {
    const {searchFilter, setSearchFilter} = useSearchFilter();

    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md bg-primary pl-3 text-sm shadow-md ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className,
        )}
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
        <input
          ref={ref}
          type={type}
          {...props}
          className="w-full bg-inherit p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Search for a country"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
      </div>
    );
  },
);

SearchInput.displayName = "SearchInput";

export {SearchInput};
