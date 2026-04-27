import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Clock,
  ShieldCheck,
  Sparkles,
  Bot,
  GraduationCap,
  Zap,
  Layers,
  Eye,
  Lock,
  Check,
  Play,
  Star,
  Users,
  Trophy,
  TrendingUp,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Layout } from "@/components/sanixor/Layout";
import { GlassCard } from "@/components/sanixor/GlassCard";
import { Counter } from "@/components/sanixor/Counter";

const offerings = [
  {
    icon: Bot,
    title: "AI Products",
    desc: "HackEval, BitBenchmark, AutoDash — production-grade tools that ship outcomes.",
    color: 220,
  },
  {
    icon: Layers,
    title: "AI Services",
    desc: "Agent as a Service (AaaS) and customized agentic solutions for enterprises.",
    color: 280,
  },
  {
    icon: GraduationCap,
    title: "Training & Careers",
    desc: "Industry-aligned bootcamps across AI, Data, Design, and Agentic systems.",
    color: 170,
  },
];

const why = [
  {
    icon: ShieldCheck,
    title: "Bias-free automation",
    desc: "Audited models with explainable, equitable decisions by design.",
    color: 220,
  },
  {
    icon: Clock,
    title: "10× time saved",
    desc: "Replace repetitive workflows with intelligent multi-agent systems.",
    color: 280,
  },
  {
    icon: Brain,
    title: "AI-driven decisions",
    desc: "Real-time, predictive insights from data your team already owns.",
    color: 170,
  },
];

const philosophy = [
  {
    icon: Zap,
    title: "Automation First",
    desc: "Replace repetitive and manual processes with intelligent automation.",
    color: 210,
  },
  {
    icon: Brain,
    title: "Intelligence Driven",
    desc: "Leverage AI for predictive, adaptive, and real-time decision-making.",
    color: 260,
  },
  {
    icon: Layers,
    title: "Scalable Innovation",
    desc: "Build systems that scale from individuals to enterprises.",
    color: 170,
  },
];

const ethics = [
  {
    icon: Eye,
    title: "Transparency",
    desc: "Open, explainable systems users and auditors can trust.",
    color: 220,
  },
  {
    icon: Lock,
    title: "Privacy First",
    desc: "Data minimization and security baked into every layer.",
    color: 280,
  },
  {
    icon: ShieldCheck,
    title: "Bias Reduction",
    desc: "Continuously audited models that are fair by design.",
    color: 170,
  },
  {
    icon: Check,
    title: "Responsible AI",
    desc: "Human-in-the-loop guardrails for every deployment.",
    color: 210,
  },
];

const stats = [
  { value: 12000, suffix: "+", label: "Hours Automated" },
  { value: 38, suffix: "+", label: "Enterprise Clients" },
  { value: 96, suffix: "%", label: "Bias Reduction" },
  { value: 24, suffix: "/7", label: "AI Uptime" },
];

const testimonials = [
  {
    quote: "Sanixor reshaped how we hire — fairer, faster, and 10× cheaper.",
    author: "Aarav K.",
    role: "Head of Talent, FinEdge",
    color: 220,
  },
  {
    quote: "Their AI agents replaced our manual ops queue in two weeks.",
    author: "Mira S.",
    role: "COO, NovaCloud",
    color: 280,
  },
  {
    quote: "The training program turned our analysts into AI engineers.",
    author: "Rohit V.",
    role: "VP Engineering, OrbitData",
    color: 170,
  },
];

const taglines = [
  "Automating Intelligence, Empowering Future",
  "Where AI Meets Efficiency",
  "Smart Systems. Smarter Future.",
  "Redefining Work with AI",
  "We don't make fake promises — we teach at an architect level.",
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Now Enrolling for 2026
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
              Automating <span className="text-gradient">Intelligence.</span>
              <br />
              Eliminating Bias.
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-10">
              We build the AI infrastructure that gives your time, decisions, and people back to
              you. Bias-free automation for the modern enterprise.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Explore Products <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full glass px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105"
              >
                <Play className="h-5 w-5" /> Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Taglines Marquee */}
      <section className="overflow-hidden border-y border-border/40 py-6 bg-muted/20">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-16 whitespace-nowrap">
          {[...taglines, ...taglines, ...taglines].map((t, i) => (
            <span key={i} className="text-lg md:text-xl font-medium text-muted-foreground">
              <span className="text-primary">✦</span> {t}
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">A complete AI ecosystem.</h2>
            <p className="text-lg text-muted-foreground mb-4">
              The name <em>Sanixor</em> comes from <strong>Sanskriti</strong> (culture) +{" "}
              <strong>Work</strong> + <strong>Automation</strong> — a vision where technology
              enhances human productivity.
            </p>
            <p className="text-muted-foreground mb-8">
              We integrate AI-powered products, SaaS platforms, corporate tools, and career-focused
              training into one intelligent ecosystem.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-wider text-primary mb-2">Vision</p>
                <p className="text-sm text-muted-foreground">
                  A future where intelligent systems collaborate seamlessly with humans.
                </p>
              </div>
              <div className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-wider text-primary mb-2">Mission</p>
                <p className="text-sm text-muted-foreground">
                  Automate complex processes, eliminate inefficiencies, empower people.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-accent opacity-20 blur-3xl" />
            <div className="relative glass-strong rounded-3xl p-8 shadow-elegant">
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-2xl animate-pulse"
                    style={{
                      background: `linear-gradient(135deg, oklch(0.6 0.15 ${200 + i * 20}), oklch(0.3 0.1 ${230 + i * 20}))`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What we offer</h2>
          <p className="text-muted-foreground">
            Products, services, and training — one integrated ecosystem.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((o) => (
            <GlassCard key={o.title}>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-glow"
                style={{
                  background: `linear-gradient(135deg, oklch(0.6 0.15 ${o.color}), oklch(0.4 0.12 ${o.color + 30}))`,
                }}
              >
                <o.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{o.title}</h3>
              <p className="text-sm text-muted-foreground">{o.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Core Philosophy
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">How we think.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {philosophy.map((p) => (
            <GlassCard key={p.title}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-glow"
                style={{
                  background: `linear-gradient(135deg, oklch(0.6 0.15 ${p.color}), oklch(0.4 0.12 ${p.color + 30}))`,
                }}
              >
                <p.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Why Sanixor
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Built for the next decade.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {why.map((w) => (
            <GlassCard key={w.title} className="text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{
                  background: `linear-gradient(135deg, oklch(0.6 0.15 ${w.color}), oklch(0.4 0.12 ${w.color + 30}))`,
                }}
              >
                <w.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground">{w.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Trusted by industry leaders</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <GlassCard key={i}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, oklch(0.6 0.15 ${t.color}), oklch(0.4 0.12 ${t.color + 30}))`,
                  }}
                />
                <div>
                  <div className="text-sm font-semibold">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Ethics */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Ethical AI Commitment
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Responsible by design.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ethics.map((e) => (
            <GlassCard key={e.title} className="text-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{
                  background: `linear-gradient(135deg, oklch(0.6 0.15 ${e.color}), oklch(0.4 0.12 ${e.color + 30}))`,
                }}
              >
                <e.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-semibold mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="glass-strong rounded-[3rem] p-12 md:p-16 text-center shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your workflow?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Join forward-thinking companies already using Sanixor.AI to automate and innovate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-base font-semibold transition-all duration-300 hover:bg-muted"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
