"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
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

import { returnData } from "@/components/Filters/dataRetrieval";
import { useFilters } from "@/context/FiltersContext";

const chartConfig = {
  desktop: {
    label: "Responses",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function ChartBarDefault() {
  const { filters } = useFilters();

  const { count, loading } = returnData("1", "aa4", filters);
  const { count: count1 } = returnData("2", "aa4", filters);

  const chartData = [
    { response: "No", percentage: count1 },
    { response: "Yes", percentage: count },
  ];

  return (
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
            <BarChart accessibilityLayer data={chartData} margin={{ top: 20 }}>
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
              <Bar dataKey="percentage" fill="#008da8" radius={8}>
                <LabelList
                  dataKey="percentage"
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
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
  );
}
