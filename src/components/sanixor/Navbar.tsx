import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ThemePicker } from "./ThemePicker";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/training", label: "Training" },
  { to: "/hiring", label: "Hiring" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled ? "glass-strong shadow-elegant" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo size="md" />

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-smooth hover:bg-muted hover:text-foreground"
                activeProps={{ className: "rounded-full px-4 py-2 text-sm text-foreground bg-muted" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <ThemePicker />
      </nav>
    </header>
  );
}