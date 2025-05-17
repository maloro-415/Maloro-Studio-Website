
import { ArrowRight, Star, User } from "lucide-react";

const steps = [
  {
    icon: Star,
    label: "1. Choose your package",
    desc: "Logo, Packaging, Website—or bundle for best value.",
  },
  {
    icon: User,
    label: "2. Share your vision",
    desc: "We'll design with your brand story, goals, and inspiration in mind.",
  },
  {
    icon: ArrowRight,
    label: "3. Get ready-to-launch assets",
    desc: "Receive polished visuals, formats, and guided support for a smooth launch.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-10 md:py-20 bg-white dark:bg-card">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.label}
              className="flex-1 bg-muted/60 dark:bg-muted/30 rounded-2xl p-7 shadow transition hover:shadow-lg flex flex-col items-center text-center"
            >
              <div className="p-3 bg-primary/10 dark:bg-white/10 rounded-full mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="font-semibold text-lg mb-2">{step.label}</div>
              <div className="text-sm text-muted-foreground">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
