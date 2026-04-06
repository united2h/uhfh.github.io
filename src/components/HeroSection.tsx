import heroBg from "@/assets/hero-concert.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <img
      src={heroBg}
      alt="Concert stage with warm golden lighting"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-background/70" />

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-up">
      <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-body">
        Iowa Non-Profit 501(c)(3)
      </p>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
        United Harmonies
        <br />
        <span className="gold-text-gradient">for Humanity</span>
      </h1>
      <p className="text-foreground/70 text-lg sm:text-xl font-body max-w-xl mx-auto mb-10 leading-relaxed">
        Compassion through music — connecting community care, music education,
        and purposeful performance.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#mission"
          className="gold-gradient text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold tracking-wide hover:opacity-90 transition-opacity"
        >
          Our Mission
        </a>
        <a
          href="#donate"
          className="border border-gold/40 text-gold px-8 py-3 rounded-lg font-body font-semibold tracking-wide hover:bg-gold/10 transition-colors"
        >
          Donate
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
