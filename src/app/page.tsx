import CoachellaPopulation from "@/components/page/CoachellaPopulation";
import React from "react";
import Header from "@/components/page/Heading";
import descriptions from "@/data/Descriptions";

const Home = () => {
  return (
    <div className="w-full flex-wrap overflow-x-hidden">
      <Header
        title="Community Health Survey"
        description={descriptions[0]}
        titleSize="text-5xl"
      />
      <CoachellaPopulation />
    </div>
  );
};

export default Home;
