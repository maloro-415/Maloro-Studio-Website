
import * as React from "react";
import { PaymentInfoDialog } from "./PaymentInfoDialog";

const PACKAGES = [
  {
    name: "Logo Starter",
    includes: ["1 Logo Concept", "2 Revisions", "PNG, JPG, PDF files"],
    price: "R1,500",
  },
  {
    name: "Full Brand Kit",
    includes: ["Logo", "Brand Guide", "Business Card Design"],
    price: "R3,200",
  },
  {
    name: "Packaging Mockup",
    includes: ["2 Packaging Designs", "3D Mockups", "Print Files"],
    price: "R2,800",
  },
  {
    name: "Website Lite",
    includes: ["1–3 Page Site", "Mobile Friendly", "Contact Form"],
    price: "R4,500",
  },
  {
    name: "Pro Website",
    includes: [
      "5+ Pages",
      "Blog Setup",
      "Basic SEO",
      "Admin Training",
    ],
    price: "R8,000",
  },
];

export function PricingSection() {
  const [openIdx, setOpenIdx] = React.useState<null | number>(null);

  return (
    <section id="pricing" className="py-12 md:py-20 bg-gray-50 dark:bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Design Packages</h2>
        <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto">
          {PACKAGES.map((pack, idx) => (
            <div
              key={pack.name}
              className="rounded-2xl bg-white dark:bg-card shadow-md flex flex-col items-center text-center p-7 mb-3"
            >
              <div className="font-bold text-lg mb-2">{pack.name}</div>
              <div className="text-primary text-2xl font-bold mb-5">
                {pack.price} <span className="text-sm text-muted-foreground">ZAR</span>
              </div>
              <ul className="flex flex-col gap-2 mb-5 text-sm text-left text-muted-foreground">
                {pack.includes.map((feature) => (
                  <li key={feature} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="rounded-xl px-5 py-2 mt-auto font-bold bg-primary text-white hover:bg-primary/90 transition"
                onClick={() => setOpenIdx(idx)}
              >
                Select
              </button>
              {openIdx === idx && (
                <PaymentInfoDialog
                  open={openIdx === idx}
                  onOpenChange={(open) => setOpenIdx(open ? idx : null)}
                  price={pack.price}
                  packageName={pack.name}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-6 text-muted-foreground text-sm">
          Add-ons available upon request.
        </div>
      </div>
    </section>
  );
}
