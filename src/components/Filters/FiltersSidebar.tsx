"use client";
import React, { useState, useEffect } from "react";
import { Drawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const races = [
  "Asian",
  "Black",
  "Hispanic",
  "White",
  "Native American",
  "Other",
];

const minAge = 18;
const maxAge = 110;

interface FiltersSidebarProps {
  open?: boolean;
  onClose?: () => void;
  onChange?: (filters: { age: number[]; races: string[] }) => void;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  open = false,
  onClose = () => {},
  onChange = () => {},
}) => {
  const [age, setAge] = useState<number[]>([18, 65]);
  const [selectedRace, setSelectedRaces] = useState<string>("");

  useEffect(() => {
    if (!open) {
      setAge([18, 65]);
      setSelectedRaces("");
    }
  }, [open]);

  useEffect(() => {
    onChange({ age, races: selectedRace ? [selectedRace] : [] });
  }, [age, selectedRace, onChange]);

  return (
    <Drawer open={open} onClose={onClose}>
      <div className="flex w-72 flex-col gap-6 p-6">
        <h2 className="mb-2 text-lg font-semibold">Filters</h2>

        <div>
          <label className="mb-2 block text-sm font-medium">Age Range</label>
          <Slider
            value={age}
            onValueChange={setAge}
            min={minAge}
            max={maxAge}
            className="my-2"
          />
          <div className="text-muted-foreground mt-1 text-xs">
            {age[0]} - {age[1]}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Race</label>
          <div className="flex flex-col gap-2">
            {races.map((race) => (
              <div key={race} className="flex items-center px-2 py-1">
                <Checkbox
                  checked={selectedRace === race}
                  onCheckedChange={(checked) => {
                    setSelectedRaces(checked ? race : "");
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

        <Button
          variant="outline"
          onClick={() => {
            setAge([18, 65]);
            setSelectedRaces("");
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
