import Header from "@/components/page/Heading";
import descriptions from "@/data/Descriptions";

const page = () => {
  return (
    <div className="my-10">
      <Header
        title="Air Quality"
        description={descriptions[3]}
        titleSize="text-5xl"
      />
    </div>
  );
};

export default page;
