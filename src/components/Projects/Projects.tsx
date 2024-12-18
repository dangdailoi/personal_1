import { Section } from '../common/Section';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data';

export function Projects() {
  return (
    <Section 
      id="projects" 
      title="Featured Projects"
      subtitle="Explore some of my recent work that showcases my skills and passion for creating innovative solutions."
      className="bg-gray-50"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}