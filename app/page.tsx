import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CustomCursor from "@/components/canvas/CustomCursor";
import Scene from "@/components/canvas/Scene";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white overflow-x-hidden">
      <CustomCursor />
      <Scene />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
