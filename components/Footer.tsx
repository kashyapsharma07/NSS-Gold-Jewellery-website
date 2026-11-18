import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-obsidian text-pearl border-t border-champagne/20">
      {/* Upper Footer: Brand narrative & columns */}
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col gap-4">
          <span className="font-display text-3xl font-light text-ivory tracking-wide">
            {siteConfig.name}
          </span>
          <p className="text-sm text-pearl/70 leading-relaxed max-w-md font-light">
            Founded by {siteConfig.founders.join(" & ")}, crafting bespoke gold and fine jewellery in Sonifalia, Surat. 
            Generations of trust, heritage karigari, and hallmark purity.
          </p>
          <div className="pt-2 flex items-center gap-3 text-xs tracking-widest uppercase text-gold">
            <span className="inline-block w-2 h-2 rounded-full bg-gold" />
            <span>100% BIS Hallmarked Purity Guaranteed</span>
          </div>
        </div>

        {/* Showroom & Timings Column */}
        <div className="md:col-span-4 flex flex-col gap-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
            Visit Our Showroom
          </h4>
          <address className="not-italic text-sm text-pearl/80 leading-relaxed font-light">
            {siteConfig.address.line1},<br />
            {siteConfig.address.line2},<br />
            {siteConfig.address.city}, {siteConfig.address.region}, {siteConfig.address.country}
          </address>
          <p className="text-xs text-pearl/60 mt-1">
            <strong className="text-pearl/90 font-medium">Showroom Hours:</strong> {siteConfig.hours}
          </p>
        </div>

        {/* Contact & Direct Link Column */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
            Get In Touch
          </h4>
          <div className="flex flex-col gap-2 text-sm text-pearl/80 font-light">
            {siteConfig.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="hover:text-gold transition-colors"
              >
                Call: {phone}
              </a>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-gold transition-colors truncate"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="pt-3">
            <a
              href={buildWhatsAppLink("Hello, I would like to connect regarding jewellery enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold/70 text-gold hover:bg-gold hover:text-obsidian px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors"
            >
              <span>Chat on WhatsApp</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & legal */}
      <div className="border-t border-pearl/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pearl/50 font-light">
          <p>&copy; {siteConfig.name}. All rights reserved.</p>
          <p className="tracking-wider">
            Surat, Gujarat &bull; Handcrafted Heritage Jewellery
          </p>
        </div>
      </div>
    </footer>
  );
}

