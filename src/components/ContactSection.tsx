import { Mail, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 px-6 bg-background">
    <div className="container mx-auto max-w-2xl text-center">
      <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-body">
        Get In Touch
      </p>
      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-4">
        Book Us for Events
      </h2>
      <p className="text-foreground/60 mb-10 max-w-md mx-auto">
        Interested in a performance, teaching session, or community event?
        Reach out — we'd love to hear from you.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a
          href="mailto:uhfh.ia@gmail.com"
          className="flex items-center justify-center gap-3 border border-border rounded-xl px-6 py-4 hover:border-gold/50 transition-colors group"
        >
          <Mail size={20} className="text-gold" />
          <span className="text-foreground/80 group-hover:text-gold transition-colors text-sm">
            uhfh.ia@gmail.com
          </span>
        </a>
        <a
          href="tel:+13198321092"
          className="flex items-center justify-center gap-3 border border-border rounded-xl px-6 py-4 hover:border-gold/50 transition-colors group"
        >
          <Phone size={20} className="text-gold" />
          <span className="text-foreground/80 group-hover:text-gold transition-colors text-sm">
            (319) 832-1092
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
