import HelpHero from "@/components/Screen/Help/HelpHero";
import PopularArticle from "@/components/Screen/Help/PopularArticle";
import RecommendedTopic from "@/components/Screen/Help/RecommendedTopic";
import SupportCards from "@/components/Screen/Help/SupportCards";
import React from "react";

const HelpCenterPage = () => {
  return (
    <>
      <HelpHero />
      <RecommendedTopic />
      <PopularArticle />
      <SupportCards />
    </>
  );
};

export default HelpCenterPage;
