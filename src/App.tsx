import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects/Projects';
import { Awards } from './components/Awards/Awards';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Awards />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Dai Loi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;