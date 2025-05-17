import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Logo light and dark
const logoLight = "/lovable-uploads/74fc6a19-dc35-4b31-99f4-d85eb5261194.png";
const logoDark = "/lovable-uploads/74fc6a19-dc35-4b31-99f4-d85eb5261194.png";

// Menu links
const NAV_LINKS = [{
  label: "Home",
  href: "/"
}, {
  label: "Services",
  href: "#services"
}, {
  label: "Portfolio",
  href: "#portfolio"
}, {
  label: "Contact",
  href: "#footer"
}];
export function NavBar() {
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change/hash change
  React.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);
  return <header className={cn("fixed top-0 left-0 w-full z-50 transition bg-white/80 dark:bg-black/70 backdrop-blur-lg", scrolled ? "shadow-md" : "shadow")} role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo section */}
        <Link to="/" aria-label="Maloro Studio" className="inline-flex items-center gap-2">
          {/* img: swap src if you want white logo for dark mode */}
          <img src={logoLight} alt="Maloro Studio logo" className="h-8 w-auto dark:hidden" draggable={false} />
          <img src={logoDark} alt="Maloro Studio logo" className="h-8 w-auto hidden dark:block" draggable={false} />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {NAV_LINKS.map(({
              label,
              href
            }) => <NavigationMenuItem key={href}>
                  {href.startsWith("#") ? <a href={href} className={cn("px-4 py-2 rounded font-medium text-base text-black dark:text-white hover:bg-muted transition", location.hash === href ? "bg-muted text-primary" : "")}>
                      {label}
                    </a> : <NavigationMenuLink asChild>
                      <Link to={href} className={cn("px-4 py-2 rounded font-medium text-base text-black dark:text-white hover:bg-muted transition", location.pathname === href ? "bg-muted text-primary" : "")}>
                        {label}
                      </Link>
                    </NavigationMenuLink>}
                </NavigationMenuItem>)}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Hamburger - Mobile */}
        <button className="md:hidden inline-flex items-center justify-center rounded p-2 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition" aria-label="Open menu" onClick={() => setMobileOpen(v => !v)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && <div className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-5/6 max-w-xs h-full bg-white dark:bg-black shadow-lg flex flex-col animate-in slide-in-from-right-20 duration-200">
            <button className="ml-auto m-4 p-1 rounded text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <span className="text-lg font-bold">&times;</span>
            </button>
            <nav className="flex flex-col gap-3 mt-4 px-6 bg-white shadow-md rounded py-[26px] my-0">
              {NAV_LINKS.map(({
            label,
            href
          }) => href.startsWith("#") ? <a key={href} href={href} className={cn("px-2 py-2 rounded font-medium text-base text-black dark:text-white hover:bg-muted transition", location.hash === href ? "bg-muted text-primary" : "")}>
                    {label}
                  </a> : <Link key={href} to={href} className={cn("px-2 py-2 rounded font-medium text-base text-black dark:text-white hover:bg-muted transition", location.pathname === href ? "bg-muted text-primary" : "")}>
                    {label}
                  </Link>)}
            </nav>
          </div>
          {/* Background click closes menu */}
          <button aria-label="Close mobile menu overlay" className="absolute inset-0 w-full h-full" style={{
        background: "transparent"
      }} onClick={() => setMobileOpen(false)} tabIndex={-1} />
        </div>}
    </header>;
}
export default NavBar;