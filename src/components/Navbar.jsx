import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import ReloqqLogo from "../assets/Reloqq.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#031F1D]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <img
              src={ReloqqLogo}
              alt="Reloqq"
              className="h-7 w-auto object-contain brightness-0 invert"
              draggable={false}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/60 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                style={{ fontFamily: "'Utendo', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="hidden rounded-full bg-[#D2E7D6] px-5 py-2.5 text-sm font-semibold text-[#0B2A24] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D2E7D6]/20 sm:inline-flex"
              style={{ fontFamily: "'Utendo', sans-serif" }}
            >
              Join the Waitlist
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[65px] z-40 border-b border-white/10 bg-[#031F1D]/95 px-5 pb-6 pt-4 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  style={{ fontFamily: "'Utendo', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full bg-[#D2E7D6] py-3 text-center text-sm font-semibold text-[#0B2A24]"
                style={{ fontFamily: "'Utendo', sans-serif" }}
              >
                Join the Waitlist
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}