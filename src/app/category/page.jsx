import ChooseCategory from "@/components/Screen/Category/ChooseCategory";
import ChooseLanguage from "@/components/Screen/Category/ChooseLanguage";
import HeadingHero from "@/components/Screen/Category/HeadingHero";
import Reward from "@/components/Screen/Category/Reward";
import React from "react";

const CategoryPage = () => {
  return (
    <>
      <HeadingHero />
      <ChooseCategory />
      <ChooseLanguage />
      <Reward />
    </>
  );
};

export default CategoryPage;
