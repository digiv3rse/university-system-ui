import AboutPortal from "@/components/Screen/About/AboutPortal";
import Clients from "@/components/Screen/About/Clients";
import Hero from "@/components/Screen/About/Hero";
import Team from "@/components/Screen/About/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPortal />
      <Clients />
      <Team />
    </>
  );
}
