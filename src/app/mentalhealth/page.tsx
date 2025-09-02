import Header from "@/components/page/Heading";
import descriptions from "@/data/Descriptions";
import Questions from "@/data/Questions";
import Card from "@/components/page/Card";
import MainReasonsMH from "@/components/charts/mainReasonsMentalHealth";

const page = () => {
  return (
    <div className="my-10">
      <Header
        title="Depression and Mental Health"
        description={descriptions[2]}
        titleSize="text-5xl"
      />
      <div className="mt-10 flex flex-col items-center md:flex-row">
        <div className="mb-10 flex-1 text-center">
          <Header
            title="Survey Question"
            description={Questions[2]}
            titleSize="text-3xl"
          />
        </div>
        <div className="flex flex-1 justify-center">
          <Card width={500} height={500}>
            <MainReasonsMH />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
