import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

// Reusable fade-up variant
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function HeroSection() {
  const handleScrollToWaitlist = (e) => {
    e.preventDefault();
    const waitlistElement = document.getElementById("waitlist");
    if (waitlistElement) {
      waitlistElement.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const input = document.getElementById("cta-name");
        if (input) input.focus({ preventScroll: true });
      }, 500);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#031F1D] px-5 pb-24 pt-36 lg:px-8 lg:pt-44"
    >
      {/* ── Ambient background glows ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 50% -10%, rgba(11,42,36,0.95) 0%, transparent 70%),
            radial-gradient(ellipse 55% 45% at 80% 20%, rgba(210,231,214,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 15% 30%, rgba(11,42,36,0.5) 0%, transparent 60%)
          `,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(210,231,214,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(210,231,214,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-4xl text-center">

        {/* Trust pill */}
        <motion.div {...fadeUp(0)} className="mb-8 inline-flex">
          <span
            className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#D2E7D6]/70"
            style={{ fontFamily: "'Utendo', sans-serif" }}>
            Nigeria's First Verified Rental Marketplace
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl"
          style={{ fontFamily: "'Utendo', sans-serif" }}
        >
          Find a Home{" "}
          <span className="relative inline-block">
            <span
              className="relative z-10 bg-gradient-to-r from-[#D2E7D6] to-[#8cbf96] bg-clip-text text-transparent"
            >
              You Can Trust.
            </span>
            {/* Decorative underline glow */}
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D2E7D6]/50 to-transparent"
            />
          </span>
          <br />
          From Anywhere in Nigeria.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg"
          style={{ fontFamily: "'Utendo', sans-serif" }}
        >
          Reloqq is a secure real estate marketplace where every listing is
          verified, every landlord is vetted, and every renter can search,
          inspect, and secure a home remotely, confidently, without fear of
          being scammed.
        </motion.p>

        {/* CTA Button */}
        <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-col items-center justify-center">
          <a
            href="#waitlist"
            onClick={handleScrollToWaitlist}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D2E7D6] px-8 py-4 text-base font-semibold text-[#0B2A24] shadow-lg shadow-[#D2E7D6]/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#D2E7D6]/25 active:translate-y-0 cursor-pointer"
            style={{ fontFamily: "'Utendo', sans-serif" }}
          >
            Get Early Access
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          <p
            className="mt-4 text-xs text-white/30"
            style={{ fontFamily: "'Utendo', sans-serif" }}
          >
            No spam. No pressure. Guaranteed early access & founding benefits.
          </p>
        </motion.div>

        {/* ── Bento stat cards ── */}
        <motion.div
          {...fadeUp(0.45)}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            {
              icon: <ShieldCheck size={18} className="text-[#D2E7D6]" />,
              stat: "100%",
              label: "Verified Listings",
              sub: "Every property independently confirmed",
            },
            {
              icon: <MapPin size={18} className="text-[#D2E7D6]" />,
              stat: "Remote-First",
              label: "Virtual Inspections",
              sub: "Secure a home before you relocate",
            },
            {
              icon: <ShieldCheck size={18} className="text-[#D2E7D6]" />,
              stat: "Zero",
              label: "Hidden Fees",
              sub: "Transparent pricing, no agent surprises",
            },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.5 + i * 0.08,
              }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-md transition-all duration-300 hover:border-[#D2E7D6]/20 hover:bg-white/8"
            >
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5">
                {card.icon}
              </div>
              <p
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Utendo', sans-serif" }}
              >
                {card.stat}
              </p>
              <p
                className="mt-0.5 text-sm font-semibold text-[#D2E7D6]/80"
                style={{ fontFamily: "'Utendo', sans-serif" }}
              >
                {card.label}
              </p>
              <p
                className="mt-1 text-xs leading-relaxed text-white/40"
                style={{ fontFamily: "'Utendo', sans-serif" }}
              >
                {card.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}