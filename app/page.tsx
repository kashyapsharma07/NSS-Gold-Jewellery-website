import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center">
      <p className="text-sm tracking-widest text-olive">PLACEHOLDER HOMEPAGE</p>
      <h1 className="font-display text-5xl font-light sm:text-7xl">
        {siteConfig.name}
      </h1>
      <div className="h-px w-24 bg-gold" />
      <a
        href={buildWhatsAppLink(`Hello, I would like to enquire about your jewellery.`)}
        className="border border-obsidian bg-obsidian px-8 py-3 text-sm text-ivory transition-colors hover:bg-transparent hover:text-obsidian"
      >
        Enquire on WhatsApp
      </a>
    </main>
  );
}