const groups = [
  {
    label: 'Real-time & rendering',
    items: ['Unity', 'HLSL', 'Real-time simulation', 'Graphics programming'],
  },
  {
    label: 'Languages',
    items: ['C#', 'C++', 'Python', 'SQL'],
  },
  {
    label: '3D & technical art',
    items: ['Houdini', 'Maya', 'Blender'],
  },
  {
    label: 'Systems & tooling',
    items: ['Multithreading', 'Linear algebra', 'Diagnostics & telemetry', 'Version control'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-display text-2xl font-medium text-ink">Skills</h2>

        <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.label} className="bg-panel p-5">
              <h3 className="font-data text-xs text-cyan">{group.label}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
