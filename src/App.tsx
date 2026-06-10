// src/App.tsx
import { useEffect, useMemo, useState } from "react";
import {
  Beaker,
  FlaskConical,
  ShieldCheck,
  Leaf,
  Globe2,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Search,
  X,
  ChevronRight,
  Factory,
  BadgeCheck,
  Users,
  FlaskRound,
  FileCheck,
  BeakerIcon,
  Handshake,
} from "lucide-react";

type ProductSpec = { label: string; value: string };
type Product = {
  id: string;
  name: string;
  cas: string;
  formula: string;
  molecularWeight: string;
  appearance: string;
  category: "Pharma Intermediate" | "API Intermediate" | "Speciality";
  blurb: string;
  specs: ProductSpec[];
};

const PRODUCTS: Product[] = [
  {
    id: "4-nitrophthalimide",
    name: "4-Nitrophthalimide",
    cas: "89-40-7",
    formula: "C8H4N2O4",
    molecularWeight: "192.13",
    appearance: "Off White Powder",
    category: "Pharma Intermediate",
    blurb:
      "Manufactured in compliance with latest industry standards under expert supervision. Acclaimed globally for good quality and competitive rates.",
    specs: [
      { label: "Commercial Name", value: "4-NITROPHTHALIMIDE" },
      { label: "CAS No.", value: "89-40-7" },
      { label: "Molecular Formula", value: "C8H4N2O4" },
      { label: "Molecular Weight", value: "192.13" },
      { label: "Appearance", value: "OFF WHITE POWDER" },
      { label: "Solubility", value: "0.3 gm soluble in 10 ml Acetone" },
      { label: "Melting Point", value: "199 °C to 203 °C" },
      { label: "Assay", value: "Above 99 %" },
      { label: "Loss on Drying", value: "0.15 % MAX" },
      { label: "Packing", value: "As per party's requirement" },
      { label: "Hazard Codes", value: "XI" },
      { label: "Risk Statements", value: "36/37/38" },
      { label: "Safety Statements", value: "37/39-26-36" },
    ],
  },
  {
    id: "2-nitro-dimethyl-terephthalate",
    name: "2-Nitro Dimethyl Terephthalate",
    cas: "5292-45-5",
    formula: "C10H9NO6",
    molecularWeight: "239.18",
    appearance: "Off White Yellow Crystalline",
    category: "Pharma Intermediate",
    blurb:
      "Manufactured with fine raw material to ensure reliability. Produced as per various set industrial norms and grades.",
    specs: [
      { label: "Product Name", value: "2-NITRO DI METHYL TERPHTHALATE" },
      { label: "CAS No.", value: "5292 - 45 - 5" },
      { label: "Molecular Formula", value: "C10H9NO6" },
      { label: "Molecular Weight", value: "239.18" },
      { label: "Purity by HPLC", value: "98.5 MIN" },
      { label: "Melting Point", value: "73-76 °C (lit.)" },
      { label: "Density", value: "1.272" },
      { label: "Water Solubility", value: "INSOLUBLE" },
      { label: "Appearance", value: "OFF WHITE YELLOW CRYSTALLINE WET CAKE" },
      { label: "D.M.T.", value: "0.5% MAX" },
      { label: "Moisture Content", value: "8 % MAX" },
      { label: "Packing", value: "As per party requirement" },
      { label: "Hazard Codes", value: "XI" },
      { label: "Risk Statements", value: "36/37/38" },
      { label: "Safety Statements", value: "37/39-26" },
    ],
  },
  {
    id: "5-amino-salicylic-acid",
    name: "5-Amino Salicylic Acid",
    cas: "89-57-6",
    formula: "C7H7NO3",
    molecularWeight: "153.14",
    appearance: "Off-white to Gray",
    category: "API Intermediate",
    blurb:
      "Produced under the supervision of industry experts. Subjected to strict quality check prior to dispatch with timely delivery.",
    specs: [
      { label: "Commercial Name", value: "5-Aminosalicylic acid" },
      { label: "CAS No.", value: "89-57-6" },
      { label: "Synonyms", value: "Rowasa; Asacol; Lixacol; Mesasal; Salofalk; Claversal; Mesalmine" },
      { label: "Molecular Formula", value: "C7H7NO3" },
      { label: "Molecular Weight", value: "153.14" },
      { label: "Appearance", value: "off-white to gray" },
      { label: "Solubility", value: "<0.1 g/100 mL at 21 ºC" },
      { label: "Melting Point", value: "275-280 °C (dec.)(lit.)" },
      { label: "Flash Point", value: "279-281°C" },
      { label: "Stability", value: "Stable. Incompatible with acids, acid anhydrides, acid chlorides" },
      { label: "Hazard Symbols", value: "XI" },
      { label: "Risk Phrases", value: "36/37/38" },
      { label: "Safety Phrases", value: "26-36-24/25" },
      { label: "HS Code", value: "29225000" },
      { label: "Packing", value: "As per party's requirements" },
    ],
  },
  {
    id: "5-nitro-salicylic-acid",
    name: "5-Nitro Salicylic Acid",
    cas: "96-97-9",
    formula: "C7H5NO5",
    molecularWeight: "183.12",
    appearance: "Yellow Powder",
    category: "API Intermediate",
    blurb:
      "Quality, purity and longer shelf life make it highly popular. Efficient to process orders even at short notice period.",
    specs: [
      { label: "Commercial Name", value: "5-Nitrosalicylic acid" },
      { label: "CAS No.", value: "96-97-9" },
      { label: "Synonyms", value: "2-hydroxy-5-nitro-benzoic acid ; 2-HYDROXY-5-NITROBENZOIC ACID" },
      { label: "Molecular Formula", value: "C7H5NO5" },
      { label: "Molecular Weight", value: "183.12" },
      { label: "Appearance", value: "yellow powder" },
      { label: "Solubility", value: "Soluble In Methanol" },
      { label: "Purity by HPLC", value: "99% min." },
      { label: "Melting Point", value: "228-230 °C (lit.)" },
      { label: "Hazard Symbols", value: "XI" },
      { label: "Risk Phrases", value: "36/37/38" },
      { label: "Safety Phrases", value: "26-36-37/39" },
      { label: "HS Code", value: "29182990" },
      { label: "Packing", value: "As per party's requirements" },
    ],
  },
  {
    id: "n-carbethoxy-4-piperidone",
    name: "N-Carbethoxy-4-Piperidone",
    cas: "29976-53-2",
    formula: "C8H13NO3",
    molecularWeight: "171.19",
    appearance: "Clear colorless to pale yellow liquid",
    category: "Speciality",
    blurb:
      "Perfect composition and long storage life. Available at reasonable price with quality-assured raw materials.",
    specs: [
      { label: "Product Name", value: "N-Carbethoxy-4-piperidone" },
      { label: "CAS No.", value: "29976-53-2" },
      { label: "Synonyms", value: "N-Carbethoxypiperidone" },
      { label: "Molecular Formula", value: "C8H13NO3" },
      { label: "Molecular Weight", value: "171.19" },
      { label: "Appearance", value: "clear colorless to pale yellow colored liquid" },
      { label: "Boiling Point", value: "95-98 °C (1 mmHg)" },
      { label: "Density", value: "1.135 g/mL at 25 °C (lit.)" },
      { label: "Flash Point", value: "190 °F" },
      { label: "Water Solubility", value: "slightly soluble" },
      { label: "Hazard Codes", value: "Xn, Xi" },
      { label: "Risk Statements", value: "36/38-22-36/37/38-20/21/22" },
      { label: "Safety Statements", value: "23-24/25-37/39-26-36" },
      { label: "Hazard Class", value: "IRRITANT" },
      { label: "HS Code", value: "29333999" },
    ],
  },
  {
    id: "n-methyl-4-piperidone",
    name: "N-Methyl-4-Piperidone",
    cas: "1445-73-4",
    formula: "C6H11NO",
    molecularWeight: "113.16",
    appearance: "Yellowish liquid",
    category: "Speciality",
    blurb:
      "Top grade raw materials and quality tests run by quality experts ensure no impurity remains in formulation.",
    specs: [
      { label: "Commercial Name", value: "N-methyl-4-piperidone" },
      { label: "CAS No.", value: "1445-73-4" },
      { label: "EINECS No.", value: "215-895-5" },
      { label: "Synonyms", value: "1-Méthyl-4-pipéridone; 1-Methyltetrahydropyridin" },
      { label: "Molecular Formula", value: "C6H11NO" },
      { label: "Molecular Weight", value: "113.16" },
      { label: "Appearance", value: "yellowish liquid" },
      { label: "Assay", value: "98.0% min" },
      { label: "Solubility", value: "Miscible" },
      { label: "Boiling Point", value: "55 - 58 °C at 10 mmHg" },
      { label: "Flash Point", value: "58 °C" },
      { label: "Specific Gravity", value: "0.98" },
      { label: "Refractive Index", value: "1.460 - 1.462" },
      { label: "Moisture", value: "0.5% max" },
      { label: "Stability", value: "Stable under ordinary conditions." },
      { label: "Hazard Symbols", value: "XI" },
      { label: "Risk Phrases", value: "36/37/39" },
      { label: "Safety Phrases", value: "26-37/39" },
      { label: "Packing", value: "As per party's requirements" },
    ],
  },
  {
    id: "phenoxy-isopropylamine",
    name: "Phenoxy Isopropylamine",
    cas: "35205-54-0",
    formula: "C9H13ON",
    molecularWeight: "151",
    appearance: "Light yellow liquid",
    category: "Pharma Intermediate",
    blurb:
      "Tamper proof packaging and long storage life with excellent quality. Available at minimal rates.",
    specs: [
      { label: "Product Name", value: "Phenoxy isopropylamine" },
      { label: "CAS No.", value: "35205-54-0" },
      { label: "Molecular Formula", value: "C9H13ON" },
      { label: "Molecular Weight", value: "151" },
      { label: "Appearance", value: "Light yellow liquid" },
      { label: "Water Solubility", value: "INSOLUBLE" },
      { label: "Packing", value: "AS PER PARTY REQUIREMENT" },
    ],
  },
  {
    id: "2-amino-dimethyl-terephthalate",
    name: "2-Amino Dimethyl Terephthalate",
    cas: "5372-81-6",
    formula: "C10H11NO4",
    molecularWeight: "209.2",
    appearance: "Crystalline solid",
    category: "Pharma Intermediate",
    blurb:
      "Best quality with expert professionals, latest technology and advanced machines. Precise composition, good quality and purity.",
    specs: [
      { label: "Commercial Name", value: "2-Aminodimethyl terephthalate" },
      { label: "CAS No.", value: "5372-81-6" },
      { label: "EC Number", value: "226-364-2" },
      { label: "Hill Formula", value: "C10H11NO4" },
      { label: "Chemical Formula", value: "2-(NH2)-C6H3-1,4-(COOCH3)2" },
      { label: "Molar Mass", value: "209.2 g/mol" },
      { label: "Packaging", value: "As Per Party Require" },
      { label: "Qty/Pack", value: "50 g" },
    ],
  },
  {
    id: "3-5-di-nitro-benzoic-acid",
    name: "3,5-Di Nitro Benzoic Acid",
    cas: "99-34-3",
    formula: "C7H4N2O6",
    molecularWeight: "212.12",
    appearance: "Crystalline solid",
    category: "API Intermediate",
    blurb:
      "Top class raw material maintaining high quality standards. Safe and protective packaging to keep fresh for long time.",
    specs: [
      { label: "Commercial Name", value: "3,5-Dinitrobenzoic acid" },
      { label: "CAS No.", value: "99-34-3" },
      { label: "CB Number", value: "CB8295480" },
      { label: "Molecular Formula", value: "C7H4N2O6" },
      { label: "Molecular Weight", value: "212.12" },
      { label: "Packaging", value: "As Per Party Require" },
      { label: "Qty/Pack", value: "50 g" },
    ],
  },
];

const testimonials = [
  {
    quote:
      "Abhishek chemical is a good source for certain raw materials which are hard to produce locally.",
    author: "Rajul Makaria",
    company: "Adroit Pharmachem PVT LTD., Vadodara",
  },
  {
    quote:
      "A trusted, responsive, and dedicated partner in the procurement of chemicals and APIs for the pharmaceutical industry.",
    author: "Mehul Dani",
    company: "Tanvi Enterprise, Mumbai",
  },
  {
    quote:
      "I have only had good experiences with Abhishek Chemicals. I really appreciate their responsiveness and commitment to our success as a company.",
    author: "Malay Parekh",
    company: "Bliss Unlimited, Mumbai",
  },
];

const values = [
  { icon: Factory, label: "World class Infrastructure" },
  { icon: Leaf, label: "Respect for Environment" },
  { icon: Users, label: "Team-work with all stake holders" },
  { icon: FlaskRound, label: "Innovative work culture" },
  { icon: FileCheck, label: "Non infringing process" },
  { icon: BeakerIcon, label: "Focus on R&D" },
  { icon: Handshake, label: "Collaborative approach with Customers" },
];

function cn(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [showInquiryFor, setShowInquiryFor] = useState<Product | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCat = category === "All" || p.category === category;
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.cas.includes(q) ||
        p.formula.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [query, category]);

  useEffect(() => {
    if (activeProduct || showInquiryFor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeProduct, showInquiryFor]);

  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 2600);
      return () => clearTimeout(t);
    }
  }, [toast]);

  return (
    <div className="min-h-screen bg-[#faf8f3] text-[#13212b] antialiased" style={{ fontFamily: "'DM Sans', system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif" }}>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800&family=DM+Sans:wght@400;500;600;700&display=swap');
      .display { font-family: 'Fraunces', Georgia, serif; }
      html { scroll-behavior: smooth; }
      `}</style>

      {/* Top utility bar */}
      <div className="bg-[#0e2432] text-[#d9e4dc] text-[12.5px]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex items-center justify-between h-[40px]">
          <div className="hidden md:flex items-center gap-6 text-[#b7c8c1]">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#e48b52]"/>Panoli GIDC, Ankleshwar, Gujarat, India</span>
            <span className="flex items-center gap-1.5"><BadgeCheck className="w-3.5 h-3.5 text-[#21b08a]"/>ISO Certified • GMP Compliant</span>
          </div>
          <div className="flex items-center gap-5 ml-auto text-[#cfe1d8]">
            <a href="tel:+919824411506" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91-98244 11506
            </a>
            <a href="mailto:info@abhishekchemical.com" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" /> info@abhishekchemical.com
            </a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#faf8f3f2] border-b border-black/[0.07]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[12px] bg-[#0f2835] flex items-center justify-center text-white shadow-sm">
              <FlaskConical className="w-[20px] h-[20px]" />
            </div>
            <div className="leading-tight">
              <div className="display font-[700] text-[20px] tracking-[-0.014em] text-[#112835]">Abhishek Chemical</div>
              <div className="text-[11px] text-[#5b6c75] tracking-wide font-medium -mt-0.5">APIs & Intermediates • Est. Ankleshwar</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-9 text-[14.5px] text-[#374956] font-[500]">
            <a href="#about" className="hover:text-[#0f2533]">About</a>
            <a href="#products" className="hover:text-[#0f2533]">Products</a>
            <a href="#quality" className="hover:text-[#0f2533]">Quality</a>
            <a href="#infrastructure" className="hover:text-[#0f2533]">Infrastructure</a>
            <a href="#contact" className="hover:text-[#0f2533]">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex px-4 py-2.5 rounded-full bg-[#e67935] text-white text-[13.5px] font-[650] shadow-sm hover:bg-[#cf692a] transition active:scale-[0.98]">Request a Quote</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24 pb-14 lg:pb-24">
          <div className="grid lg:grid-cols-[1.18fr_0.82fr] gap-12 lg:gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d9cfbb] bg-white px-3 py-1.5 text-[12.5px] font-[600] text-[#46535c] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#23a478]" />
                Manufacturer • Supplier • Exporter – Ankleshwar, Gujarat
              </div>
              <h1 className="display mt-6 text-[44px] sm:text-[60px] lg:text-[72px] leading-[0.96] tracking-[-0.028em] text-[#102936]">
                API & Pharma<br/>Intermediates,<br/>
                <span className="text-[#167766]">built to global standards.</span>
              </h1>
              <p className="mt-6 text-[17.5px] leading-relaxed text-[#3f5260] max-w-[600px]">
                Abhishek Chemical is one of the fastest growing manufacturers of APIs and Intermediates in India. High quality standards, GMP manufacturing practices, and a clean & safe plant environment – ready to compete globally.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#products" className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#162f40] text-white font-[600] text-[14.5px] hover:bg-[#102535] transition">
                  Explore Products <ArrowRight className="w-4 h-4"/>
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white border border-[#d6cdc0] font-[600] text-[14.5px] text-[#1b2f3c] hover:bg-[#f7f2e9] transition">
                  Talk to our team
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-[13.4px] text-[#50616e]">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#17946d]" /> GMP Norms</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#17946d]" /> ISO Certified QA/QC</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#17946d]" /> Global Export</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#17946d]" /> Timely Delivery</span>
              </div>
            </div>

            {/* Right Product preview card */}
            <div className="relative">
              <div className="absolute -top-10 -right-8 w-72 h-72 rounded-full bg-[#ecd9c3] blur-[80px] opacity-70 pointer-events-none" />
              <div className="relative bg-white rounded-[30px] shadow-[0_20px_60px_rgba(20,35,45,0.14)] border border-[#e2d7c6] p-6 md:p-8">
                <div className="flex items-center justify-between text-[11.5px] uppercase tracking-widest text-[#70818d] font-semibold">
                  <span>Featured Intermediates</span>
                  <span className="text-[#e07732]">9 Products</span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { n: "4-Nitrophthalimide", cas: "89-40-7" },
                    { n: "2-Nitro Dimethyl Terephthalate", cas: "5292-45-5" },
                    { n: "5-Amino Salicylic Acid", cas: "89-57-6" },
                    { n: "N-Methyl-4-Piperidone", cas: "1445-73-4" },
                  ].map((r) => (
                    <div key={r.cas} className="flex items-center justify-between rounded-2xl bg-[#f8f4ec] px-4 py-3 border border-[#e7dcc8]">
                      <div>
                        <div className="font-[650] text-[14.8px] text-[#172c39]">{r.n}</div>
                        <div className="text-[12.5px] text-[#62737f]">CAS {r.cas}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#93a2ac]" />
                    </div>
                  ))}
                </div>
                <div className="mt-5 bg-[#f2efe7] rounded-2xl px-4 py-3.5 text-[13.2px] text-[#50606b] border border-[#e2d7c6]">
                  We are one of the leading suppliers and exporters of chemical products like <b className="text-[#1b2f3b] font-[700]">4-Nitrophthalimide</b>, <b className="text-[#1b2f3b] font-[700]">2 Nitro Di Methyl Terephthalate</b> and more.
                </div>
                <a href="#products" className="mt-4 inline-flex text-[13.6px] font-[650] text-[#d46b22] hover:text-[#b85a18] items-center gap-1">View full product catalog <ArrowRight className="w-4 h-4"/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / stats band */}
      <section className="border-y border-[#e1d5c2] bg-[#f4efe6]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-7 grid grid-cols-2 md:grid-cols-4 gap-7 text-center">
          {[
            { big: "9+", sub: "Pharma Intermediates" },
            { big: "GMP", sub: "Compliant Manufacturing" },
            { big: "ISO", sub: "QA / QC Certified" },
            { big: "Global", sub: "Export Ready" },
          ].map((s) => (
            <div key={s.sub}>
              <div className="display text-[30px] text-[#173144]">{s.big}</div>
              <div className="text-[12.8px] text-[#5b6b74]">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <div>
            <div className="text-[12px] font-[700] tracking-widest text-[#d56a24] uppercase">About Us</div>
            <h2 className="display text-[42px] sm:text-[50px] leading-[1.05] tracking-[-0.022em] mt-3 text-[#102936]">Who we are</h2>
            <div className="mt-6 space-y-4 text-[16.5px] leading-relaxed text-[#3c4e5a]">
              <p>
                Abhishek Chemical is one of the fastest growing manufacturer, supplier and exporter of APIs (Active Pharmaceutical Ingredients) and Intermediates. These products meet the high quality standards and find application in various Chemical, Pharma and Medical industries.
              </p>
              <p>
                We follow global standards in our manufacturing practices. We are capable of producing APIs and intermediates with the use of our advanced equipment and instrument and ready to compete globally. Driven by ethical standards, we make sure that our plant environment is clean and safe.
              </p>
              <p>
                Our plant is located in Ankleshwar, Gujarat, which is easily accessible and well connected from all major parts of India by road, rail and air. So we have location advantage in terms of logistic connectivity with each and every part of country.
              </p>
              <p className="text-[#203745]">
                Based at Ankleshwar, Gujarat, India, we “Abhishek Chemicals” are one of the prominent processors and suppliers of Chemical Intermediates.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3 text-[13.4px]">
              {["High Quality Products","Timely Delivery","Cost Effectiveness","Rich Vendor Base","Wide Range of Chemicals","Experienced Staff"].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-white border border-[#e1d3bf] text-[#354652]">{t}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[30px] border border-[#e2d5c2] bg-white shadow-[0_20px_60px_rgba(20,35,45,0.08)] p-7">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl bg-[#f7f1e6] border border-[#e8dcc7] p-4">
                  <Factory className="w-5 h-5 text-[#d7702c] mb-2"/>
                  <div className="font-[700] text-[#163040]">Panoli GIDC</div>
                  <div className="text-[#56707e] text-[13px]">Plant near Ankleshwar industrial cluster</div>
                </div>
                <div className="rounded-2xl bg-[#f0f6f4] border border-[#cfe5db] p-4">
                  <ShieldCheck className="w-5 h-5 text-[#19846b] mb-2"/>
                  <div className="font-[700] text-[#163040]">GMP / ISO</div>
                  <div className="text-[#56707e] text-[13px]">QA / QC under regulatory norms</div>
                </div>
                <div className="rounded-2xl bg-[#f0f6f4] border border-[#cfe5db] p-4">
                  <Beaker className="w-5 h-5 text-[#19846b] mb-2"/>
                  <div className="font-[700] text-[#163040]">R&D Centre</div>
                  <div className="text-[#56707e] text-[13px]">Advanced research centre on site</div>
                </div>
                <div className="rounded-2xl bg-[#f7f1e6] border border-[#e8dcc7] p-4">
                  <Globe2 className="w-5 h-5 text-[#d7702c] mb-2"/>
                  <div className="font-[700] text-[#163040]">Global Supply</div>
                  <div className="text-[#56707e] text-[13px]">Exporter – worldwide dispatch</div>
                </div>
              </div>
              <div className="mt-4 text-[13.4px] text-[#516671]">
                Our manufacturing plant is well supported by our office and advanced research centre at the same location in Panoli GIDC, near Ankleshwar.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Quality */}
      <section id="quality" className="py-16 bg-[#f1ebe0] border-y border-[#e1d2bb]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Mission",
                icon: FlaskConical,
                text: "To develop and manufacture APIs (active pharmaceutical ingredients) and intermediates for global supply and complying with quality and regulatory requirements of our all customers.",
              },
              {
                title: "Quality",
                icon: ShieldCheck,
                text: "We at Abhishek chemicals are fully committed to meet customer satisfaction by supplying them intermediates and APIs which are manufactured under GMP norms and compliance with the International norms and regulations.",
              },
              {
                title: "Vision",
                icon: Globe2,
                text: "A preferred partner for the global pharma industry and share responsibilities for the enhancement of human health in ethical way.",
              },
              {
                title: "Infrastructure",
                icon: Factory,
                text: "Our manufacturing plant is located at Panoli GIDC near Ankleshwar industrial cluster and well supported by our office and advanced research centre at same location.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-[22px] p-6 border border-[#e2d3bf] shadow-sm">
                <c.icon className="w-5 h-5 text-[#cf6a21] mb-3" />
                <div className="font-[700] text-[17px] text-[#172d3c]">{c.title}</div>
                <p className="mt-2 text-[14.3px] leading-relaxed text-[#4b5b66]">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[12px] font-[700] tracking-widest text-[#d56a24] uppercase">Latest Products</div>
              <h2 className="display text-[44px] sm:text-[52px] tracking-[-0.022em] text-[#102936]">Product Catalog</h2>
              <p className="text-[#475863] mt-2 max-w-xl">API & Pharma intermediates manufactured under GMP norms. Click any product for full COA specs.</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "px-3.5 py-2 rounded-full text-[13.3px] font-[600] border transition",
                    category === cat
                      ? "bg-[#182f3d] text-white border-[#182f3d]"
                      : "bg-white text-[#40525f] border-[#d7c9b4] hover:bg-[#f7f1e6]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8696a2]" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search product, CAS, formula…"
                className="w-full pl-10 pr-3 py-3 rounded-full bg-white border border-[#d9c9b3] text-[14.3px] outline-none focus:border-[#c79a68] focus:ring-2 focus:ring-[#eec7a8]/60"
              />
            </div>
            <div className="text-[13.5px] text-[#6b7a84]">{filtered.length} / {PRODUCTS.length} products</div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <div key={p.id} className="group bg-white rounded-[24px] border border-[#e3d2bb] shadow-[0_10px_30px_rgba(30,35,40,0.06)] p-5 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11.5px] uppercase tracking-wider text-[#8c9aa3] font-semibold">{p.category}</div>
                    <div className="display text-[21.5px] leading-tight text-[#132839] mt-1">{p.name}</div>
                  </div>
                  <div className="w-11 h-11 rounded-[13px] bg-[#f5efe4] border border-[#e6d8c2] flex items-center justify-center text-[#ca6a24]">
                    <Beaker className="w-[20px] h-[20px]"/>
                  </div>
                </div>
                <p className="text-[13.7px] leading-relaxed text-[#53656f] mt-3">{p.blurb}</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[12.6px] text-[#596a74]">
                  <div className="rounded-xl bg-[#f7f2e8] border border-[#ead9c0] px-3 py-2">
                    <div className="text-[11px] text-[#7b8a93]">CAS</div>
                    <div className="font-[600] text-[#233746]">{p.cas}</div>
                  </div>
                  <div className="rounded-xl bg-[#f2f7f4] border border-[#cfe5d7] px-3 py-2">
                    <div className="text-[11px] text-[#7b8a93]">Formula</div>
                    <div className="font-[600] text-[#233746]">{p.formula}</div>
                  </div>
                  <div className="rounded-xl bg-[#f7f2e8] border border-[#ead9c0] px-3 py-2">
                    <div className="text-[11px] text-[#7b8a93]">MW</div>
                    <div className="font-[600] text-[#233746]">{p.molecularWeight}</div>
                  </div>
                  <div className="rounded-xl bg-[#f2f7f4] border border-[#cfe5d7] px-3 py-2">
                    <div className="text-[11px] text-[#7b8a93]">Appearance</div>
                    <div className="font-[600] text-[#233746] truncate">{p.appearance}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 pt-2 border-t border-[#eee2d2]">
                  <button
                    onClick={() => setActiveProduct(p)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#162f3f] text-white text-[13.5px] font-[650] hover:bg-[#0f2432] transition"
                  >View Specs</button>
                  <button
                    onClick={() => setShowInquiryFor(p)}
                    className="px-4 py-2.5 rounded-full bg-white border border-[#d6c4ab] text-[#274050] text-[13.5px] font-[600] hover:bg-[#f7f0e4] transition"
                  >Inquire</button>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-14 text-[#667782]">No products match your filters.</div>
            )}
          </div>
        </div>
      </section>

      {/* Quality / Infrastructure detailed */}
      <section id="infrastructure" className="py-20 bg-white border-y border-[#e5d5be]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <div className="text-[12px] font-[700] tracking-widest text-[#d56a24] uppercase">Quality Policy</div>
            <h3 className="display text-[40px] tracking-[-0.019em] text-[#102936] mt-2">GMP manufacturing, ISO monitored QA/QC</h3>
            <p className="text-[16.2px] leading-relaxed text-[#445762] mt-4">
              We at <b>Abhishek chemicals</b> are fully committed to meet customer satisfaction by supplying them intermediates and APIs which are manufactured under GMP norms and compliance with the International norms and regulations. This will be achieved by meeting all applicable requirements of quality, safety and environmental hygiene.
            </p>
            <p className="text-[16.2px] leading-relaxed text-[#445762] mt-3">
              Our quality assurance and quality control department guarantees all products and processes. Our QA department continuously monitors all suppliers, shipments, raw materials, finished goods and packaging and fully adheres to ISO standards to ensure consistent level of quality.
            </p>
            <p className="text-[16.2px] leading-relaxed text-[#445762] mt-3">
              QA department also ensures that activities which are associated with development and manufacturing of APIs and intermediates are done in a systematic manner and under GMP regulatory norms. Key feature of Abhishek Chemical's quality assurance is the strictly implementation of quality system and monitoring the process control with documentation procedures.
            </p>
          </div>
          <div className="rounded-[26px] border border-[#e2cfb5] bg-[#faf5ea] p-6">
            <div className="font-[700] text-[#193142] text-[17px]">Infrastructure & Certifications</div>
            <ul className="mt-4 space-y-3 text-[14.6px] text-[#40535f]">
              {[
                "Manufacturing plant at Panoli GIDC near Ankleshwar industrial cluster",
                "Office and advanced research centre at same location",
                "Site inspected by concern authorities and customers",
                "Company fully licensed as per Indian Factory Act",
                "Abhishek Chemical is ISO certified with many quality certifications",
                "Membership with Common Effluent Treatment Plant (CETP)",
                "Membership with Toxic Solid Disposal Site (TSDF)",
                "State of the art Laboratory with advanced instruments",
              ].map((i) => (
                <li key={i} className="flex gap-2.5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#17946b] mt-0.5 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-3 text-[12.8px]">
              <div className="rounded-xl bg-white border border-[#e4cfb6] p-3 text-[#4d5c65]">Quality Management System Certificate</div>
              <div className="rounded-xl bg-white border border-[#e4cfb6] p-3 text-[#4d5c65]">Environmental Management System Certificate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[12px] font-[700] tracking-widest text-[#d56a24] uppercase">Our Values</div>
            <h3 className="display text-[40px] tracking-[-0.018em] text-[#112936] mt-2">What drives Abhishek Chemical</h3>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.label} className="bg-white rounded-[20px] border border-[#e2d1bd] p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f2efe7] border border-[#e2d2bb] flex items-center justify-center text-[#c9651d]">
                  <v.icon className="w-5 h-5" />
                </div>
                <div className="font-[600] text-[#1d3241] text-[14.6px]">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f1ebe0] border-y border-[#e1cfb7]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-[12px] font-[700] tracking-widest text-[#d56a24] uppercase">Testimonials</div>
          <h3 className="display text-[40px] tracking-[-0.018em] text-[#102936] mt-2">What they are saying</h3>
          <div className="mt-9 grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-[22px] border border-[#e0cfb7] p-6 shadow-sm">
                <div className="text-[#c55e15] text-[28px] leading-none font-serif">“</div>
                <p className="text-[#3d505c] text-[15.2px] leading-relaxed mt-1">{t.quote}</p>
                <div className="mt-4 text-[13.8px]">
                  <div className="font-[700] text-[#1a2f3d]">{t.author}</div>
                  <div className="text-[#61727d]">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
          <div>
            <div className="text-[12px] font-[700] tracking-widest text-[#d56a24] uppercase">Contact</div>
            <h3 className="display text-[44px] tracking-[-0.019em] text-[#102936] mt-2">Let's talk procurement</h3>
            <p className="text-[#445865] mt-3 text-[16px] max-w-[520px]">
              For trade inquiry, technical data sheets, COA, or bulk pricing – reach out to Abhishek Chemical, Ankleshwar.
            </p>

            <div className="mt-7 space-y-4 text-[15px] text-[#314552]">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#d56a24] mt-0.5" />
                <div>
                  <div className="font-[650] text-[#1a2e3b]">Abhishek Chemical</div>
                  <div>Plot No 525, G.I.D.C Estate,<br/>Opposite Wankson Chemicals,<br/>Phase :-1 Panoli,<br/>Ankleshwar - 394 116, Gujarat, India</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d56a24]" />
                <a href="tel:+919824411506" className="font-[600] hover:underline">+91-98244 11506</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d56a24]" />
                <a href="mailto:info@abhishekchemical.com" className="font-[600] hover:underline">info@abhishekchemical.com</a>
              </div>
            </div>

            <div className="mt-7 rounded-[20px] border border-[#e2cfb7] bg-[#f6f0e5] p-4 text-[13.7px] text-[#425662]">
              <div className="font-[700] text-[#1a2f3c] mb-1">Why us</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4">
                <li>• High Quality Products</li>
                <li>• Commitment of timely delivery</li>
                <li>• Cost effectiveness</li>
                <li>• Rich Vendor Base</li>
                <li>• Wide Range of Chemicals</li>
                <li>• Experienced Staff</li>
              </ul>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setToast("Thanks! Your inquiry has been sent. We'll respond within 1 business day.");
              (e.target as HTMLFormElement).reset();
            }}
            className="bg-white rounded-[28px] border border-[#e2ceb6] shadow-[0_18px_56px_rgba(30,35,40,0.10)] p-6 sm:p-8"
          >
            <div className="text-[18px] font-[700] text-[#1a2f3c]">Send an Inquiry</div>
            <div className="text-[13.6px] text-[#60727e] mt-1">Typical response time: under 12 hours (IST).</div>

            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              <div>
                <label className="text-[12.5px] font-[600] text-[#48606f]">Full name</label>
                <input required className="mt-1 w-full rounded-xl border border-[#d2be9f] px-3 py-2.5 text-[14.3px] bg-[#fcf9f3] outline-none focus:border-[#c78d57] focus:ring-2 focus:ring-[#f1d2b6]" placeholder="Your name" />
              </div>
              <div>
                <label className="text-[12.5px] font-[600] text-[#48606f]">Company</label>
                <input className="mt-1 w-full rounded-xl border border-[#d2be9f] px-3 py-2.5 text-[14.3px] bg-[#fcf9f3] outline-none focus:border-[#c78d57] focus:ring-2 focus:ring-[#f1d2b6]" placeholder="Company / Lab" />
              </div>
              <div>
                <label className="text-[12.5px] font-[600] text-[#48606f]">Email</label>
                <input required type="email" className="mt-1 w-full rounded-xl border border-[#d2be9f] px-3 py-2.5 text-[14.3px] bg-[#fcf9f3] outline-none focus:border-[#c78d57] focus:ring-2 focus:ring-[#f1d2b6]" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-[12.5px] font-[600] text-[#48606f]">Phone / WhatsApp</label>
                <input className="mt-1 w-full rounded-xl border border-[#d2be9f] px-3 py-2.5 text-[14.3px] bg-[#fcf9f3] outline-none focus:border-[#c78d57] focus:ring-2 focus:ring-[#f1d2b6]" placeholder="+91 ..." />
              </div>
              <div className="sm:col-span-2">
                <label className="text-[12.5px] font-[600] text-[#48606f]">Product of interest</label>
                <select className="mt-1 w-full rounded-xl border border-[#d2be9f] px-3 py-2.5 text-[14.3px] bg-[#fcf9f3] outline-none focus:border-[#c78d57] focus:ring-2 focus:ring-[#f1d2b6]">
                  <option>Select a product</option>
                  {PRODUCTS.map(p => <option key={p.id}>{p.name} – CAS {p.cas}</option>)}
                  <option>Custom / Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-[12.5px] font-[600] text-[#48606f]">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border border-[#d2be9f] px-3 py-2.5 text-[14.3px] bg-[#fcf9f3] outline-none focus:border-[#c78d57] focus:ring-2 focus:ring-[#f1d2b6]" placeholder="Quantity, target price, COA / MSDS required, destination port…"></textarea>
              </div>
            </div>
            <button className="mt-5 w-full rounded-full bg-[#e06b24] hover:bg-[#c85d1c] text-white font-[700] py-[13px] text-[14.5px] transition">
              Send inquiry
            </button>
            <div className="text-[12.3px] text-[#6b7c85] mt-3 text-center">By submitting, you agree to be contacted regarding your inquiry. We respect your privacy.</div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e232f] text-[#cbdcdf]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <FlaskConical className="w-4 h-4 text-[#ffad71]" />
              </div>
              <div className="display text-[18px] text-white">Abhishek Chemical</div>
            </div>
            <p className="mt-3 text-[13.8px] text-[#9fb6bb] leading-relaxed">
              Manufacturer, supplier and exporter of APIs and Pharmaceutical Intermediates. Ankleshwar, Gujarat, India.
            </p>
          </div>
          <div>
            <div className="text-[12.5px] uppercase tracking-wider text-[#87aab2] mb-3 font-[700]">Products</div>
            <ul className="space-y-2 text-[13.8px] text-[#c2d5d8]">
              {PRODUCTS.slice(0,6).map(p=>(
                <li key={p.id}><a href="#products" className="hover:text-white">{p.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[12.5px] uppercase tracking-wider text-[#87aab2] mb-3 font-[700]">Company</div>
            <ul className="space-y-2 text-[13.8px] text-[#c2d5d8]">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#quality" className="hover:text-white">Quality Policy</a></li>
              <li><a href="#infrastructure" className="hover:text-white">Infrastructure</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[12.5px] uppercase tracking-wider text-[#87aab2] mb-3 font-[700]">Reach us</div>
            <div className="text-[13.8px] text-[#c2d5d8] leading-relaxed">
              Plot No 525, G.I.D.C Estate,<br/>Opposite Wankson Chemicals,<br/>Phase :-1 Panoli,<br/>Ankleshwar - 394 116,<br/>Gujarat, India<br/><br/>
              <a className="hover:text-white" href="tel:+919824411506">+91-98244 11506</a><br/>
              <a className="hover:text-white" href="mailto:info@abhishekchemical.com">info@abhishekchemical.com</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-5 text-[12.7px] text-[#8aaab1] flex flex-wrap items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} Abhishek Chemical, Ankleshwar. All rights reserved.</div>
            <div className="flex gap-5">
              <span>ISO Certified</span>
              <span>GMP Compliant</span>
              <span>Made in India</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Product modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={() => setActiveProduct(null)} />
          <div className="relative w-[min(920px,92vw)] max-h-[86vh] overflow-auto rounded-[26px] bg-[#faf7ef] border border-[#e0cfb6] shadow-2xl">
            <div className="sticky top-0 bg-[#faf7ef]/95 backdrop-blur border-b border-[#e5d4bc] px-6 py-4 flex items-center justify-between">
              <div>
                <div className="text-[11.5px] uppercase tracking-widest text-[#a2794f] font-[700]">{activeProduct.category}</div>
                <div className="display text-[26px] text-[#142b36]">{activeProduct.name}</div>
              </div>
              <button onClick={()=>setActiveProduct(null)} className="w-9 h-9 rounded-full bg-white border border-[#ddcaaa] flex items-center justify-center hover:bg-[#f4ead8]"><X className="w-4.5 h-4.5"/></button>
            </div>
            <div className="p-6 grid md:grid-cols-[330px_1fr] gap-7">
              <div className="bg-white rounded-[18px] border border-[#e3cfb5] p-5 h-fit">
                <div className="text-[12px] text-[#6f7f88] mb-3">Product Summary</div>
                <div className="space-y-3 text-[13.8px] text-[#324551]">
                  <div><span className="text-[#6b7c86]">CAS:</span> <b>{activeProduct.cas}</b></div>
                  <div><span className="text-[#6b7c86]">Formula:</span> <b>{activeProduct.formula}</b></div>
                  <div><span className="text-[#6b7c86]">MW:</span> <b>{activeProduct.molecularWeight}</b></div>
                  <div><span className="text-[#6b7c86]">Appearance:</span> <b>{activeProduct.appearance}</b></div>
                </div>
                <div className="mt-4 text-[13.7px] text-[#40545f]">{activeProduct.blurb}</div>
                <button
                  onClick={() => { setShowInquiryFor(activeProduct); }}
                  className="mt-4 w-full rounded-full bg-[#e26a22] text-white py-2.5 font-[650] text-[13.8px] hover:bg-[#c85b1c]"
                >Request Quote for {activeProduct.name}</button>
              </div>
              <div>
                <div className="text-[12.5px] font-[700] text-[#7a6448] mb-2">Technical Specification</div>
                <div className="overflow-hidden rounded-[18px] border border-[#e0c9aa] bg-white">
                  <table className="w-full text-[13.6px]">
                    <tbody>
                      {activeProduct.specs.map((s, idx) => (
                        <tr key={s.label} className={idx % 2 === 0 ? "bg-[#fdf9f2]" : "bg-white"}>
                          <td className="px-4 py-2.5 font-[650] text-[#2e4250] w-[230px] border-r border-[#efe1cc]">{s.label}</td>
                          <td className="px-4 py-2.5 text-[#425864]">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-[12.4px] text-[#758792] mt-3">Packing: As per party’s requirements • COA / MSDS available on request.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Inquiry modal */}
      {showInquiryFor && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/55" onClick={()=>setShowInquiryFor(null)} />
          <div className="relative w-[min(520px,92vw)] rounded-[24px] bg-white border border-[#e1cfb4] shadow-2xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[11.5px] uppercase tracking-widest text-[#be6a2b] font-[700]">Quick Inquiry</div>
                <div className="display text-[22px] text-[#1b2f3b]">{showInquiryFor.name}</div>
                <div className="text-[13px] text-[#5f717d]">CAS {showInquiryFor.cas}</div>
              </div>
              <button onClick={()=>setShowInquiryFor(null)} className="w-8 h-8 rounded-full bg-[#f5eee3] border border-[#e2ccaa] flex items-center justify-center"><X className="w-4 h-4"/></button>
            </div>
            <form
              onSubmit={(e)=>{
                e.preventDefault();
                setShowInquiryFor(null);
                setActiveProduct(null);
                setToast("Inquiry sent for " + showInquiryFor.name + ". We'll email you shortly.");
              }}
              className="mt-4 grid gap-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <input required placeholder="Name" className="rounded-xl border border-[#d6bfa1] px-3 py-2.5 text-[14px] bg-[#fdf9f3] outline-none focus:border-[#c68a55]" />
                <input required placeholder="Email" type="email" className="rounded-xl border border-[#d6bfa1] px-3 py-2.5 text-[14px] bg-[#fdf9f3] outline-none focus:border-[#c68a55]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="Company" className="rounded-xl border border-[#d6bfa1] px-3 py-2.5 text-[14px] bg-[#fdf9f3]" />
                <input placeholder="Qty / Month" className="rounded-xl border border-[#d6bfa1] px-3 py-2.5 text-[14px] bg-[#fdf9f3]" />
              </div>
              <textarea placeholder="Destination, purity requirement, COA/MSDS needed…" rows={3} className="rounded-xl border border-[#d6bfa1] px-3 py-2.5 text-[14px] bg-[#fdf9f3]" />
              <button className="rounded-full bg-[#192f3e] text-white py-3 font-[650] hover:bg-[#122532]">Send inquiry</button>
              <div className="text-[11.8px] text-[#6d7d86] text-center">Or call/WhatsApp: +91-98244 11506 • info@abhishekchemical.com</div>
            </form>
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-5 right-5 z-[70] bg-[#132934] text-white px-4 py-3 rounded-2xl shadow-xl text-[13.6px] max-w-sm">
          {toast}
        </div>
      )}
    </div>
  );
}
