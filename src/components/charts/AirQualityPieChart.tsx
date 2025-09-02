"use client";

import { Pie, PieChart } from "recharts";
import { useFilters } from "@/context/FiltersContext";
import { returnData } from "@/components/Filters/dataRetrieval";

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

export const description =
  "A pie chart with responses to mental health and suicide";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function ChartPieLabel() {
  const { filters } = useFilters();

  const { count: count1, loading: loading1 } = returnData(
    "1",
    "PoorAir",
    filters,
  );
  const { count: count2, loading: loading2 } = returnData(
    "2",
    "PoorAir",
    filters,
  );
  const { count: count3, loading: loading3 } = returnData(
    "3",
    "PoorAir",
    filters,
  );
  const { count: count4, loading: loading4 } = returnData(
    "4",
    "PoorAir",
    filters,
  );
  const { count: count5, loading: loading5 } = returnData(
    "5",
    "PoorAir",
    filters,
  );

  const isLoading = loading1 || loading2 || loading3 || loading4 || loading5;

  const chartData = [
    {
      response:
        "Not applicable-I dont't do outdoor activites in my neighborhood",
      responses: count1 ?? 0,
      fill: "#00a1df",
    },
    { response: "No, never", responses: count2 ?? 0, fill: "#002e6d" },
    {
      response: "Yes, several times a year",
      responses: count3 ?? 0,
      fill: "#95d600",
    },
    {
      response: "Yes, several times a month",
      responses: count4 ?? 0,
      fill: "#440099",
    },
    {
      response: "Yes, several times a week",
      responses: count5 ?? 0,
      fill: "#008da8",
    },
  ];

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart</CardTitle>
        <CardDescription>2022 CHM Data</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div
              aria-hidden
              className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"
            />
            <span className="sr-only">Loading chart data</span>
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square h-full w-full pb-0"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="responses"
                label
                nameKey="response"
              />
            </PieChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Data Provided by Harc's 2022 Coachella Valley Community Health Survey
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total number of responses
        </div>
      </CardFooter>
    </Card>
  );
}
