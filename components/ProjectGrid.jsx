import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-display text-2xl font-medium text-ink">Work</h2>
      <p className="mt-2 max-w-prose text-sm text-muted">
        A running set of real-time and simulation projects. Each one links a
        short clip to the technical problem it was solving.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
