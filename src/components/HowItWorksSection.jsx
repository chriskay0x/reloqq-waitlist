import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  UserCheck,
  ClipboardList,
  BadgeCheck,
  Search,
  CalendarCheck,
  FileSignature,
  KeyRound,
  ShieldCheck,
  Telescope,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const flows = {
  renter: {
    label: "For Renters",
    eyebrow: "Search remotely. Move confidently. No scams.",
    steps: [
      {
        icon: <Search size={20} strokeWidth={1.5} />,
        title: "Search With Confidence",
        body: "Every listing you see has been reviewed before it reaches you. Filter by location, budget, and property type, and know that what you're looking at is real.",
      },
      {
        icon: <ClipboardList size={20} strokeWidth={1.5} />,
        title: "Understand What You're Getting",
        body: "Full property profiles with verified details, accurate pricing, and everything you need to make a sound decision, before you take the next step.",
      },
      {
        icon: <Telescope size={20} strokeWidth={1.5} />,
        title: "Evaluate From Wherever You Are",
        body: "You don't have to be on the ground to make a confident decision. Reloqq gives you the means to assess a property thoroughly, even from across the country.",
      },
      {
        icon: <FileSignature size={20} strokeWidth={1.5} />,
        title: "Secure Your Home. Safely.",
        body: "When you're ready to commit, the process is clean, documented, and protected. Your money doesn't move until you're sure, and neither does the agreement.",
      },
    ],
  },
  landlord: {
    label: "For Landlords",
    eyebrow: "List with confidence. Attract serious renters only.",
    steps: [
      {
        icon: <UserCheck size={20} strokeWidth={1.5} />,
        title: "Establish Your Credibility",
        body: "The foundation of everything on Reloqq is trust. Landlords go through a straightforward process to confirm who they are and what they own, so renters approach with confidence.",
      },
      {
        icon: <Building2 size={20} strokeWidth={1.5} />,
        title: "Put Your Property in Front of the Right People",
        body: "Create a detailed, honest listing that speaks to serious renters. Our platform is built to connect verified properties with qualified, committed applicants.",
      },
      {
        icon: <CalendarCheck size={20} strokeWidth={1.5} />,
        title: "Manage Interest on Your Terms",
        body: "When prospective renters want to take a closer look, you're in control of how and when that happens. No tyre-kickers, no wasted afternoons.",
      },
      {
        icon: <BadgeCheck size={20} strokeWidth={1.5} />,
        title: "Close With Clarity",
        body: "Choose your tenant, finalise the agreement, and receive your payment through a process that's structured, documented, and designed to protect both parties.",
      },
    ],
  },
};

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState("renter");
  const flow = flows[activeTab];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#031F1D] px-5 py-24 lg:px-8 lg:py-32"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, rgba(210,231,214,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ── Section Header ── */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            {...fadeUp(0)}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2E7D6]/50"
            style={{ fontFamily: "'Utendo', sans-serif" }}
          >
            How It Works
          </motion.p>

          <motion.h2
            {...fadeUp(0.08)}
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Utendo', sans-serif" }}
          >
            Simple Steps.{" "}
            <span className="bg-gradient-to-r from-[#D2E7D6] to-[#8cbf96] bg-clip-text text-transparent">
              Zero Surprises.
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-5 text-base leading-relaxed text-white/45 sm:text-lg"
            style={{ fontFamily: "'Utendo', sans-serif" }}
          >
            Whether you're listing a property or looking for your next home,
            Reloqq is built to make the process straightforward for both sides.
          </motion.p>
        </div>

        {/* ── Tab Switcher ── */}
        <motion.div
          {...fadeUp(0.24)}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
            {Object.entries(flows).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${activeTab === key
                  ? "text-[#0B2A24]"
                  : "text-white/50 hover:text-white/80"
                  }`}
                style={{ fontFamily: "'Utendo', sans-serif" }}
              >
                {activeTab === key && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-[#D2E7D6]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{val.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Eyebrow under tab ── */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab + "-eyebrow"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-5 text-center text-sm text-[#D2E7D6]/50"
            style={{ fontFamily: "'Utendo', sans-serif" }}
          >
            {flow.eyebrow}
          </motion.p>
        </AnimatePresence>

        {/* ── Steps Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {flow.steps.map((step, i) => (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D2E7D6]/15"
              >
                {/* Top shimmer */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

                {/* Icon + step number */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#D2E7D6]/15 bg-[#D2E7D6]/8 text-[#D2E7D6]">
                    {step.icon}
                  </div>
                  <span
                    className="text-3xl font-bold text-white/[0.06] tabular-nums"
                    style={{ fontFamily: "'Utendo', sans-serif" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className="text-base font-bold leading-snug text-white sm:text-lg"
                  style={{ fontFamily: "'Utendo', sans-serif" }}
                >
                  {step.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-relaxed text-white/40"
                  style={{ fontFamily: "'Utendo', sans-serif" }}
                >
                  {step.body}
                </p>

                {/* Connector dot */}
                {i < flow.steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -right-2.5 top-1/2 hidden h-5 w-5 -translate-y-1/2 items-center justify-center lg:flex"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#D2E7D6]/25" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA nudge ── */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-14 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-full bg-[#D2E7D6] px-7 py-3.5 text-sm font-semibold text-[#0B2A24] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#D2E7D6]/15"
            style={{ fontFamily: "'Utendo', sans-serif" }}
          >
            Secure Your Spot on the Waitlist
          </a>
          <p
            className="text-xs text-white/30"
            style={{ fontFamily: "'Utendo', sans-serif" }}
          >
            Free to join · Early access guaranteed
          </p>
        </motion.div>
      </div>
    </section>
  );
}