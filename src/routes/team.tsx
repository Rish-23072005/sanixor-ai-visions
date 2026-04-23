import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Layout } from "@/components/sanixor/Layout";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Sanixor.AI" },
      { name: "description", content: "Meet the team building Sanixor.AI." },
      { property: "og:title", content: "Team — Sanixor.AI" },
      { property: "og:description", content: "Engineers, researchers, and designers behind Sanixor.AI." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Aditi Rao", role: "Founder & CEO", hue: 200 },
  { name: "Kabir Sen", role: "CTO", hue: 230 },
  { name: "Nia Verma", role: "Head of AI Research", hue: 280 },
  { name: "Vikram J.", role: "Head of Design", hue: 170 },
  { name: "Saanvi P.", role: "Lead Engineer — HackEval", hue: 210 },
  { name: "Arjun M.", role: "Lead Engineer — BitBench", hue: 260 },
  { name: "Riya N.", role: "Growth & Partnerships", hue: 190 },
  { name: "Dev S.", role: "AI Trainer", hue: 240 },
];

function TeamPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-12 text-center">
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-bold md:text-7xl">
          The <span className="text-gradient">people</span> behind it.
        </motion.h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Engineers, researchers, and designers building the bias-free AI future.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-3xl glass shadow-elegant transition-smooth hover:shadow-glow"
          >
            <div className="aspect-[3/4] w-full overflow-hidden">
              <div
                className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  background: `radial-gradient(circle at 30% 30%, oklch(0.7 0.15 ${m.hue}), oklch(0.25 0.08 ${m.hue + 30}))`,
                }}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background via-background/80 to-transparent p-5 transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="text-xs text-muted-foreground">{m.role}</p>
              <div className="mt-3 flex gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {[Linkedin, Twitter, Github].map((Icon, k) => (
                  <a key={k} href="#" className="grid h-8 w-8 place-items-center rounded-full glass hover:text-primary">
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </Layout>
  );
}