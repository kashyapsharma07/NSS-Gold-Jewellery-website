import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const FEATURED_COLLECTIONS = [
  {
    title: "Bridal & Vivah",
    subtitle: "Sacred Heirloom Suites",
    description: "Ornate chokers, raani haars, and bridal sets sculpted with timeless Gujarati wedding traditions in mind.",
    badge: "Bespoke Bridal",
    tag: "bridal",
  },
  {
    title: "Antique & Temple Gold",
    subtitle: "Sacred Iconography & Filigree",
    description: "Intricately embossed deities, nagas work, and matte antique finishes evoking royal heritage karigari.",
    badge: "Heritage Craft",
    tag: "antique",
  },
  {
    title: "Jadau & Polki Brilliance",
    subtitle: "Uncut Diamonds & Meenakari",
    description: "Regal uncut polki stones set in pure gold with hand-painted meenakari detailing on the reverse.",
    badge: "Fine Polki",
    tag: "polki",
  },
  {
    title: "Everyday & Contemporary Fine Gold",
    subtitle: "Modern Luxury for Daily Radiance",
    description: "Lightweight kadas, delicate chains, solitaire rings, and minimalist pendants crafted for modern lifestyles.",
    badge: "Daily Elegance",
    tag: "everyday",
  },
];

const HERITAGE_PILLARS = [
  {
    title: "Sonifalia Legacy",
    description: `Rooted in the historical jewellery heart of Surat. Founded by ${siteConfig.founders.join(" & ")}, preserving generational master-karigar craftsmanship.`,
    icon: "✦",
  },
  {
    title: "100% BIS Hallmarked",
    description: "Every gram of gold is tested and stamped with authentic BIS Hallmark certification, giving families generations of pure confidence.",
    icon: "◈",
  },
  {
    title: "Custom Bespoke Orders",
    description: "Bring your dream design, ancestral ornament restoration, or custom bridal concept. Our karigars bring it to life to exact specifications.",
    icon: "❖",
  },
  {
    title: "Transparent & Family-First",
    description: "Clear weighing, certified gemstones, and honest advisory that Surat families have trusted for decades across celebratory milestones.",
    icon: "◆",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-radial from-pearl/60 via-ivory to-ivory py-24 sm:py-32 lg:py-40 border-b border-champagne/30">
        <div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
          {/* Subtle crown / heritage tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-gold/40 bg-ivory/80 text-[11px] uppercase tracking-[0.25em] text-olive font-medium">
            <span>Fine Jewellery &bull; Surat Heritage</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light text-obsidian tracking-tight leading-[1.15] max-w-4xl">
            Where Royal Gujarati Karigari Meets <span className="italic font-normal text-gold">Timeless Gold</span>
          </h1>

          <div className="my-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold/40" />
            <span className="text-gold text-xs">✦</span>
            <span className="h-px w-12 bg-gold/40" />
          </div>

          <p className="text-base sm:text-lg text-obsidian/75 max-w-2xl font-light leading-relaxed mb-10">
            For generations at Sonifalia, {siteConfig.name} has sculpted sacred bridal heirlooms, antique temple ornaments, and bespoke gold jewelry for discerning families.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#collections"
              className="w-full sm:w-auto px-8 py-3.5 bg-obsidian text-ivory text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-obsidian transition-all duration-300 shadow-sm"
            >
              Explore Collections
            </a>
            <a
              href={buildWhatsAppLink("Hello, I would like to book an appointment to visit your showroom.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 border border-gold bg-ivory text-obsidian text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-ivory transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Consult on WhatsApp</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Hallmarking & Trust Highlights */}
          <div className="mt-14 pt-8 border-t border-champagne/40 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-olive tracking-wider uppercase font-light">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              100% BIS Hallmarked Purity
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Bespoke Handcrafted Customization
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Showroom in Sonifalia, Surat
            </span>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE COLLECTIONS */}
      <section id="collections" className="py-24 sm:py-28 bg-ivory border-b border-champagne/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-olive font-medium mb-3">
              Curated Masterpieces
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-light text-obsidian tracking-tight">
              Signature Collections
            </h2>
            <div className="h-px w-16 bg-gold mx-auto my-5" />
            <p className="text-sm text-obsidian/70 font-light leading-relaxed">
              Each ornament is meticulously cast and finished by seasoned karigars, honoring centuries-old jewellery arts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {FEATURED_COLLECTIONS.map((col) => (
              <div
                key={col.title}
                className="group relative border border-champagne/60 bg-pearl/20 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/5"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold border border-gold/40 px-2.5 py-1 bg-ivory">
                      {col.badge}
                    </span>
                    <span className="text-xs text-olive/60 font-serif italic">Exclusive</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-normal text-obsidian group-hover:text-gold transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-olive mt-1 mb-4">
                    {col.subtitle}
                  </p>
                  <p className="text-sm text-obsidian/70 font-light leading-relaxed mb-8">
                    {col.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-champagne/40 flex items-center justify-between">
                  <span className="text-xs tracking-wider text-olive/70 font-light">Custom karatage available</span>
                  <a
                    href={buildWhatsAppLink(`Hello, I would like to see designs and enquire about your ${col.title} collection.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-medium text-obsidian group-hover:text-gold transition-colors"
                  >
                    <span>View & Enquire</span>
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HERITAGE & CRAFTSMANSHIP */}
      <section id="heritage" className="py-24 sm:py-28 bg-pearl/30 border-b border-champagne/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story side */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.25em] text-olive font-medium">
                The Heritage Story
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-obsidian leading-tight">
                Crafted by Tradition, Cherished across Generations
              </h2>
              <div className="h-px w-16 bg-gold" />
              <p className="text-sm text-obsidian/80 font-light leading-relaxed">
                In the bustling artisan alleyways of Sonifalia, Surat, founders <strong>{siteConfig.founders.join(" and ")}</strong> set the benchmark for purity, integrity, and intricate karigari. 
              </p>
              <p className="text-sm text-obsidian/80 font-light leading-relaxed">
                Whether creating auspicious wedding Mangalsutras, statement bridal chokers, or restoring precious family heirlooms, our commitment to 100% BIS hallmarked gold and uncompromised purity has remained steadfast.
              </p>
              <div className="pt-2">
                <a
                  href="#visit"
                  className="inline-flex items-center gap-2 border-b border-obsidian pb-1 text-xs uppercase tracking-[0.2em] text-obsidian hover:text-gold hover:border-gold transition-colors"
                >
                  <span>Experience Our Showroom</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* 4 Pillars grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {HERITAGE_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-ivory border border-champagne/60 p-6 flex flex-col gap-3 transition-colors hover:border-gold/80"
                >
                  <span className="text-gold text-lg">{pillar.icon}</span>
                  <h3 className="font-display text-xl text-obsidian font-normal">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-obsidian/75 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BESPOKE CRAFT & CUSTOM ORDER BANNER */}
      <section id="craftsmanship" className="py-20 bg-obsidian text-pearl border-b border-champagne/20">
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium mb-3">
            Bespoke Jewellery Concierge
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-ivory tracking-tight mb-6">
            Have a Dream Design or Family Heirloom in Mind?
          </h2>
          <p className="text-sm sm:text-base text-pearl/70 font-light max-w-2xl leading-relaxed mb-8">
            From custom weight adjustments to bespoke wedding sets sculpted from your references, our master artisans craft one-of-a-kind treasures with guaranteed hallmark certification.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={buildWhatsAppLink("Hello! I have a custom jewellery design idea I would like to discuss with you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gold text-obsidian text-xs uppercase tracking-[0.2em] font-medium hover:bg-ivory transition-colors"
            >
              Discuss Custom Design on WhatsApp
            </a>
            <a
              href={`tel:${siteConfig.phones[0]}`}
              className="px-8 py-3.5 border border-pearl/30 text-pearl text-xs uppercase tracking-[0.2em] hover:border-gold hover:text-gold transition-colors"
            >
              Call Showroom: {siteConfig.phones[0]}
            </a>
          </div>
        </div>
      </section>

      {/* 5. VISIT SHOWROOM & LOCATION */}
      <section id="visit" className="py-24 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Showroom Details */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.25em] text-olive font-medium">
                Plan Your Visit
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-light text-obsidian">
                Welcome to Our Sonifalia Showroom
              </h2>
              <div className="h-px w-16 bg-gold" />
              <p className="text-sm text-obsidian/75 font-light leading-relaxed">
                Step in to experience the weight, luster, and craftsmanship of our gold ornaments in person. Our friendly family team is happy to assist you in selecting the ideal piece.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <span className="text-gold text-sm mt-0.5">📍</span>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.18em] font-medium text-obsidian">Showroom Location</h4>
                    <p className="text-sm text-obsidian/70 font-light mt-0.5">
                      {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}, {siteConfig.address.region}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-gold text-sm mt-0.5">⏰</span>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.18em] font-medium text-obsidian">Visiting Hours</h4>
                    <p className="text-sm text-obsidian/70 font-light mt-0.5">
                      Monday to Sunday: {siteConfig.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-gold text-sm mt-0.5">📞</span>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.18em] font-medium text-obsidian">Direct Assistance</h4>
                    <p className="text-sm text-obsidian/70 font-light mt-0.5">
                      {siteConfig.phones.join(" / ")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={buildWhatsAppLink("Hello, I am planning to visit your showroom today.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-obsidian text-ivory text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-obsidian transition-colors"
                >
                  Notify Us on WhatsApp
                </a>
                <a
                  href={`tel:${siteConfig.phones[0]}`}
                  className="px-6 py-3 border border-obsidian text-obsidian text-xs uppercase tracking-[0.2em] hover:bg-pearl/50 transition-colors"
                >
                  Call Showroom
                </a>
              </div>
            </div>

            {/* Visit Card / Visual Box */}
            <div className="lg:col-span-6 bg-pearl/40 border border-champagne/60 p-8 sm:p-12 relative flex flex-col justify-between">
              <div className="border border-gold/30 p-8 bg-ivory/80 text-center flex flex-col items-center">
                <span className="font-display text-4xl sm:text-5xl font-light text-gold mb-2">
                  100%
                </span>
                <h3 className="font-display text-xl text-obsidian mb-2 font-normal">
                  BIS Hallmarked Certified Purity
                </h3>
                <p className="text-xs text-obsidian/70 font-light leading-relaxed max-w-sm mb-6">
                  Every ornament stamped with the Bureau of Indian Standards hallmark seal. Pure gold with guaranteed buyback and exchange transparency.
                </p>
                <div className="h-px w-24 bg-gold/40 mb-6" />
                <p className="text-[11px] uppercase tracking-[0.2em] text-olive font-medium">
                  Generations of Trust in Surat
                </p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-xs text-olive font-light italic">
                  &ldquo;A tradition of purity passed down from Nathubhai & Kashiram Soni.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
