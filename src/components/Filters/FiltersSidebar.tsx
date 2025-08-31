"use client";
import React, { useState, useEffect } from "react";
import { Drawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useFilters } from "@/context/FiltersContext";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const genders = ["Male", "Female", "Don't Know/No response"];

const ageCategories = [
  "18-24",
  "25-34",
  "35-44",
  "45-54",
  "55-64",
  "65-74",
  "75 and older",
];

const incomes = [
  "$0 to $19,999",
  "$20,000 to $49,999",
  "$50,000 to 99,999",
  "$100,000 and more",
]

interface FiltersSidebarProps {
  open?: boolean;
  onClose?: () => void;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({
  open = false,
  onClose = () => {},
}) => {
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedIncomes, setSelectedIncomes] = useState<string[]>([]);

  const { setFilters } = useFilters();

  useEffect(() => {
    setFilters({ age: selectedAges, gender: selectedGenders, income: selectedIncomes });
  }, [selectedAges, selectedGenders, selectedIncomes, setFilters]);

  const toggleSelection = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setSelected(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value],
    );
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <div className="flex w-72 flex-col p-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer">
              Age Group
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2">
                {ageCategories.map((ageRange) => (
                  <div key={ageRange} className="flex items-center px-2 py-1">
                    <Checkbox
                      checked={selectedAges.includes(ageRange)}
                      onCheckedChange={() =>
                        toggleSelection(ageRange, selectedAges, setSelectedAges)
                      }
                      id={`age-${ageRange}`}
                      className="cursor-pointer"
                    />
                    <label htmlFor={`age-${ageRange}`} className="ml-2 text-sm">
                      {ageRange}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer">
              Gender
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2">
                {genders.map((gender) => (
                  <div key={gender} className="flex items-center px-2 py-1">
                    <Checkbox
                      checked={selectedGenders.includes(gender)}
                      onCheckedChange={() =>
                        toggleSelection(
                          gender,
                          selectedGenders,
                          setSelectedGenders,
                        )
                      }
                      id={`gender-${gender}`}
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor={`gender-${gender}`}
                      className="ml-2 text-sm"
                    >
                      {gender}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="cursor-pointer">
              Income
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2">
                {incomes.map((income) => (
                  <div key={income} className="flex items-center px-2 py-1">
                    <Checkbox
                      checked={selectedIncomes.includes(income)}
                      onCheckedChange={() =>
                        toggleSelection(
                          income,
                          selectedIncomes,
                          setSelectedIncomes,
                        )
                      }
                      id={`Income-${income}`}
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor={`Income-${income}`}
                      className="ml-2 text-sm"
                    >
                      {income}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button
          variant="outline"
          onClick={() => {
            setSelectedAges([]);
            setSelectedGenders([]);
            setSelectedIncomes([]);
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
