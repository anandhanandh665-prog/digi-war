"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { MobileMenu, type NavLink } from "./MobileMenu";

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const scrolled = useScrollPosition(24);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close the mobile menu automatically if the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0A0A0C]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-10"
      >
        {/* Logo — left */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF] rounded-md"
        >
          Digi
          <span className="bg-gradient-to-r from-[#5B5FEF] to-[#3DD9EB] bg-clip-text text-transparent">
            War
          </span>
        </Link>

        {/* Desktop nav — centered */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF] rounded-md ${
                    isActive ? "text-white" : "text-[#9A9AA5] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA — right */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:block"
        >
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#5B5FEF] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C] focus-visible:ring-[#5B5FEF]"
          >
            Free Consultation
          </Link>
        </motion.div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF]"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {/* Mobile slide-down menu */}
        <MobileMenu
          links={NAV_LINKS}
          activeHref={pathname}
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        />
      </nav>
    </header>
  );
}
