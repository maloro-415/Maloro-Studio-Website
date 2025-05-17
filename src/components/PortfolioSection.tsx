
// Replace with user uploaded images in the portfolio section
const MOCKUPS = [
  {
    img: "/lovable-uploads/734c611f-323e-4da8-8bc3-4a251b62e9bc.png",
    label: "Corporate Shirt – Lila Investment Group",
  },
  {
    img: "/lovable-uploads/23ba9d4c-c513-4c31-9f72-7ada76d01e2d.png",
    label: "Billboard – Lila Investment Group",
  },
  {
    img: "/lovable-uploads/3987ad81-6337-4015-a7da-e4a766d44403.png",
    label: "Stationery – Lila Investment Group",
  },
  {
    img: "/lovable-uploads/ea50320c-bfed-497a-b2b7-31964a6f09fe.png",
    label: "Packaging – Sechaba Maize Meal",
  },
  {
    img: "/lovable-uploads/6b2c402a-d7ab-4395-b6a4-ed9dc7077098.png",
    label: "Promo Visual – Sechaba Super Maize Meal",
  }
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-12 md:py-20 bg-background">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Our Recent Work</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-none pb-3">
          {MOCKUPS.map((item, idx) => (
            <div key={idx} className="min-w-[240px] max-w-[260px] rounded-2xl shadow bg-white dark:bg-card flex flex-col items-center p-4 mr-2 last:mr-0">
              <img src={item.img} alt={item.label} className="rounded-xl mb-3 object-contain h-32 w-full" />
              <div className="text-sm font-medium text-center">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
