"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlidersHorizontal, Search, ChevronDown } from "lucide-react";

const FilterBar = () => {
  const [sortOption, setSortOption] = useState("trending");

  return (
    <div className=" space-y-6 pb-6 border-b border-gray-200 ">
      {/* Top Row: Filters and Sorting */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Side: Filter and Search */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
          {/* Filter Button */}
          <Button
            variant="outline"
            className="h-12 w-full sm:w-auto justify-center sm:justify-start text-base hover:border-primary text-primary hover:bg-primary/5 hover:text-primary ring-2 ring-primary/20"
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filter
            <span className="ml-3 bg-primary/10 text-primary text-xs rounded-sm h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>

          {/* Search Input */}
          <div className="relative w-full flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="text"
              defaultValue="UI/UX Design"
              className="h-12 w-full rounded-md border-gray-300 pl-12 text-base"
            />
          </div>
        </div>

        {/* Right Side: Sorting Dropdown */}
        <div className="flex items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex h-12 items-center gap-2 text-sm font-medium text-gray-500 hover:bg-gray-100 w-full sm:w-auto"
              >
                Sort by:
                <span className="font-semibold capitalize text-dark-text">
                  {sortOption.replace("-", " ")}
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup
                value={sortOption}
                onValueChange={setSortOption}
              >
                <DropdownMenuRadioItem value="trending">
                  Trending
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="most-popular">
                  Most Popular
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="newest">
                  Newest
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Bottom Row: Suggestions and Results */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
          <span>Suggestion:</span>
          <a href="#" className="text-primary hover:underline">
            user interface
          </a>
          <a href="#" className="text-primary hover:underline">
            user experience
          </a>
          <a href="#" className="text-primary hover:underline">
            web design
          </a>
          <a href="#" className="text-primary hover:underline">
            interface
          </a>
          <a href="#" className="text-primary hover:underline">
            app
          </a>
        </div>
        <p className="text-sm text-gray-600 flex-shrink-0">
          <span className="font-bold text-dark-text">3,145,684</span> results
          find for “ui/ux design”
        </p>
      </div>
    </div>
  );
};

export default FilterBar;
