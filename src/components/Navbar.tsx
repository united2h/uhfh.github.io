import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/uhfh-logo.gif";

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "What We Do", href: "#pillars" },
  { label: "Team", href: "#team" },
  { label: "Next Event", href: "#event" },
  { label: "Contact", href: "#contact" },
  { label: "Donate", href: "#donate" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="UHFH Logo" className="h-10 w-10 rounded-full" />
          <span className="font-display text-lg font-semibold text-gold hidden sm:inline">UHFH / united2h</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-body tracking-wide text-foreground/70 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-foreground/70 hover:text-gold transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
