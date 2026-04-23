import type { ReactNode, HTMLAttributes } from "react";
import { motion } from "framer-motion";

type Props = HTMLAttributes<HTMLDivElement> & { children: ReactNode; delay?: number };

export function GlassCard({ children, className = "", delay = 0, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`glass relative overflow-hidden rounded-3xl p-8 shadow-elegant transition-smooth hover:shadow-glow ${className}`}
      {...(rest as object)}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100" style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), oklch(0.62 0.11 207 / 0.15), transparent 40%)" }} />
      {children}
    </motion.div>
  );
}