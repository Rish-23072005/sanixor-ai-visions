import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { Layout } from "@/components/sanixor/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sanixor.AI" },
      { name: "description", content: "Get in touch with Sanixor.AI." },
      { property: "og:title", content: "Contact — Sanixor.AI" },
      { property: "og:description", content: "Talk to us about AI products, training, or hiring." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-12 text-center">
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-bold md:text-7xl">
          Let's <span className="text-gradient">talk.</span>
        </motion.h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Tell us what you're building. We respond within one business day.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-5">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
          className="md:col-span-3 rounded-3xl glass-strong p-8 shadow-elegant"
        >
          <div className="space-y-4">
            <input required placeholder="Your name" className="w-full rounded-xl bg-muted/40 px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-primary" />
            <input required type="email" placeholder="Email address" className="w-full rounded-xl bg-muted/40 px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-primary" />
            <textarea required rows={6} placeholder="What can we help with?" className="w-full rounded-xl bg-muted/40 px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-primary resize-none" />
          </div>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105">
            {sent ? "Sent ✓" : <>Send message <Send className="h-4 w-4" /></>}
          </button>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-2 space-y-5"
        >
          <div className="rounded-3xl glass p-6">
            <Mail className="h-5 w-5 text-primary" />
            <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Email</p>
            <p className="font-semibold">hello@sanixor.ai</p>
          </div>
          <div className="rounded-3xl glass p-6">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Office</p>
            <p className="font-semibold">Bengaluru, India</p>
          </div>
          <div className="overflow-hidden rounded-3xl glass">
            <iframe
              title="Sanixor.AI office"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.55%2C12.93%2C77.65%2C13.02&layer=mapnik"
              className="h-48 w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="grid h-11 w-11 place-items-center rounded-full glass transition-smooth hover:scale-110 hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.aside>
      </section>
    </Layout>
  );
}