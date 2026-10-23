import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { CodingProfiles } from "@/components/sections/CodingProfiles";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { MouseGlow } from "@/components/ui/MouseGlow";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Skills />
        <CodingProfiles />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
