export interface JewelleryItem {
  id: string;
  name: string;
  category: "bridal" | "antique" | "polki" | "everyday" | "coins";
  categoryLabel: string;
  purity: string;
  description: string;
  details: string;
  tag: string;
}

export const CATEGORIES = [
  { id: "all", label: "All Masterpieces" },
  { id: "bridal", label: "Bridal & Vivah" },
  { id: "antique", label: "Antique & Temple" },
  { id: "polki", label: "Jadau & Polki" },
  { id: "everyday", label: "Daily Gold" },
  { id: "coins", label: "Coins & Bullion" },
] as const;

export const JEWELLERY_CATALOG: JewelleryItem[] = [
  {
    id: "nb-001",
    name: "Royal Gujarati Vivah Choker Set",
    category: "bridal",
    categoryLabel: "Bridal & Vivah",
    purity: "22KT BIS Hallmarked",
    description: "Multi-layered handcrafted bridal choker with matching jhumkas and maang tikka, sculpted in auspicious royal patterns.",
    details: "Custom gross weight crafted on order • Certified gemstones",
    tag: "Bridal Suite",
  },
  {
    id: "nb-002",
    name: "Padma Lakshmi Antique Temple Haar",
    category: "antique",
    categoryLabel: "Antique & Temple",
    purity: "22KT BIS Hallmarked",
    description: "Deep relief nakshi embossing featuring Goddess Lakshmi seated on a lotus, flanked by auspicious peacock filigree.",
    details: "Matte antique polish • Heritage Surat karigari",
    tag: "Temple Heritage",
  },
  {
    id: "nb-003",
    name: "Regal Bikaneri Jadau Polki Necklace",
    category: "polki",
    categoryLabel: "Jadau & Polki",
    purity: "22KT Gold & Fine Polki",
    description: "Uncut syndicate polki diamonds set in pure gold bezels, backed with elaborate hand-painted red & green Meenakari enamel.",
    details: "Hand-painted enamel reverse • Certified uncut diamonds",
    tag: "Royal Polki",
  },
  {
    id: "nb-004",
    name: "Auspicious Floral Gold Mangalsutra",
    category: "bridal",
    categoryLabel: "Bridal & Vivah",
    purity: "22KT BIS Hallmarked",
    description: "A traditional yet refined two-row black bead sacred chain with a handcrafted solid gold floral centerpiece.",
    details: "Adjustable length • Available in 18KT and 22KT",
    tag: "Sacred Heirloom",
  },
  {
    id: "nb-005",
    name: "Handcrafted Rawa & Filigree Kadas",
    category: "antique",
    categoryLabel: "Antique & Temple",
    purity: "22KT BIS Hallmarked",
    description: "Classic Gujarati solid gold openable bangles featuring intricate rawa granulation and floral carving.",
    details: "Screw closure • Pair or single bangle available",
    tag: "Masterpiece Kada",
  },
  {
    id: "nb-006",
    name: "Timeless Solitaire-Set Men's Ring",
    category: "everyday",
    categoryLabel: "Daily Gold",
    purity: "18KT / 22KT Gold",
    description: "Modern brushed gold band with a brilliant cut center stone, engineered for effortless daily comfort.",
    details: "Comfort-fit band • Customizable band width",
    tag: "Men's Luxury",
  },
  {
    id: "nb-007",
    name: "Delicate Daily Feather Gold Pendant Chain",
    category: "everyday",
    categoryLabel: "Daily Gold",
    purity: "22KT BIS Hallmarked",
    description: "Lightweight laser-cut gold chain paired with a graceful feather motif pendant for modern work & evening wear.",
    details: "Lightweight (under 12g) • Hallmarked clasp",
    tag: "Daily Elegance",
  },
  {
    id: "nb-008",
    name: "Crescent Chandbali Polki Earrings",
    category: "polki",
    categoryLabel: "Jadau & Polki",
    purity: "22KT Gold & Polki",
    description: "Cascading natural pearl drops suspended from a crescent of radiant uncut polki diamonds with floral studs.",
    details: "Natural pearl drop accents • Screw-back closure",
    tag: "Celebration Wear",
  },
  {
    id: "nb-009",
    name: "Pure 24KT Gold Coin (Lakshmi Ganesh)",
    category: "coins",
    categoryLabel: "Coins & Bullion",
    purity: "999 Pure 24KT Gold",
    description: "Auspicious embossed Lakshmi-Ganesh gold coin sealed in tamper-proof certification packaging for investment & gifting.",
    details: "Available in 1g, 2g, 5g, 10g, 20g, and 50g • 999 Fine Gold",
    tag: "Investment Grade",
  },
  {
    id: "nb-010",
    name: "Fine 999 Silver Pooja Bar & Coin",
    category: "coins",
    categoryLabel: "Coins & Bullion",
    purity: "999 Pure Fine Silver",
    description: "High-relief silver minted bars and coins ideal for festive ceremonies, Dhanteras, Diwali, and bespoke corporate gifts.",
    details: "Available in 10g to 1kg • Tamper-proof assay packing",
    tag: "Sacred Gifting",
  },
];
