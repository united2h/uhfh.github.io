const stats = [
  { number: "10+", label: "Public Events / Year" },
  { number: "6", label: "Instruments Taught" },
  { number: "10+", label: "Community Partners" },
  { number: "4", label: "Care Settings Served" },
];

const ImpactSection = () => (
  <section id="pillars" className="py-24 px-6 bg-warm-surface">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-16">
        <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-body">
          Our Impact
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-4">
          Music with Purpose
        </h2>
        <p className="text-foreground/60 max-w-xl mx-auto">
          From hospital bedsides to outdoor stages — we bring music wherever
          compassion is needed.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-card border border-border rounded-xl p-6 text-center"
          >
            <p className="text-3xl sm:text-4xl font-display font-bold gold-text-gradient mb-2">
              {s.number}
            </p>
            <p className="text-foreground/60 text-sm font-body">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid sm:grid-cols-3 gap-6 text-center">
        {[
          {
            title: "Structured Training",
            desc: "Consistent musical learning and guided practice for students of all levels.",
          },
          {
            title: "Peer Mentoring",
            desc: "Experienced students coach performers, building teamwork and leadership.",
          },
          {
            title: "Care-Centered Service",
            desc: "Hospice, elder care, special kids, and new mothers receive music as comfort.",
          },
        ].map((item) => (
          <div key={item.title} className="p-4">
            <h3 className="font-display text-lg font-semibold mb-2 text-gold">
              {item.title}
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
