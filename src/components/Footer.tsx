const Footer = () => (
  <footer className="border-t border-border py-12 px-6 bg-warm-bg">
    <div className="container mx-auto max-w-4xl text-center">
      <h3 className="font-display text-lg font-semibold text-gold mb-2">
        United Harmonies for Humanity
      </h3>
      <p className="text-foreground/50 text-sm mb-1">
        Also known as UHFH / united2h
      </p>
      <p className="text-foreground/50 text-sm mb-1">
        Iowa Non-Profit 501(c)(3) Organization
      </p>
      <p className="text-foreground/50 text-sm mb-6">
        Cedar Rapids, Iowa, USA
      </p>
      <div className="flex justify-center gap-6 text-foreground/40 text-sm">
        <a href="#mission" className="hover:text-gold transition-colors">Mission</a>
        <a href="#pillars" className="hover:text-gold transition-colors">Impact</a>
        <a href="#team" className="hover:text-gold transition-colors">Team</a>
        <a href="#event" className="hover:text-gold transition-colors">Events</a>
        <a href="#donate" className="hover:text-gold transition-colors">Donate</a>
      </div>
      <p className="text-foreground/30 text-xs mt-8">
        © {new Date().getFullYear()} United Harmonies for Humanity. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
