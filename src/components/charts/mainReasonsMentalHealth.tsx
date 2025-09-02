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

  const { count, loading } = returnData("1", "ac25g", filters);
  const { count: count1 } = returnData("2", "ac25g", filters);

  const chartData = [
    { response: "Yes", responses: count },
    {
      response: "No",
      responses: count1,
    },
    // { response: "Became divorced/ or separated", responses: count2 },
    // { response: "Spouse or parent died", responses: count3 },
    // {
    //   response: "Became ineligible because of age or left school",
    //   responses: count4,
    // },
    // {
    //   response: "Employer doesn't offer or stopped offering coverage",
    //   responses: count5,
    // },
    // { response: "Became ineligible (age/school)", responses: count6 },
    // { response: "Employer stopped offering coverage", responses: count7 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mental Health Bar Chart</CardTitle>
        <CardDescription>Mental Problem breakdown</CardDescription>
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
                bottom: 0,
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
                height={80}
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
          Showing total Mental Health Responses
        </div>
      </CardFooter>
    </Card>
  );
}
