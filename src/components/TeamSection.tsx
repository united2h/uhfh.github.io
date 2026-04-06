const officers = [
  { name: "Sahana N", role: "Founder & Officer", instrument: "Keyboard" },
  { name: "Suhani N", role: "Officer & Mentor", instrument: "Violin" },
  { name: "Harikesh T", role: "Officer & Mentor", instrument: "Sax" },
  { name: "Pranav K", role: "Student Mentor", instrument: "Drums" },
  { name: "Subu N", role: "Adult Mentor", instrument: "Leadership" },
];

const TeamSection = () => (
  <section id="team" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl text-center">
      <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-body">
        Our People
      </p>
      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-12">
        Led by Passion
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {officers.map((p) => (
          <div
            key={p.name}
            className="bg-card border border-border rounded-xl p-5 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
              {p.name[0]}
            </div>
            <h3 className="font-display text-sm font-semibold">{p.name}</h3>
            <p className="text-foreground/50 text-xs mt-1">{p.role}</p>
            <p className="text-gold text-xs mt-1">{p.instrument}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
