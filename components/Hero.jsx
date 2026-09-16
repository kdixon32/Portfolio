import { withBasePath } from '../lib/basePath';

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <p className="font-data text-sm text-cyan">Real-time graphics / simulation engineering</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
            I build systems that run in real time and hold up under scrutiny.
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-muted">
            Software engineer moving toward technical art and simulation
            engineering — real-time rendering, shaders, and physically
            grounded systems, built with the same rigor as production
            software.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#work"
              className="border border-amber px-5 py-2.5 text-sm font-medium text-amber transition-colors hover:bg-amber hover:text-base"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-muted"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="panel aspect-video overflow-hidden">
          {/*
            Swap this for your actual demo clip once it's in
            /public/projects/xray-simulation/clip.mp4 — see
            public/projects/README.md for details.
          */}
          <video
            className="h-full w-full object-cover"
            src={withBasePath('/projects/xray-simulation/clip.mp4')}
            poster={withBasePath('/projects/xray-simulation/poster.jpg')}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
