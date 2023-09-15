import BDetailsHero from "@/components/Screen/Blog/BlogDetails/BDetailsHero";
import BDetailsVideo from "@/components/Screen/Blog/BlogDetails/BDetailsVideo";
import Comments from "@/components/Screen/Blog/BlogDetails/Comments";
import RelatedBlogs from "@/components/Screen/Blog/BlogDetails/RelatedBlogs";
import React from "react";

const BlogDetailsPage = () => {
  return (
    <>
      <BDetailsHero />
      <BDetailsVideo />
      <hr className="my-10" />
      <Comments />
      <RelatedBlogs />
    </>
  );
};

export default BlogDetailsPage;
