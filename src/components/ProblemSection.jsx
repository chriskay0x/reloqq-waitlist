import { motion } from "motion/react";
import { AlertTriangle, EyeOff, TrendingDown, Ban } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const painPoints = [
    {
        icon: <Ban size={20} className="text-rose-400/80" />,
        tag: "Scam Risk",
        title: "Fake Listings. Real Money Lost.",
        body: "Thousands of Nigerians pay rent upfront for properties that don't exist, or that belong to someone else entirely. The damage isn't just financial, it derails entire life plans.",
        accent: "rose",
    },
    {
        icon: <EyeOff size={20} className="text-amber-400/80" />,
        tag: "Information Asymmetry",
        title: "You Never Know What You're Actually Getting.",
        body: "Photos are staged, prices are inflated post-inspection, and agent-only markets keep renters in the dark. By the time you arrive, the deal has changed.",
        accent: "amber",
    },
    {
        icon: <TrendingDown size={20} className="text-orange-400/80" />,
        tag: "Relocation Blindspot",
        title: "Moving Cities Shouldn't Feel Like a Gamble.",
        body: "For anyone relocating from Lagos to Abuja, or Port Harcourt to Ibadan, finding a home without being on ground is nearly impossible and blindly trusting strangers is the only option.",
        accent: "orange",
    },
];

const accentMap = {
    rose: {
        icon: "bg-rose-500/10 border-rose-500/20",
        tag: "text-rose-400/70",
        border: "hover:border-rose-500/20",
    },
    amber: {
        icon: "bg-amber-500/10 border-amber-500/20",
        tag: "text-amber-400/70",
        border: "hover:border-amber-500/20",
    },
    orange: {
        icon: "bg-orange-500/10 border-orange-500/20",
        tag: "text-orange-400/70",
        border: "hover:border-orange-500/20",
    },
};

export default function ProblemSection() {
    return (
        <section
            id="problem"
            className="relative overflow-hidden bg-[#031F1D] px-5 py-24 lg:px-8 lg:py-32"
        >
            {/* Ambient glow — top right */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-20"
                style={{
                    background:
                        "radial-gradient(circle, rgba(210,231,214,0.12) 0%, transparent 70%)",
                }}
            />

            <div className="relative mx-auto max-w-7xl">

                {/* ── Section Header ── */}
                <div className="max-w-2xl">
                    <motion.p
                        {...fadeUp(0)}
                        className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#D2E7D6]/50"
                        style={{ fontFamily: "'Utendo', sans-serif" }}
                    >
                        The Problem
                    </motion.p>

                    <motion.h2
                        {...fadeUp(0.08)}
                        className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
                        style={{ fontFamily: "'Utendo', sans-serif" }}
                    >
                        The Nigerian Rental
                        <br />
                        Market Is{" "}
                        <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                            Broken.
                        </span>
                    </motion.h2>

                    <motion.p
                        {...fadeUp(0.16)}
                        className="mt-5 text-base leading-relaxed text-white/45 sm:text-lg"
                        style={{ fontFamily: "'Utendo', sans-serif" }}
                    >
                        Renting in Nigeria is a high-stakes exercise in blind trust.
                        Scams are widespread, information is controlled by gatekeepers,
                        and the burden of proof always falls on the renter.
                    </motion.p>
                </div>

                {/* ── Bento Grid ── */}
                <div className="mt-14 grid gap-5 lg:grid-cols-3">

                    {/* Pain point cards — col 1 & 2 */}
                    {painPoints.slice(0, 2).map((item, i) => {
                        const colors = accentMap[item.accent];
                        return (
                            <motion.div
                                key={item.title}
                                {...fadeUp(0.12 + i * 0.1)}
                                className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-300 ${colors.border} hover:-translate-y-1`}
                            >
                                {/* Faint top-edge glow line */}
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                <div
                                    className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border ${colors.icon}`}
                                >
                                    {item.icon}
                                </div>

                                <p
                                    className={`mb-2 text-xs font-semibold uppercase tracking-widest ${colors.tag}`}
                                    style={{ fontFamily: "'Utendo', sans-serif" }}
                                >
                                    {item.tag}
                                </p>

                                <h3
                                    className="text-lg font-bold leading-snug text-white sm:text-xl"
                                    style={{ fontFamily: "'Utendo', sans-serif" }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="mt-3 text-sm leading-relaxed text-white/45"
                                    style={{ fontFamily: "'Utendo', sans-serif" }}
                                >
                                    {item.body}
                                </p>
                            </motion.div>
                        );
                    })}

                    {/* Right column — stat card (tall) + pain card */}
                    <div className="flex flex-col gap-5">

                        {/* Big stat card */}
                        <motion.div
                            {...fadeUp(0.4)}
                            className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#0B2A24]/60 p-7 backdrop-blur-md"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D2E7D6]/15 to-transparent" />

                            <AlertTriangle size={20} className="mb-5 text-[#D2E7D6]/60" />

                            <p
                                className="text-5xl font-bold text-white lg:text-6xl"
                                style={{ fontFamily: "'Utendo', sans-serif" }}
                            >
                                ₦4.2B+
                            </p>
                            <p
                                className="mt-2 text-sm font-semibold text-[#D2E7D6]/70"
                                style={{ fontFamily: "'Utendo', sans-serif" }}
                            >
                                Lost to rental fraud annually
                            </p>
                            <p
                                className="mt-3 text-xs leading-relaxed text-white/35"
                                style={{ fontFamily: "'Utendo', sans-serif" }}
                            >
                                Estimated losses across Nigeria's urban rental markets -
                                Abuja, Lagos, Owerri, Port Harcourt, and Ibadan, etc., driven by
                                unverified listings and impersonation.
                            </p>
                        </motion.div>

                        {/* Third pain point */}
                        {(() => {
                            const item = painPoints[2];
                            const colors = accentMap[item.accent];
                            return (
                                <motion.div
                                    {...fadeUp(0.4)}
                                    className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-300 ${colors.border} hover:-translate-y-1`}
                                >
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                    <div
                                        className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border ${colors.icon}`}
                                    >
                                        {item.icon}
                                    </div>

                                    <p
                                        className={`mb-2 text-xs font-semibold uppercase tracking-widest ${colors.tag}`}
                                        style={{ fontFamily: "'Utendo', sans-serif" }}
                                    >
                                        {item.tag}
                                    </p>

                                    <h3
                                        className="text-lg font-bold leading-snug text-white sm:text-xl"
                                        style={{ fontFamily: "'Utendo', sans-serif" }}
                                    >
                                        {item.title}
                                    </h3>

                                    <p
                                        className="mt-3 text-sm leading-relaxed text-white/45"
                                        style={{ fontFamily: "'Utendo', sans-serif" }}
                                    >
                                        {item.body}
                                    </p>
                                </motion.div>
                            );
                        })()}
                    </div>
                </div>

                {/* ── Bottom callout strip ── */}
                <motion.div
                    {...fadeUp(0.48)}
                    className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-[#D2E7D6]/10 bg-[#D2E7D6]/5 p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between"
                >
                    <p
                        className="text-sm leading-relaxed text-white/50"
                        style={{ fontFamily: "'Utendo', sans-serif" }}
                    >
                        <span className="font-semibold text-[#D2E7D6]/80">Reloqq was built in direct response to this.</span>{" "}
                        A platform where trust is the infrastructure, not an afterthought.
                    </p>
                    <a
                        href="#features"
                        className="shrink-0 text-sm font-semibold text-[#D2E7D6]/70 transition-colors hover:text-[#D2E7D6]"
                        style={{ fontFamily: "'Utendo', sans-serif" }}
                    >
                        See how we solve it →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}