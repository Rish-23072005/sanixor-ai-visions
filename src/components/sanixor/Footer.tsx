import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            Sanixor<span className="text-primary">.AI</span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Sanskrati × Work × Automation. We build bias-free AI systems that save time and accelerate human potential.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full glass transition-smooth hover:text-primary hover:scale-110">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
            <li><Link to="/training" className="hover:text-foreground">Training</Link></li>
            <li><Link to="/hiring" className="hover:text-foreground">Careers</Link></li>
            <li><Link to="/team" className="hover:text-foreground">Team</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">Get in touch</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@sanixor.ai</li>
            <li>Bengaluru, India</li>
            <li><Link to="/contact" className="text-primary hover:underline">Contact us →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Sanixor.AI — Automating Intelligence. Eliminating Bias.
      </div>
    </footer>
  );
}