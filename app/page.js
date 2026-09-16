import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProjectGrid />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
