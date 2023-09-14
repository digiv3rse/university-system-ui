import HomeEvents from "@/components/Screen/Home/HomeEvents";
import CounterHome from "@/components/Screen/Home/CounterHome";
import Hero from "@/components/Screen/Home/Hero";
import News from "@/components/Screen/Home/News";
import TopCourses from "@/components/Screen/Home/TopCourses";
import Welcome from "@/components/Screen/Home/Welcome";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <TopCourses />
      <CounterHome />
      <News />
      <HomeEvents />
    </>
  );
}
