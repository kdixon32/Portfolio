import { withBasePath } from '../lib/basePath';

export default function ProjectCard({ project }) {
  return (
    <article className="panel flex flex-col overflow-hidden">
      <div className="aspect-video border-b border-line bg-base/40">
        {project.video ? (
          <video
            className="h-full w-full object-cover"
            src={withBasePath(project.video)}
            poster={withBasePath(project.poster)}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted">
            Preview coming soon
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-medium text-ink">{project.title}</h3>
          <span className="shrink-0 text-xs text-muted">{project.year}</span>
        </div>
        <p className="text-sm text-cyan">{project.category}</p>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>

        <dl className="mt-2 grid grid-cols-1 gap-y-1 border-t border-line pt-3 font-data text-xs">
          {project.readouts.map((r) => (
            <div key={r.label} className="flex justify-between gap-3">
              <dt className="text-muted">{r.label}</dt>
              <dd className="text-ink">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
