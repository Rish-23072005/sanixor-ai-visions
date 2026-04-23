import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Code2, Gauge, BarChart3, Bot, Workflow, X } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/sanixor/Layout";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Sanixor.AI" },
      { name: "description", content: "HackEval, BitBench, and MCP — production AI products from Sanixor.AI." },
      { property: "og:title", content: "Products — Sanixor.AI" },
      { property: "og:description", content: "HackEval, BitBench, MCP — AI products that ship outcomes." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  { id: "hackeval", name: "HackEval", tag: "Flagship · AI Hackathon Evaluation", icon: Code2, desc: "AI-powered multi-agent hackathon evaluation system — transparent, intelligent, and automated. Solves slow, biased, inconsistent manual judging.", features: ["AI-based project evaluation", "Bias-free scoring", "Real-time leaderboard", "Automated judge assignment", "Scalable for large events"] },
  { id: "bitbenchmark", name: "BitBenchmark", tag: "Performance Intelligence", icon: Gauge, desc: "Standardized AI-driven benchmarking platform for systems, models, and workflows — with real-time comparative analytics.", features: ["AI model performance benchmarking", "System efficiency scoring", "Comparative analytics dashboards", "Real-time performance insights"] },
  { id: "autodash", name: "AutoDash", tag: "Analytics & Dashboard Automation", icon: BarChart3, desc: "AI-powered analytics platform that auto-generates dashboards and predictive reports across your data stack.", features: ["Automated dashboard generation", "Real-time data visualization", "Power BI / Tableau / SQL integration", "Predictive insights & reporting"] },
];

const services = [
  { name: "Agent as a Service (AaaS)", icon: Bot, desc: "Deploy intelligent AI agents without infrastructure complexity.", points: ["Multi-agent systems", "Task automation agents", "Conversational AI agents", "Workflow orchestration"] },
  { name: "Customized Agentic Solutions", icon: Workflow, desc: "Tailor-made AI systems designed for specific business needs.", points: ["End-to-end automation", "Domain-specific AI agents", "Enterprise workflow automation", "Decision intelligence systems"] },
];

const tiers = [
  { name: "Free", price: "$0", desc: "Get started with core capabilities.", features: ["Community access", "Core product features", "Limited usage"] },
  { name: "Pro", price: "$49", desc: "For professionals and growing teams.", features: ["All Free features", "Premium features", "Priority support", "Continuous updates"] },
  { name: "Enterprise", price: "Custom", desc: "Scalable, secure, and supported.", features: ["Custom integrations", "Dedicated SLAs", "Security & compliance", "On-prem / private cloud"] },
];

function ProductsPage() {
  const [open, setOpen] = useState<string | null>(null);
  const active = products.find((p) => p.id === open);

  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-12 text-center">
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-bold md:text-7xl">
          Our <span className="text-gradient">Products</span>
        </motion.h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Three flagship platforms — designed, engineered, and battle-tested by Sanixor.AI.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-3">
        {products.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
            <Tilt glareEnable glareMaxOpacity={0.2} glareColor="#5fd0e0" glarePosition="all" tiltMaxAngleX={8} tiltMaxAngleY={8} transitionSpeed={1500} className="h-full">
              <button onClick={() => setOpen(p.id)} className="group relative h-full w-full overflow-hidden rounded-3xl glass p-8 text-left shadow-elegant transition-smooth hover:shadow-glow">
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "var(--gradient-accent)" }} />
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary shadow-glow">
                  <p.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-primary">{p.tag}</p>
                <h3 className="mt-2 text-3xl font-bold">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 inline-flex items-center text-sm font-medium text-primary">Learn more →</div>
              </button>
            </Tilt>
          </motion.div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Services</p>
          <h2 className="text-4xl font-bold md:text-5xl">Agentic AI, delivered.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-3xl glass p-8 shadow-elegant">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" /> {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SUBSCRIPTION */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Subscription</p>
          <h2 className="text-4xl font-bold md:text-5xl">Plans that scale with you.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className={`relative rounded-3xl p-8 shadow-elegant ${i === 1 ? "glass-strong ring-2 ring-primary" : "glass"}`}>
              {i === 1 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">Most popular</span>}
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-4xl font-bold text-gradient">{t.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}</li>
                ))}
              </ul>
              <button className="mt-7 w-full rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02]">Get started</button>
            </motion.div>
          ))}
        </div>
      </section>

      {active && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setOpen(null)} className="fixed inset-0 z-[200] grid place-items-center bg-background/70 backdrop-blur-xl p-6">
          <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-2xl rounded-3xl glass-strong p-10 shadow-elegant">
            <button onClick={() => setOpen(null)} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass">
              <X className="h-4 w-4" />
            </button>
            <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary shadow-glow">
              <active.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold">{active.name}</h3>
            <p className="mt-2 text-sm uppercase tracking-wider text-primary">{active.tag}</p>
            <p className="mt-4 text-muted-foreground">{active.desc}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {active.features.map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-xl glass p-3 text-sm">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-glow" /> {f}
                </li>
              ))}
            </ul>
            <button className="mt-8 rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105">Request demo</button>
          </motion.div>
        </motion.div>
      )}
    </Layout>
  );
}