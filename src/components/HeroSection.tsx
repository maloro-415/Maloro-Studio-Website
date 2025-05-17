
import { Button } from "@/components/ui/button";
import * as React from "react";
const gradientStyle =
  "bg-gradient-to-b from-gray-50 via-white to-gray-200 dark:from-neutral-950 dark:via-black dark:to-neutral-900";

// Replace with user uploaded images for the slideshow
const HERO_ITEMS = [
  {
    label: "Brand Collateral – Tichere Pule",
    img: "/lovable-uploads/2394b778-34f8-4308-8aa5-b0d000d06a83.png",
  },
  {
    label: "Product Website – Lenovo",
    img: "/lovable-uploads/700952fb-53e1-4103-b6d9-e06daa2db64d.png",
  },
  {
    label: "Social Media Promo – MobiStore",
    img: "/lovable-uploads/72f6dc8b-c623-45cd-b3aa-dea02857b3dc.png",
  },
  {
    label: "FMCG Campaign – Sechaba Maize Meal",
    img: "/lovable-uploads/6b2c402a-d7ab-4395-b6a4-ed9dc7077098.png",
  },
  {
    label: "Brand Collateral – Lila Investment Group",
    img: "/lovable-uploads/4acf8b9f-8d6d-49b3-87ac-22c3f2c2f057.png",
  },
];

export function HeroSection() {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % HERO_ITEMS.length),
      2500
    );
    return () => clearInterval(id);
  }, []);
  return (
    <section
      className={`w-full py-16 md:py-28 ${gradientStyle} rounded-b-[2.8rem] shadow-lg`}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-black dark:text-white">
          Design That Speaks—<span className="text-primary">Let Your Brand Thrive</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
          We help brands grow with iconic logos, striking packaging, and smart, modern websites.
        </p>
        <Button
          variant="default"
          size="lg"
          className="rounded-xl px-8 py-4 text-lg font-bold shadow-lg"
        >
          Request a Quote
        </Button>
        <div className="w-full mt-12 flex flex-col items-center">
          <div className="relative h-60 w-full max-w-md mx-auto rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl flex flex-col items-center justify-center">
            {HERO_ITEMS.map((item, i) => (
              <img
                key={i}
                className={`absolute object-contain rounded-2xl shadow transition-all duration-700 ${
                  i === current
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 z-0"
                }`}
                style={{
                  width: "85%",
                  height: "90%",
                  top: "10%",
                  left: "8%",
                }}
                src={item.img}
                alt={item.label}
                draggable="false"
              />
            ))}
          </div>
          <div className="flex items-center gap-2 mt-5">
            {HERO_ITEMS.map((_, i) => (
              <button
                key={i}
                aria-label={`View ${HERO_ITEMS[i].label}`}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition bg-black/20 ${
                  i === current ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground mt-3">
            {HERO_ITEMS[current].label}
          </span>
        </div>
      </div>
    </section>
  );
}
