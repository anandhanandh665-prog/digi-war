import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyDigiWar from "@/components/home/WhyDigiWar";
import Process from "@/components/home/Process";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyDigiWar />
        <Process />
      </main>
    </>
  );
}