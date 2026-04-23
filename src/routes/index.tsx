import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Clock, ShieldCheck, Sparkles, Bot, GraduationCap, Briefcase } from "lucide-react";
import { Layout } from "@/components/sanixor/Layout";
import { Scene3D } from "@/components/sanixor/Scene3D";
import { GlassCard } from "@/components/sanixor/GlassCard";
import { Counter } from "@/components/sanixor/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanixor.AI — Automating Intelligence. Eliminating Bias." },
      { name: "description", content: "Premium AI startup building bias-free automation, AI products, training, and hiring." },
    ],
  }),
  component: Index,
});

const offerings = [
  { icon: Bot, title: "AI Products", desc: "Production-grade AI tools that ship outcomes — not demos." },
  { icon: GraduationCap, title: "Training", desc: "Hands-on AI bootcamps, mentorship, and career-grade curricula." },
  { icon: Briefcase, title: "Hiring", desc: "We connect bias-free talent with mission-driven AI teams." },
];

const why = [
  { icon: ShieldCheck, title: "Bias-free automation", desc: "Audited models with explainable, equitable decisions by design." },
  { icon: Clock, title: "10× time saved", desc: "Replace repetitive workflows with intelligent agents that learn." },
  { icon: Brain, title: "AI-driven decisions", desc: "Real-time insights from data your team already owns." },
];

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-hero">
        <Scene3D />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium"
          >
            <Sparkles className="h-3 w-3 text-primary" />
            Sanskrati × Work × Automation
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
          >
            Sanixor<span className="text-gradient">.AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Automating intelligence. Eliminating bias. We build the AI infrastructure that gives your time, decisions, and people back to you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105">
              Explore Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="rounded-full glass px-7 py-3.5 text-sm font-semibold transition-smooth hover:scale-105">
              Talk to us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">About</p>
            <h2 className="text-4xl font-bold md:text-5xl">Intelligence, without the bias.</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Sanixor.AI fuses culture (<em>Sanskrati</em>), work, and automation. We build AI products and pipelines that remove human bias, save thousands of hours, and create real career paths in the age of intelligent machines.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative aspect-square">
            <div className="absolute inset-0 animate-pulse-glow rounded-3xl bg-gradient-accent opacity-40 blur-3xl" />
            <div className="relative h-full w-full rounded-3xl glass-strong p-8 noise">
              <div className="grid h-full grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-xl bg-gradient-primary opacity-[var(--o)] animate-float" style={{ ['--o' as never]: 0.2 + (i % 5) * 0.15, animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">What we offer</h2>
          <p className="mt-3 text-muted-foreground">Three pillars. One mission.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((o, i) => (
            <GlassCard key={o.title} delay={i * 0.1}>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <o.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{o.title}</h3>
              <p className="text-sm text-muted-foreground">{o.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Why Sanixor</p>
          <h2 className="text-4xl font-bold md:text-5xl">Built for the next decade of work.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {why.map((w, i) => (
            <GlassCard key={w.title} delay={i * 0.1} className="text-center">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl glass animate-float">
                <w.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{w.title}</h3>
              <p className="text-sm text-muted-foreground">{w.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="glass-strong relative overflow-hidden rounded-[2rem] p-10 md:p-16 shadow-elegant">
          <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-4 text-center">
            {[
              { v: 12000, s: "+", l: "Hours automated" },
              { v: 38, s: "+", l: "Enterprise clients" },
              { v: 96, s: "%", l: "Bias reduction" },
              { v: 24, s: "/7", l: "AI uptime" },
            ].map((stat) => (
              <div key={stat.l}>
                <div className="text-5xl font-bold text-gradient md:text-6xl">
                  <Counter value={stat.v} suffix={stat.s} />
                </div>
                <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{stat.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Trusted by forward thinkers</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { q: "Sanixor reshaped how we hire — fairer, faster, and 10× cheaper.", a: "Aarav K.", r: "Head of Talent, FinEdge" },
            { q: "Their AI agents replaced our manual ops queue in two weeks.", a: "Mira S.", r: "COO, NovaCloud" },
            { q: "The training program turned our analysts into AI engineers.", a: "Rohit V.", r: "VP Engineering, OrbitData" },
          ].map((t, i) => (
            <GlassCard key={i} delay={i * 0.1}>
              <p className="text-base leading-relaxed">"{t.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary" />
                <div>
                  <div className="text-sm font-semibold">{t.a}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </Layout>
  );
}
