import { MotionConfig } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Leadership } from "./components/Leadership";
import { ReadyMix } from "./components/ReadyMix";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#services" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <ReadyMix />
        <Leadership />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
