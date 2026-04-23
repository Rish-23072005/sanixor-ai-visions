import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ThemePicker } from "./ThemePicker";
import { X, Home, Sparkles, GraduationCap, Users, Briefcase, Mail } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Home },
  { to: "/products", label: "Products", icon: Sparkles },
  { to: "/training", label: "Training", icon: GraduationCap },
  { to: "/hiring", label: "Hiring", icon: Briefcase },
  { to: "/team", label: "Team", icon: Users },
  { to: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-elegant" : "bg-transparent"}`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo size="md" />

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`rounded-full px-4 py-2 text-sm transition-all duration-300 hover:bg-muted hover:text-foreground ${location.pathname === l.to ? "text-foreground bg-muted" : "text-muted-foreground"}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemePicker />
            
            {/* 6-dot grid button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="grid grid-cols-2 gap-1 p-2 rounded-xl hover:bg-muted transition-colors lg:hidden"
              aria-label="Open menu"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-current" />
              ))}
            </button>
          </div>
        </nav>
      </header>

      {/* Full screen menu overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background/95 backdrop-bl-xl transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6">
            <Logo size="md" />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Links grid */}
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="grid grid-cols-2 gap-4 max-w-md w-full">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`flex flex-col items-center justify-center gap-3 p-8 rounded-3xl transition-all duration-300 hover:shadow-glow ${
                    location.pathname === l.to
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "glass"
                  }`}
                >
                  <l.icon className="h-8 w-8" />
                  <span className="text-sm font-medium">{l.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 text-center">
            <p className="text-sm text-muted-foreground">Sanixor.AI — Automating Intelligence</p>
          </div>
        </div>
      </div>
    </>
  );
}