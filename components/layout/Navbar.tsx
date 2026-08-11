"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      let currentSection = "about";

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = item.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 px-5 transition-all duration-500 sm:px-8 lg:px-12 ${
          scrolled ? "pt-4" : "pt-6"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-375 items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "border-white/10 bg-black/70 shadow-2xl shadow-black/30 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            onClick={handleNavigation}
            className="group flex items-center gap-3"
          >
            <span className="text-sm font-medium tracking-tight text-white">
              Yared Abebe
            </span>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-600 transition-colors duration-300 group-hover:text-neutral-400 sm:inline">
              Software Engineer
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-xs transition-colors duration-300 ${
                    active
                      ? "text-white"
                      : "text-neutral-500 hover:text-white"
                  }`}
                >
                  {item.label}

                  {active && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-transform duration-300 hover:scale-[1.03] md:flex"
          >
            Let&apos;s talk

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:bg-white/5 md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="flex min-h-full flex-col justify-center px-8"
            >
              <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">
                Navigation
              </p>

              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavigation}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                    className={`border-b border-white/10 py-5 text-4xl font-medium tracking-tight transition-colors ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-neutral-500 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#contact"
                onClick={handleNavigation}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.35,
                }}
                className="mt-10 flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black"
              >
                Let&apos;s talk
                <ArrowUpRight size={16} />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}