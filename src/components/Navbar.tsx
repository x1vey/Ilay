import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE, NAV_LINKS, NAV_CTA } from "@/content";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-[44px] left-0 right-0 z-40 glass-nav">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <img src={SITE.logo} alt={SITE.name} className="h-7 brightness-0 invert" />

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <a href={NAV_CTA.url} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-block btn-gold font-body text-sm font-semibold px-6 py-2.5 rounded-full">
          {NAV_CTA.label}
        </a>

        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground" aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-nav px-6 pb-6 pt-2 space-y-4">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
              className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
          <a href={NAV_CTA.url} target="_blank" rel="noopener noreferrer"
            className="block text-center btn-gold font-body text-sm font-semibold px-6 py-3 rounded-full">
            {NAV_CTA.label}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
