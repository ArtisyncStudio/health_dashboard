"use client";

import WrappedTick from "@/components/ui/wrappedTick";
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
  responses: {
    label: "Responses",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function ChartBarDefault() {
  const { filters } = useFilters();

  const { count, loading } = returnData("1", "AirQuality", filters);
  const { count: count1 } = returnData("2", "AirQuality", filters);
  const { count: count2 } = returnData("3", "AirQuality", filters);
  const { count: count3 } = returnData("4", "AirQuality", filters);
  const { count: count4 } = returnData("5", "AirQuality", filters);

  const chartData = [
    { response: "Poor", responses: count },
    {
      response: "Fair",
      responses: count1,
    },
    { response: "Good", responses: count2 },
    { response: "Very Good", responses: count3 },
    {
      response: "Excellent",
      responses: count4,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Air Quality Bar Chart</CardTitle>
        <CardDescription>Air Quality Breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                bottom: 60,
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="response"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                interval={0}
                height={1}
                tick={<WrappedTick />}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="responses" fill="#008da8" radius={8}>
                <LabelList
                  dataKey="responses"
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
          Showing total Air Quality Responses
        </div>
      </CardFooter>
    </Card>
  );
}
