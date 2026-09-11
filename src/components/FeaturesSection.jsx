import { motion } from "motion/react";
import {
  ShieldCheck,
  Search,
  FileText,
  Lock,
  BadgeCheck,
  Fingerprint,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const features = [
  {
    icon: <ShieldCheck size={18} strokeWidth={1.5} />,
    tag: "Verification",
    title: "Every Listing is Confirmed Real",
    body: "Before anything goes public, it goes through us. Ownership, identity, pricing are independently reviewed. No listing reaches you unverified.",
  },
  {
    icon: <Fingerprint size={18} strokeWidth={1.5} />,
    tag: "Identity",
    title: "Both Sides Are Accountable",
    body: "Landlords know who's renting. Renters know who owns. Mutual verification removes the blind trust that makes fraud possible in the first place.",
  },
  {
    icon: <Search size={18} strokeWidth={1.5} />,
    tag: "Transparency",
    title: "Accurate Pricing. Always.",
    body: "Market-benchmarked rents, no post-inspection price hikes, no hidden charges. What you see when you search is what you pay when you sign.",
  },
  {
    icon: <BadgeCheck size={18} strokeWidth={1.5} />,
    tag: "Confidence",
    title: "Inspect Before You Commit",
    body: "Relocating? You won't need to fly in on faith. Reloqq gives you the tools to evaluate a property thoroughly, on your terms, on your schedule and at your comfort",
  },
  {
    icon: <FileText size={18} strokeWidth={1.5} />,
    tag: "Legal",
    title: "Agreements That Actually Hold",
    body: "Leases are generated, signed, and stored within the platform. No handshake deals, no informal receipts. Every agreement is documented and binding.",
  },
  {
    icon: <Lock size={18} strokeWidth={1.5} />,
    tag: "Security",
    title: "Your Money Moves Last",
    body: "Payments are protected until you've confirmed everything checks out. Landlords don't receive funds before you've received your keys.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#0B2A24] px-5 py-24 lg:px-8 lg:py-32"
    >
      {/* Subtle noise texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[480px] w-[480px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(210,231,214,0.1) 0%, transparent 65%)",
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
            The Platform
          </motion.p>

          <motion.h2
            {...fadeUp(0.08)}
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Utendo', sans-serif" }}
          >
            Every Feature Built Around{" "}
            <span className="bg-gradient-to-r from-[#D2E7D6] to-[#8cbf96] bg-clip-text text-transparent">
              One Thing.
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-5 text-base leading-relaxed text-white/45 sm:text-lg"
            style={{ fontFamily: "'Utendo', sans-serif" }}
          >
            Trust isn't a feature we bolted on. It's the architecture.
            Everything on Reloqq exists to close the gap between what's
            promised and what's delivered.
          </motion.p>
        </div>

        {/* ── Promise Banner ── */}
        <motion.div
          {...fadeUp(0.22)}
          className="relative mt-14 overflow-hidden rounded-2xl border border-[#D2E7D6]/10 bg-[#D2E7D6]/5 px-8 py-10 backdrop-blur-md sm:px-12"
        >
          {/* Top shimmer */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D2E7D6]/25 to-transparent" />

          {/* Glow center */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse, rgba(210,231,214,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#D2E7D6]/50"
                style={{ fontFamily: "'Utendo', sans-serif" }}
              >
                Our Commitment
              </p>
              <h3
                className="text-xl font-bold leading-snug text-white sm:text-2xl"
                style={{ fontFamily: "'Utendo', sans-serif" }}
              >
                No property lists on Reloqq without passing our verification layer.
                No payment moves without protection. No renter or landlord goes in blind.
              </h3>
            </div>
            <div className="shrink-0">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D2E7D6]/15 bg-[#D2E7D6]/8">
                <ShieldCheck size={28} strokeWidth={1.2} className="text-[#D2E7D6]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Feature Cards — 3 col grid ── */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              {...fadeUp(0.1 + i * 0.07)}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D2E7D6]/15 hover:bg-white/[0.06]"
            >
              {/* Top shimmer */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

              {/* Hover corner glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(210,231,214,0.06) 0%, transparent 70%)",
                }}
              />

              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#D2E7D6]/12 bg-[#D2E7D6]/6 text-[#D2E7D6]/80">
                {feature.icon}
              </div>

              <p
                className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-[#D2E7D6]/40"
                style={{ fontFamily: "'Utendo', sans-serif" }}
              >
                {feature.tag}
              </p>

              <h3
                className="text-base font-bold leading-snug text-white sm:text-lg"
                style={{ fontFamily: "'Utendo', sans-serif" }}
              >
                {feature.title}
              </h3>

              <p
                className="mt-2.5 text-sm leading-relaxed text-white/40"
                style={{ fontFamily: "'Utendo', sans-serif" }}
              >
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.div
          {...fadeUp(0.52)}
          className="mt-12 flex flex-col items-center gap-2 text-center"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#D2E7D6]/20 to-transparent" />
          <p
            className="mt-4 text-xs text-white/30"
            style={{ fontFamily: "'Utendo', sans-serif" }}
          >
            Full platform details revealed to waitlist members first.
          </p>
        </motion.div>
      </div>
    </section>
  );
}