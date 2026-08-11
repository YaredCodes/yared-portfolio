import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-white"
          >
            Yared Abebe
          </Link>

          <p className="mt-2 text-sm text-neutral-600">
            Software Engineer
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <a
            href="#work"
            className="text-sm text-neutral-500 transition-colors hover:text-white"
          >
            Work
          </a>

          <a
            href="#about"
            className="text-sm text-neutral-500 transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#experience"
            className="text-sm text-neutral-500 transition-colors hover:text-white"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-white"
          >
            Contact
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-700">
          © 2026 Yared Abebe
        </p>

        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-700">
          Built with intention.
        </p>
      </div>
    </footer>
  );
}