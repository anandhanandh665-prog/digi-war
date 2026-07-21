"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Users, TrendingUp } from "lucide-react";

const TRUST_BADGES = [
  { icon: Users, label: "50+ Brands Scaled" },
  { icon: TrendingUp, label: "180% Avg. Growth" },
  { icon: ShieldCheck, label: "6 Industries Served" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#0A0A0C] px-6 pt-24 pb-16 sm:px-8 lg:px-10"
    >
      {/* Ambient background glow — decorative only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#5B5FEF]/25 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[10%] h-[420px] w-[420px] rounded-full bg-[#3DD9EB]/15 blur-[130px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex w-full max-w-[880px] flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[#9A9AA5]"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#3DD9EB]" aria-hidden="true" />
          AI-Powered Growth Agency
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-balance text-[40px] font-bold leading-[1.05] tracking-tight text-[#F5F5F7] sm:text-[56px] lg:text-[72px]"
        >
          Launch.{" "}
          <span className="bg-gradient-to-r from-[#5B5FEF] to-[#3DD9EB] bg-clip-text text-transparent">
            Automate.
          </span>{" "}
          Scale.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-[620px] text-balance text-base leading-relaxed text-[#9A9AA5] sm:text-lg"
        >
          Helping Startups, D2C and B2B Brands grow with Websites, Ecommerce,
          AI Automation and Digital Marketing.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#5B5FEF] px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C] focus-visible:ring-[#5B5FEF] sm:w-auto"
            >
              Free Consultation
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-[#F5F5F7] transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C] focus-visible:ring-[#5B5FEF] sm:w-auto"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust badges */}
        <motion.ul
          variants={itemVariants}
          aria-label="Trust indicators"
          className="mt-14 flex w-full flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-center sm:gap-10"
        >
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-sm font-medium text-[#9A9AA5]"
            >
              <Icon className="h-4 w-4 text-[#3DD9EB]" aria-hidden="true" />
              {label}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}