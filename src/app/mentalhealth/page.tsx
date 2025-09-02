import Header from "@/components/page/Heading";
import descriptions from "@/data/Descriptions";
import { ChartPieLabel } from "@/components/charts/mentalHealthPie";
import Questions from "@/data/Questions";

const page = () => {
  return (
    <div className="my-10">
      <Header
        title="Depression and Mental Health"
        description={descriptions[2]}
        titleSize="text-5xl"
      />
      <div className="mt-10 items-center">
        <div className="mb-10 flex-1 text-center">
          <Header
            title="Survey Question"
            description={Questions[3]}
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
