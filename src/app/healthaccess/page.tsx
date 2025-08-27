import Header from "@/components/page/Heading";
import descriptions from "@/data/Descriptions";
import Bargraph from "@/components/charts/bargraph";
import Card from "@/components/page/Card";
import Questions from "@/data/Questions";

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
            description={Questions[0]}
            titleSize="text-3xl"
          />
        </div>
        <div className="flex flex-1 justify-center">
          <Card width={500} height={500}>
            <Bargraph />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
