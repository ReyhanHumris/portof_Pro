import FuturisticBackground from "@/components/FuturisticBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FuturisticBackground />
      <Navbar />
      <div className="relative z-[1] min-h-screen">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Process />
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
