import Pagination from "@/components/Common/Pagination";
import BHero from "@/components/Screen/Blog/BHero";
import Blogs from "@/components/Screen/Blog/Blogs";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <BHero />
      <Blogs />
      <Pagination />
    </>
  );
};

export default BlogPage;
