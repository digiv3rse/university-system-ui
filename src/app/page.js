import CounterHome from "@/components/CounterHome";
import Hero from "@/components/Hero";
import News from "@/components/News";
import TopCollege from "@/components/TopCollege";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div>
      <Hero />
      <Welcome />
      <TopCollege />
      <CounterHome />
      <News />
    </div>
  );
}
