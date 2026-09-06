import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import AISection from "@/components/AISection";
import CreativeSection from "@/components/CreativeSection";
import TeklySection from "@/components/TeklySection";
import Lab from "@/components/Lab";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Projects />
      <AISection />
      <CreativeSection />
      <TeklySection />
      <Lab />
      <CurrentlyBuilding />
      <Resume />
      <Contact />
    </>
  );
}
