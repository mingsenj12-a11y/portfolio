import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b]">
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
