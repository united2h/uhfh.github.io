import { Calendar, MapPin, Clock } from "lucide-react";

const EventSection = () => (
  <section id="event" className="py-24 px-6 bg-warm-surface">
    <div className="container mx-auto max-w-3xl text-center">
      <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-body">
        Next Event
      </p>
      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-10">
        Come See Us Perform
      </h2>

      <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 text-left max-w-lg mx-auto">
        <h3 className="font-display text-xl font-semibold mb-6 text-gold">
          Community Music Program
        </h3>
        <div className="space-y-4 text-foreground/70 text-sm">
          <div className="flex items-center gap-3">
            <Calendar size={18} className="text-gold shrink-0" />
            <span>Saturday, May 1, 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-gold shrink-0" />
            <span>5:00 PM – 6:30 PM</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-gold shrink-0" />
            <span>1600 West Main Street, Robins, IA</span>
          </div>
        </div>
        <p className="text-foreground/50 text-sm mt-6 leading-relaxed">
          Open to all ages. Student musicians performing multicultural
          selections with compassion and excellence.
        </p>
      </div>
    </div>
  </section>
);

export default EventSection;
