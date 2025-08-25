"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { useState } from "react";
import FiltersSidebar from "../Filters/FiltersSidebar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { returnData } from "../Filters/dataRetrieval";

const chartConfig = {
  desktop: {
    label: "Responses",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function ChartBarDefault() {
  // keep track of filters here
  const [filters, setFilters] = useState<{ age: string; race: string }>({
    age: "",
    race: "",
  });

  // pass filters into your hook
  const { count, loading } = returnData("1", "aa4", filters);
  const { count: count1 } = returnData("2", "aa4", filters);

  const chartData = [
    { response: "No", desktop: count1 },
    { response: "Yes", desktop: count },
  ];

  return (
    <>
      {/* Sidebar passes filters back to here */}
      <FiltersSidebar onChange={setFilters} />

      <Card>
        <CardHeader>
          <CardTitle>Insurance Bar Chart</CardTitle>
          <CardDescription>Coverage breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="response"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="desktop" fill="#0022FF" radius={8} />
              </BarChart>
            </ChartContainer>
          )}
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="text-muted-foreground leading-none">
            Showing total Health Coverage Responses
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
