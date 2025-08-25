// context/FiltersContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Filters = {
  age: string;
  race: string;
};

type FiltersContextType = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>({ age: "", race: "" });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
}
