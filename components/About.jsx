export default function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-display text-2xl font-medium text-ink">About</h2>
        <div className="mt-5 max-w-prose space-y-4 text-sm leading-relaxed text-muted">
          <p>
            I'm a software engineer working toward real-time simulation and
            technical art roles, building on a background in production
            software and diagnostics. My current focus is real-time
            rendering, shaders, and the math underneath physical simulation.
          </p>
          <p>
            Outside of work, I'm building out small projects that stay in a
            simulation-engineer headspace — from real-time X-ray training
            software to systems-driven game design — while developing the
            art side of technical art to sit alongside the engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
