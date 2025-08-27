// context/FiltersContext.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

interface Filters {
  age: string;
  race: string;
}

interface FiltersContextType {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<Filters>({ age: "", race: "" });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const ctx = useContext(FiltersContext);
  if (!ctx) throw new Error("useFilters must be used within a FiltersProvider");
  return ctx;
};
