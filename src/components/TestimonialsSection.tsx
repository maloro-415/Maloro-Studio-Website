
import { User } from "lucide-react";

const testimonials = [
  {
    name: "Lebo",
    bio: "Food Startup Owner",
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
    quote:
      "Maloro Studio nailed our brand vibe. The packaging turned heads immediately!",
  },
  {
    name: "Nthabeleng",
    bio: "Consultant",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    quote:
      "Our website now looks as professional as we are. Highly recommend.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-white dark:bg-card">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Client Stories</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="rounded-2xl bg-muted/60 dark:bg-muted/30 shadow-md p-7 flex flex-col items-center text-center max-w-sm mx-auto"
            >
              <div className="mb-3">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="rounded-full w-14 h-14 object-cover border-2 border-primary"
                  />
                ) : (
                  <User className="w-12 h-12 text-muted-foreground" />
                )}
              </div>
              <div className="italic text-lg mb-2">"{t.quote}"</div>
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.bio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
