
import { Package, FileText, LayoutGrid } from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Logo & Brand Identity",
    desc: "Logos, color palettes, and brand guidelines to make you unforgettable.",
  },
  {
    icon: Package,
    title: "Packaging & Mockups",
    desc: "3D packaging design, product mockups, and print-ready deliverables.",
  },
  {
    icon: FileText,
    title: "Website Design",
    desc: "Clean, responsive sites built for impact and performance.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white dark:bg-card shadow-md transition hover:shadow-xl p-7 flex flex-col items-center text-center gap-4"
            >
              <s.icon className="w-10 h-10 mb-2 text-primary" />
              <div className="text-lg font-semibold mb-1">{s.title}</div>
              <div className="text-muted-foreground text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
