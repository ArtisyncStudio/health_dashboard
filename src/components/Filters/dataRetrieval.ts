"use client";
import useCSVData from "@/utils/useCSVData";
import useCodebook from "@/utils/useCodebook";

interface DataRow {
  [key: string]: string | number | undefined;
}

interface LookupTable {
  [key: string]: {
    [value: string]: string;
  };
}

export function returnData(
  option?: string,
  codeName?: string,
  filters?: { age: string[]; gender: string[]; income: string[] },
) {
  const { data, loading, error } = useCSVData("/data/CHM2022.csv") as {
    data: DataRow[];
    loading: boolean;
    error: Error | null;
  };

  const { loading: codebookLoading, error: codebookError } = useCodebook(
    "/data/CHM Codebook.xls",
  ) as {
    lookup: LookupTable;
    loading: boolean;
    error: Error | null;
  };

  if (loading || codebookLoading) {
    return { count: 0, loading: true, error: null };
  }

  if (error || codebookError) {
    return { count: 0, loading: false, error: error || codebookError };
  }

  const filtered = data.filter((row) => {
    const matchesOption = row[codeName!] === option;

    const ageGroups: Record<number, string> = {
      1: "18-24",
      2: "25-34",
      3: "35-44",
      4: "45-54",
      5: "55-64",
      6: "65-74",
      7: "75 and older",
    };

    const genders: Record<number, string> = {
      1: "Male",
      2: "Female",
      98: "Don't Know/No response",
    };

    const incomes: Record<number, string> = {
      1: "$0 to $19,999",
      2: "$20,000 to $49,999",
      3: "$50,000 to 99,999",
      4: "$100,000 and more",
    };

    let matchesGender = true;
    if (filters?.gender && filters.gender.length > 0) {
      const cat = Number(row["ab22sex"]);
      matchesGender = filters.gender.includes(genders[cat]);
    }

    let matchesAgeGroup = true;
    if (filters?.age && filters.age.length > 0) {
      const cat = Number(row["ab19_Cat"]);
      matchesAgeGroup = filters.age.includes(ageGroups[cat]);
    }

    let matchesIncome = true;
    if (filters?.income && filters.income.length > 0) {
      const cat = Number(row["ab21_Cat"]);
      matchesIncome = filters.income.includes(incomes[cat]);
    }

    return matchesOption && matchesGender && matchesAgeGroup && matchesIncome;
  });

  return { count: filtered.length, loading: false, error: null };
}
