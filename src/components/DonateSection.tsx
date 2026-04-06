const DonateSection = () => (
  <section id="donate" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl text-center">
      <p className="text-gold text-sm tracking-[0.2em] uppercase mb-3 font-body">
        Support Us
      </p>
      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-4">
        Help Us Keep the Music Going
      </h2>
      <p className="text-foreground/60 max-w-xl mx-auto mb-12">
        Your donation sustains outreach, music education, student development,
        and compassionate performances across Iowa.
      </p>

      <div className="grid sm:grid-cols-2 gap-8 max-w-lg mx-auto">
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <h3 className="font-display text-lg font-semibold mb-3">Venmo</h3>
          <img
            src="https://www.uhfh.org/venmo-qr.JPG"
            alt="Venmo QR code for donations to @united2h"
            className="w-40 h-40 mx-auto rounded-lg mb-3 object-contain"
            loading="lazy"
            width={160}
            height={160}
          />
          <p className="text-gold text-sm">@united2h</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <h3 className="font-display text-lg font-semibold mb-3">Zelle</h3>
          <img
            src="https://www.uhfh.org/zelle-qr.PNG"
            alt="Zelle QR code for donations"
            className="w-40 h-40 mx-auto rounded-lg mb-3 object-contain"
            loading="lazy"
            width={160}
            height={160}
          />
          <p className="text-gold text-sm">Via Zelle app</p>
        </div>
      </div>
    </div>
  </section>
);

export default DonateSection;
