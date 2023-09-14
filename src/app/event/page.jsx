import Pagination from "@/components/Common/Pagination";
import Filters from "@/components/Screen/Courses/Filters";
import EHero from "@/components/Screen/Event/EHero";
import ESubscribe from "@/components/Screen/Event/ESubscribe";
import Events from "@/components/Screen/Event/Events";
import React from "react";

const EventPage = () => {
  return (
    <>
      <EHero />
      <Filters />
      <Events />
      <Pagination />
      <ESubscribe />
    </>
  );
};

export default EventPage;
