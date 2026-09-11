import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "For Renters", href: "#how-it-works" },
    { label: "For Landlords", href: "#how-it-works" },
    { label: "Join Waitlist", href: "#waitlist" },
];

const socials = [
    {
        label: "Twitter / X",
        href: "https://x.com/reloqq_",
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "https://instagram.com/reloqq_",
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/company/reloqq",
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: "Email",
        href: "mailto:hello@reloqq.com",
        icon: <Mail size={15} strokeWidth={1.5} />,
    },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#031F1D]">

            {/* Top edge glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D2E7D6]/15 to-transparent"
            />

            {/* Ambient bottom glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[600px] -translate-x-1/2 opacity-20"
                style={{
                    background:
                        "radial-gradient(ellipse, rgba(210,231,214,0.08) 0%, transparent 70%)",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

                {/* ── Main Footer Grid ── */}
                <motion.div
                    {...fadeUp(0)}
                    className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr]"
                >

                    {/* Col 1 — Brand */}
                    <div className="space-y-5">
                        <a href="/" aria-label="Reloqq home">
                            <span
                                className="text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
                                style={{ fontFamily: "'Utendo', sans-serif" }}
                            >
                                Reloqq
                            </span>
                        </a>

                        <p
                            className="max-w-xs text-sm leading-relaxed text-white/40"
                            style={{ fontFamily: "'Utendo', sans-serif" }}
                        >
                            Nigeria's first secure, fully verified real estate marketplace.
                            Built to eliminate scam risk and information asymmetry from the
                            rental experience permanently.
                        </p>

                        <p
                            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D2E7D6]/40"
                            style={{ fontFamily: "'Utendo', sans-serif" }}
                        >
                            Verified Real Estate · Made for Africa
                        </p>

                        {/* Social links */}
                        <div className="flex items-center gap-2 pt-1">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target={s.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/[0.04] text-white/40 transition-all duration-200 hover:border-[#D2E7D6]/20 hover:bg-white/8 hover:text-[#D2E7D6]/80"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2 — Nav + Contact */}
                    <div>
                        <h3
                            className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/30"
                            style={{ fontFamily: "'Utendo', sans-serif" }}
                        >
                            Explore
                        </h3>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-1.5 text-sm text-white/45 transition-colors duration-200 hover:text-[#D2E7D6]/80"
                                        style={{ fontFamily: "'Utendo', sans-serif" }}
                                    >
                                        {link.label}
                                        <ArrowUpRight
                                            size={12}
                                            className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <h3
                                className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/30"
                                style={{ fontFamily: "'Utendo', sans-serif" }}
                            >
                                Get in Touch
                            </h3>
                            <a
                                href="mailto:hello@reloqq.com"
                                className="text-sm text-white/40 transition-colors duration-200 hover:text-[#D2E7D6]/80"
                                style={{ fontFamily: "'Utendo', sans-serif" }}
                            >
                                hello@reloqq.com
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* ── Bottom bar ── */}
                <motion.div
                    {...fadeUp(0.1)}
                    className="flex flex-col gap-3 border-t border-white/[0.06] py-7 sm:flex-row sm:items-center sm:justify-between"
                >
                    <p
                        className="text-xs text-white/25"
                        style={{ fontFamily: "'Utendo', sans-serif" }}
                    >
                        © {new Date().getFullYear()} Reloqq. All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-xs text-white/25 transition-colors duration-200 hover:text-white/50"
                                style={{ fontFamily: "'Utendo', sans-serif" }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}