import { Heart, Music } from "lucide-react";

const MissionSection = () => (
  <section id="mission" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl text-center">
      <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-body">
        Who We Are
      </p>
      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-8">
        Where Humanity Meets Music
      </h2>
      <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
        We use music as a path for compassion, education, and service. Our
        organization bridges humanitarian outreach with musical growth —
        performing at hospitals, elder centers, community events, and wherever
        comfort and connection are needed most.
      </p>

      <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <div className="bg-card rounded-xl p-8 border border-border text-left">
          <Heart className="text-gold mb-4" size={28} />
          <h3 className="font-display text-xl font-semibold mb-2">
            Humanity Unit
          </h3>
          <p className="text-foreground/60 font-body leading-relaxed text-sm">
            Community partnerships, care-centered outreach at hospitals, hospice,
            elder centers, and special-needs programs.
          </p>
        </div>
        <div className="bg-card rounded-xl p-8 border border-border text-left">
          <Music className="text-gold mb-4" size={28} />
          <h3 className="font-display text-xl font-semibold mb-2">
            Music Unit
          </h3>
          <p className="text-foreground/60 font-body leading-relaxed text-sm">
            School of Music, United Harmonies Band (UHB), mentoring, and
            performance across vocal, violin, piano, keyboard & percussion.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MissionSection;
