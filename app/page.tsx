import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import Skills from '@/app/components/Skills';
import Contact from '@/app/components/Contact';

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-indigo-500 selection:text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}