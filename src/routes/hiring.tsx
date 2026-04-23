import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Upload } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/sanixor/Layout";

export const Route = createFileRoute("/hiring")({
  head: () => ({
    meta: [
      { title: "Hiring — Sanixor.AI" },
      { name: "description", content: "Open roles at Sanixor.AI — AI engineering, research, design, and growth." },
      { property: "og:title", content: "Careers at Sanixor.AI" },
      { property: "og:description", content: "Build the future of bias-free AI with us." },
    ],
  }),
  component: HiringPage,
});

const jobs = [
  { role: "Senior AI Engineer", location: "Bengaluru / Remote", type: "Full-time", desc: "Lead production model development across HackEval and BitBench." },
  { role: "ML Research Scientist", location: "Remote", type: "Full-time", desc: "Push the frontier on bias-detection and explainable AI." },
  { role: "Product Designer", location: "Bengaluru", type: "Full-time", desc: "Design premium, interactive surfaces for our AI products." },
  { role: "Growth Engineer", location: "Remote", type: "Full-time", desc: "Own the funnel — from landing to activation, instrumented end-to-end." },
];

function HiringPage() {
  const [applyTo, setApplyTo] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-12 text-center">
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-bold md:text-7xl">
          Build the <span className="text-gradient">future</span> with us.
        </motion.h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Open roles across engineering, research, design, and growth.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-2">
        {jobs.map((j, i) => (
          <motion.div
            key={j.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group glass rounded-3xl p-7 shadow-elegant transition-smooth hover:shadow-glow"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary">
                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{j.role}</h3>
                <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{j.location}</span>
                  <span>· {j.type}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{j.desc}</p>
              </div>
            </div>
            <button onClick={() => setApplyTo(j.role)} className="mt-6 rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-smooth hover:scale-105">
              Apply
            </button>
          </motion.div>
        ))}
      </section>

      {applyTo && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setApplyTo(null)} className="fixed inset-0 z-[200] grid place-items-center bg-background/70 backdrop-blur-xl p-6">
          <motion.form
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => { e.preventDefault(); alert(`Application for ${applyTo} submitted (demo).`); setApplyTo(null); setFile(null); }}
            className="w-full max-w-lg rounded-3xl glass-strong p-8 shadow-elegant"
          >
            <h3 className="text-2xl font-bold">Apply — {applyTo}</h3>
            <div className="mt-6 space-y-4">
              <input required placeholder="Full name" className="w-full rounded-xl bg-muted/40 px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-primary" />
              <input required type="email" placeholder="Email" className="w-full rounded-xl bg-muted/40 px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-primary" />
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-muted/20 p-4 text-sm transition-smooth hover:border-primary">
                <Upload className="h-4 w-4 text-primary" />
                <span className="flex-1 text-muted-foreground">{file ? file.name : "Upload resume (PDF)"}</span>
                <input type="file" accept=".pdf" hidden onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
              </label>
            </div>
            <button type="submit" className="mt-6 w-full rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02]">
              Submit application
            </button>
          </motion.form>
        </motion.div>
      )}
    </Layout>
  );
}