
import * as React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does each project take?",
    a: "Most projects are delivered within 7–14 working days, depending on complexity."
  },
  {
    q: "Do you work with businesses outside Lesotho?",
    a: "Yes! We work with clients across Africa and globally via online collaboration."
  },
  {
    q: "Can I request revisions?",
    a: "Absolutely—each package includes a set number of revisions."
  },
  {
    q: "What platforms do you build websites on?",
    a: "We use WordPress and Webflow depending on your needs."
  },
  {
    q: "Is payment required upfront?",
    a: "A 50% deposit is required to begin work, with the rest due upon final delivery."
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="max-w-2xl mx-auto rounded-2xl border bg-white dark:bg-card shadow p-4">
          {faqs.map((f, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-left font-medium text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
