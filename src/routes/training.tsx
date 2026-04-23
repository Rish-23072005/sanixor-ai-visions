import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, Rocket, Compass, ArrowRight } from "lucide-react";
import { Layout } from "@/components/sanixor/Layout";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training & Career — Sanixor.AI" },
      { name: "description", content: "AI training programs, internships, and career guidance from Sanixor.AI." },
      { property: "og:title", content: "Training & Career — Sanixor.AI" },
      { property: "og:description", content: "Bootcamps, internships, mentorship — engineered for the AI era." },
    ],
  }),
  component: TrainingPage,
});

const tracks = [
  { icon: GraduationCap, title: "AI Engineering Bootcamp", duration: "12 weeks · Cohort", desc: "Ship a production-grade AI product. Mentorship from Sanixor engineers and weekly live builds." },
  { icon: Rocket, title: "Internship Program", duration: "3–6 months · Paid", desc: "Work on real Sanixor products under senior engineers. Top performers convert to full-time." },
  { icon: Compass, title: "Career Guidance", duration: "1:1 · Lifetime", desc: "Resume reviews, interview prep, and a private network of AI hiring managers." },
];

function TrainingPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-12 text-center">
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-bold md:text-7xl">
          Train. Build. <span className="text-gradient">Lead.</span>
        </motion.h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          A full pathway — from your first AI line of code to your dream AI role.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="relative space-y-10 before:absolute before:left-6 before:top-2 before:h-full before:w-px before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent md:before:left-1/2">
          {tracks.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col gap-6 md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="absolute left-6 top-2 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-primary shadow-glow md:left-1/2" />
              <div className="md:w-1/2 md:px-10">
                <div className="glass rounded-3xl p-7 shadow-elegant transition-smooth hover:shadow-glow">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                    <t.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-primary">{t.duration}</p>
                  <h3 className="mt-1 text-2xl font-bold">{t.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
                  <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-smooth hover:scale-105">
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}