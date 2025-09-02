import Header from "@/components/page/Heading";
import descriptions from "@/data/Descriptions";
import AirQualityBarChart from "@/components/charts/AirQualityBarChart";
import Card from "@/components/page/Card";
import Questions from "@/data/Questions";
import { ChartPieLabel } from "@/components/charts/AirQualityPieChart";

const page = () => {
  return (
    <div className="mb-10">
      <Header
        title="Healthcare Access"
        description={descriptions[1]}
        titleSize="text-5xl"
      />
      <div className="mt-10 flex flex-col items-center md:flex-row">
        <div className="mb-10 flex-1 text-center">
          <Header
            title="Survey Question"
            description={Questions[4]}
            titleSize="text-3xl"
          />
        </div>
        <div className="flex flex-1 justify-center">
          <Card width={500} height={500}>
            <AirQualityBarChart />
          </Card>
        </div>
      </div>
      <div className="mt-10 items-center">
        <div className="mb-10 flex-1 text-center">
          <Header
            title="Survey Question"
            description={Questions[5]}
            titleSize="text-3xl"
          />
        </div>
        <div className="flex flex-1 justify-center">
          {/* Was wrapped in a card but took it off cus it looked weird, perhaps we can add two piecharts and two questions and
              have a grid of 2 by 2 with the questions on top and the charts on the bottom */}
          <ChartPieLabel />
        </div>
      </div>
    </div>
  );
};

export default page;
