import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Code2, Github, Share2, X } from "lucide-react";
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
  { id: "hackeval", name: "HackEval", tag: "AI Hackathon Evaluation", icon: Code2, desc: "Auto-evaluates hackathon submissions across code quality, originality, and impact — bias-free judging at scale.", features: ["Plagiarism detection", "Multi-criteria scoring", "Live leaderboard", "Team analytics"] },
  { id: "bitbench", name: "BitBench", tag: "LeetCode × GitHub fusion", icon: Github, desc: "A unified developer benchmark that fuses LeetCode skill with real GitHub contributions to score true engineering ability.", features: ["GitHub deep-scan", "Algo difficulty index", "Recruiter dashboard", "Verified profiles"] },
  { id: "mcp", name: "MCP", tag: "Social Media Automation", icon: Share2, desc: "Multi-channel content pipeline — schedule, generate, and analyze brand posts across every platform with one AI brain.", features: ["AI copy & visuals", "Cross-posting", "Engagement insights", "Brand voice tuning"] },
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