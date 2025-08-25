"use client";
import React, { useState, useEffect } from "react";
import { Drawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const races = [
  "White/Caucasian",
  "Black/African American",
  "Asian",
  "American Indian/Alaska native",
  "Other",
];

const ageCategories = [
  "18-24",
  "25-34",
  "45-54",
  "55-64",
  "65-74",
  "75 and older",
];

interface FiltersSidebarProps {
  open?: boolean;
  onClose?: () => void;
  onChange?: (filters: { age: string; race: string }) => void;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  open = false,
  onClose = () => {},
  onChange = () => {},
}) => {
  const [selectedAge, setSelectedAge] = useState<string>("");
  const [selectedRace, setSelectedRace] = useState<string>("");

  useEffect(() => {
    if (!open) {
      setSelectedAge("");
      setSelectedRace("");
    }
  }, [open]);

  useEffect(() => {
    onChange({ age: selectedAge, race: selectedRace });
  }, [selectedAge, selectedRace, onChange]);

  return (
    <Drawer open={open} onClose={onClose}>
      <div className="flex w-72 flex-col gap-6 p-6">
        <h2 className="mb-2 text-lg font-semibold">Filters</h2>

        {/* Age group filter */}
        <div>
          <label className="mb-2 block text-sm font-medium">Age Group</label>
          <div className="flex flex-col gap-2">
            {ageCategories.map((ageRange) => (
              <div key={ageRange} className="flex items-center px-2 py-1">
                <Checkbox
                  checked={selectedAge === ageRange}
                  onCheckedChange={(checked) => {
                    setSelectedAge(checked ? ageRange : "");
                  }}
                  id={`age-${ageRange}`}
                />
                <label htmlFor={`age-${ageRange}`} className="ml-2 text-sm">
                  {ageRange}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Race filter */}
        <div>
          <label className="mb-2 block text-sm font-medium">Race</label>
          <div className="flex flex-col gap-2">
            {races.map((race) => (
              <div key={race} className="flex items-center px-2 py-1">
                <Checkbox
                  checked={selectedRace === race}
                  onCheckedChange={(checked) => {
                    setSelectedRace(checked ? race : "");
                  }}
                  id={`race-${race}`}
                />
                <label htmlFor={`race-${race}`} className="ml-2 text-sm">
                  {race}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Reset button */}
        <Button
          variant="outline"
          onClick={() => {
            setSelectedAge("");
            setSelectedRace("");
          }}
          className="mt-2"
        >
          Clear Filters
        </Button>
      </div>
    </Drawer>
  );
};

export default FiltersSidebar;
