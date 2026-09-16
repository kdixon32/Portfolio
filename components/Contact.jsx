export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-display text-2xl font-medium text-ink">Contact</h2>
        <p className="mt-3 max-w-prose text-sm text-muted">
          Open to Real-Time Simulation, Graphics Programming, and Technical
          Art roles.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <a href="mailto:kielandixon@gmail.com" className="text-amber hover:underline">
            Email Me
          </a>
          <a
            href="https://github.com/kdixon32"
            className="text-ink hover:text-amber"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kielan-d"
            className="text-ink hover:text-amber"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-line px-6 py-6 text-center text-xs text-muted">
        Built by Kielan Dixon.
      </div>
    </section>
  );
}
