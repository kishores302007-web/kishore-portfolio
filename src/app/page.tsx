import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import BeyondAcademics from "@/components/BeyondAcademics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <BeyondAcademics />
      <Contact />
      <Footer />
    </main>
  );
}