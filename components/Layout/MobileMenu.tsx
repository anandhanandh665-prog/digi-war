"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export type NavLink = {
  label: string;
  href: string;
};

interface MobileMenuProps {
  links: NavLink[];
  activeHref: string;
  open: boolean;
  onClose: () => void;
}

const panelVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export function MobileMenu({ links, activeHref, open, onClose }: MobileMenuProps) {
  // Lock body scroll while the menu is open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  // Close on Escape for keyboard accessibility
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="md:hidden absolute left-0 right-0 top-full border-b border-white/10 bg-[#0A0A0C]/95 backdrop-blur-xl"
        >
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-1 px-6 py-6"
          >
            {links.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <motion.li key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF] ${
                      isActive
                        ? "text-white"
                        : "text-[#9A9AA5] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              );
            })}
            <motion.li variants={itemVariants} className="mt-3 px-3">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-full bg-[#5B5FEF] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C] focus-visible:ring-[#5B5FEF]"
              >
                Free Consultation
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
