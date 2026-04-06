import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const galleryImages = [
  { alt: "Community concert in the park", placeholder: "Concert Performance" },
  { alt: "Students practicing instruments", placeholder: "Music Practice" },
  { alt: "Hospice visit with musicians", placeholder: "Hospice Visit" },
  { alt: "Outdoor charity event", placeholder: "Charity Event" },
  { alt: "Group rehearsal session", placeholder: "Group Rehearsal" },
  { alt: "Elder care music session", placeholder: "Elder Care Session" },
  { alt: "Youth mentoring workshop", placeholder: "Youth Workshop" },
  { alt: "Special needs children event", placeholder: "Special Needs Event" },
  { alt: "Annual fundraiser gala", placeholder: "Fundraiser Gala" },
  { alt: "Volunteer appreciation day", placeholder: "Volunteer Day" },
];

const GallerySection = () => (
  <section className="py-24 px-6 bg-[hsl(40,30%,95%)]">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-12">
        <p className="text-sm tracking-[0.2em] uppercase mb-3 font-body text-[hsl(var(--gold-dark))]">
          In Action
        </p>
        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[hsl(30,10%,15%)]">
          Moments That Matter
        </h2>
        <p className="text-[hsl(30,10%,40%)] max-w-xl mx-auto mt-4">
          Real snapshots from our events — proof that music heals, connects, and
          uplifts.
        </p>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-xl group ${
              i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <div
              className={`w-full bg-[hsl(30,10%,85%)] flex items-center justify-center ${
                i === 0 ? "h-80 lg:h-full" : "h-52"
              }`}
            >
              <span className="text-[hsl(30,10%,55%)] font-body text-sm tracking-wide">
                {img.placeholder}
              </span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
              <p className="text-white text-sm font-body p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {galleryImages.map((img, i) => (
              <CarouselItem key={i}>
                <div className="rounded-xl overflow-hidden">
                  <div className="w-full h-56 bg-[hsl(30,10%,85%)] flex items-center justify-center">
                    <span className="text-[hsl(30,10%,55%)] font-body text-sm">
                      {img.placeholder}
                    </span>
                  </div>
                  <p className="text-center text-[hsl(30,10%,40%)] text-sm mt-3 font-body">
                    {img.alt}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-[hsl(30,10%,30%)] border-[hsl(30,10%,75%)]" />
          <CarouselNext className="text-[hsl(30,10%,30%)] border-[hsl(30,10%,75%)]" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default GallerySection;
