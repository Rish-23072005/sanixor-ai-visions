import { useState, useEffect } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Check,
  Clock,
  MessageCircle,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/sanixor/Layout";

const topics = ["General Inquiry", "Product Demo", "Training", "Partnership", "Careers", "Press"];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@sanixor.ai", color: 220 },
  { icon: MapPin, label: "Office", value: "Bengaluru, India", color: 170 },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", color: 280 },
  { icon: Zap, label: "Status", value: "Typically online", color: 210 },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
              Let's <span className="text-gradient">connect.</span>
            </h1>
            <p className="mx-auto text-xl text-muted-foreground mb-8">
              Have questions? Want to demo our products? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="mx-auto max-w-6xl px-6 -mt-16 pb-20">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass-strong rounded-[2rem] p-8 shadow-elegant">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  setTimeout(() => setSent(false), 3000);
                }}
                className="space-y-5"
              >
                {/* Topic selector */}
                <div>
                  <label className="text-sm font-medium mb-3 block">What can we help with?</label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          selectedTopic === topic
                            ? "bg-gradient-primary text-primary-foreground"
                            : "glass hover:bg-muted"
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl bg-muted/40 px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-primary"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl bg-muted/40 px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-primary"
                  />
                </div>
                <input
                  required
                  placeholder="Company (optional)"
                  className="w-full rounded-xl bg-muted/40 px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-primary"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us more about what you're looking for..."
                  className="w-full rounded-xl bg-muted/40 px-4 py-3 text-sm outline-none ring-1 ring-border focus:ring-primary resize-none"
                />

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.02]"
                >
                  {sent ? (
                    <>
                      <Check className="h-5 w-5" /> Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="glass rounded-2xl p-6 transition-all duration-300 hover:shadow-glow"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, oklch(0.6 0.15 ${info.color}), oklch(0.4 0.12 ${info.color + 30}))`,
                    }}
                  >
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="font-semibold">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="glass rounded-2xl overflow-hidden">
              <iframe
                title="Sanixor.AI office"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.55%2C12.93%2C77.65%2C13.02&layer=mapnik"
                className="h-48 w-full border-0"
                loading="lazy"
              />
            </div>

            {/* Social */}
            <div className="glass rounded-2xl p-6">
              <p className="text-sm font-medium mb-4">Follow us</p>
              <div className="flex gap-3">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="glass-strong rounded-[2rem] p-8 md:p-12 text-center shadow-elegant">
          <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Have questions first?</h2>
          <p className="text-muted-foreground mb-6">
            Check our FAQ or browse documentation for quick answers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            >
              View Products <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/training"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-muted"
            >
              Learn about Training
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
