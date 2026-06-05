import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative transition-colors duration-300">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <CaseStudies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
