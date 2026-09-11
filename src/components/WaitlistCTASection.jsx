import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Users, Sparkles } from "lucide-react";
import ReloqqLogo from "../assets/Reloqq.png";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});


export default function WaitlistCTASection() {
    const [form, setForm] = useState({ name: "", email: "", role: "renter" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim()) {
            setError("Please fill in both fields to join the waitlist.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            // Paste your Supabase Function URL inside the quotes below
            const res = await fetch("https://qiecdnkecadrcyjzhksv.supabase.co/functions/v1/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name.trim(),
                    email: form.email.trim(),
                    role: form.role,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Something went wrong. Please try again.");
                return;
            }

            setSubmitted(true);
        } catch (err) {
            setError("Network error. Please check your connection and try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="waitlist"
            className="relative overflow-hidden bg-[#031F1D] px-5 py-24 lg:px-8 lg:py-36"
        >
            {/* ── Background: full-bleed radial glow ── */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(11,42,36,0.9) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(210,231,214,0.05) 0%, transparent 65%)
          `,
                }}
            />

            {/* Decorative large wordmark ghost */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex select-none items-center justify-center overflow-hidden"
            >
                <img
                    src={ReloqqLogo}
                    alt=""
                    className="w-[80vw] max-w-none opacity-[0.03] blur-[0.5px]"
                    draggable={false}
                />
            </div>

            <div className="relative mx-auto max-w-3xl text-center">

                {/* Pill badge */}
                <motion.div {...fadeUp(0)} className="mb-8 inline-flex">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#D2E7D6]/15 bg-[#D2E7D6]/8 px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#D2E7D6]/70 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D2E7D6] opacity-50" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D2E7D6]" />
                        </span>
                        Waitlist Now Open
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    {...fadeUp(0.08)}
                    className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
                    style={{ fontFamily: "'Utendo', sans-serif" }}
                >
                    Be First Into a
                    <br />
                    <span className="bg-gradient-to-r from-[#D2E7D6] via-[#a8d4af] to-[#8cbf96] bg-clip-text text-transparent">
                        Market That Finally Works.
                    </span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    {...fadeUp(0.16)}
                    className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/45 sm:text-lg"
                    style={{ fontFamily: "'Utendo', sans-serif" }}
                >
                    Reloqq launches in select Nigerian cities. Waitlist members get
                    guaranteed early access, founding benefits, and a housing experience
                    that's built around you, not the gatekeepers.
                </motion.p>

                {/* ── Form ── */}
                <motion.div {...fadeUp(0.32)} className="mt-10">
                    {!submitted ? (
                        <form
                            onSubmit={handleSubmit}
                            className="mx-auto max-w-md space-y-3"
                            noValidate
                        >
                            {/* Role selector */}
                            <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
                                {[
                                    { value: "renter", label: "I'm a Renter" },
                                    { value: "landlord", label: "I'm a Landlord" },
                                ].map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() =>
                                            setForm((prev) => ({ ...prev, role: opt.value }))
                                        }
                                        className={`flex-1 rounded-full py-2.5 text-xs font-semibold transition-all duration-300 ${form.role === opt.value
                                            ? "bg-[#D2E7D6] text-[#0B2A24]"
                                            : "text-white/50 hover:text-white/80"
                                            }`}
                                        style={{ fontFamily: "'Utendo', sans-serif" }}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>

                            {/* Name field */}
                            <div>
                                <label htmlFor="cta-name" className="sr-only">
                                    Full name
                                </label>
                                <input
                                    id="cta-name"
                                    name="name"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-white/25 outline-none backdrop-blur-md transition-all duration-200 focus:border-[#D2E7D6]/40 focus:ring-2 focus:ring-[#D2E7D6]/10"
                                    style={{ fontFamily: "'Utendo', sans-serif" }}
                                />
                            </div>

                            {/* Email field */}
                            <div>
                                <label htmlFor="cta-email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="cta-email"
                                    name="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Your email address"
                                    className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-white/25 outline-none backdrop-blur-md transition-all duration-200 focus:border-[#D2E7D6]/40 focus:ring-2 focus:ring-[#D2E7D6]/10"
                                    style={{ fontFamily: "'Utendo', sans-serif" }}
                                />
                            </div>

                            {/* Error message */}
                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-xs text-rose-400/80"
                                    style={{ fontFamily: "'Utendo', sans-serif" }}
                                >
                                    {error}
                                </motion.p>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D2E7D6] py-4 text-sm font-semibold text-[#0B2A24] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#D2E7D6]/20 disabled:opacity-60 disabled:hover:translate-y-0"
                                style={{ fontFamily: "'Utendo', sans-serif" }}
                            >
                                {loading ? (
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0B2A24] border-t-transparent" />
                                ) : (
                                    <>
                                        Secure My Early Access
                                        <ArrowRight size={15} />
                                    </>
                                )}
                            </button>

                            <p
                                className="text-xs text-white/25"
                                style={{ fontFamily: "'Utendo', sans-serif" }}
                            >
                                No spam. No pressure. Unsubscribe anytime.
                            </p>
                        </form>
                    ) : (
                        /* Success state */
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-[#D2E7D6]/15 bg-[#D2E7D6]/8 p-8 backdrop-blur-md"
                        >
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#D2E7D6]/20 bg-[#D2E7D6]/10">
                                <ShieldCheck size={22} strokeWidth={1.5} className="text-[#D2E7D6]" />
                            </div>
                            <h3
                                className="text-lg font-bold text-white"
                                style={{ fontFamily: "'Utendo', sans-serif" }}
                            >
                                You're on the list.
                            </h3>
                            <p
                                className="mt-2 text-sm leading-relaxed text-white/45"
                                style={{ fontFamily: "'Utendo', sans-serif" }}
                            >
                                We'll reach out with your early access details before we go
                                live. Welcome to Reloqq.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}