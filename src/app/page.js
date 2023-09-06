import Blogs from "@/components/Screen/Home/Blogs";
import CounterHome from "@/components/Screen/Home/CounterHome";
import Hero from "@/components/Screen/Home/Hero";
import News from "@/components/Screen/Home/News";
import TopCollege from "@/components/Screen/Home/TopCollege";
import Welcome from "@/components/Screen/Home/Welcome";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <TopCollege />
      <CounterHome />
      <News />
      <Blogs />
    </>
  );
}
