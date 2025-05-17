
import { Instagram, Facebook, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "mailto:hello@malorostudio.com" },
];
const legalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="w-full px-0 pt-10 pb-3 bg-background border-t dark:border-none">
      <div className="container flex flex-col items-center gap-5">
        <img
          src="/lovable-uploads/74fc6a19-dc35-4b31-99f4-d85eb5261194.png"
          className="w-32 mb-2"
          alt="Maloro Studio Logo"
          draggable="false"
        />
        <nav className="flex gap-4 flex-wrap text-sm font-medium mb-2">
          {navLinks.map((nav) => (
            <a key={nav.label} href={nav.href} className="hover:underline transition">
              {nav.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <s.icon className="w-5 h-5 text-black dark:text-white"/>
            </a>
          ))}
        </div>
        <nav className="flex gap-4 flex-wrap mt-2 text-xs text-muted-foreground">
          {legalLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-4 text-xs text-muted-foreground text-center">
          © 2025 Maloro Studio. Made with creativity in Lesotho.
        </div>
      </div>
    </footer>
  );
}
