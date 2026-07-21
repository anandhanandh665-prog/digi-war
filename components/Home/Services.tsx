"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Bot,
  MessageCircle,
  Megaphone,
  Store,
  Palette,
  Database,
  type LucideIcon,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Tailwind col-span classes controlling this card's footprint in the bento grid */
  span: string;
  featured?: boolean;
}

const SERVICES: Service[] = [
  {
    title: "Website Development",
    description:
      "Fast, conversion-focused websites built on modern frameworks — designed to perform as well as they look.Business websites, landing pages, ecommerce stores and corporate websites.",
    icon: Globe,
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    title: "AI Automation",
    description:
      "Custom AI workflows that cut manual work, personalize customer journeys, and scale operations without scaling headcount,AI Chatbots, AI Calling, Workflow Automation and Business Process Automation.",
    icon: Bot,
    span: "sm:col-span-2 lg:col-span-2",
    featured: true,
  },
  {
    title: "Ecommerce Solutions",
    description:
      "High-converting storefronts and checkout experiences built for D2C and retail brands.",
    icon: ShoppingCart,
    span: "sm:col-span-1 lg:col-span-1",
  },
  {
    title: "WhatsApp Automation",
    description:
      "Automated support, order updates, and lead nurturing delivered where your customers already are.",
    icon: MessageCircle,
    span: "sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Digital Marketing",
    description:
      "Performance campaigns across search and social, built around measurable growth, not vanity metrics.",
    icon: Megaphone,
    span: "sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Marketplace Management",
    description:
      "End-to-end management across Amazon, Flipkart, Meesho and Quick Commerce platforms — listings, ads, and fulfillment.",
    icon: Store,
    span: "sm:col-span-1 lg:col-span-1",
  },
  {
    title: "Branding & Design",
    description:
      "Distinct visual identities — logo, brand system, and design language — built to be remembered.",
    icon: Palette,
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    title: "CRM Solutions",
    description:
      "Centralized customer data and pipelines that turn leads into repeat customers, automatically.",
    icon: Database,
    span: "sm:col-span-2 lg:col-span-2",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-[#0A0A0C] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section header */}
        <div className="mx-auto max-w-[640px] text-center">
          <h2
            id="services-heading"
            className="text-balance text-[32px] font-bold leading-tight tracking-tight text-[#F5F5F7] sm:text-[42px]"
          >
            Everything Your Business Needs to Grow
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-[#9A9AA5] sm:text-lg">
            From launching your brand to automating operations, Digi War
            provides complete digital growth solutions.
          </p>
        </div>

        {/* Bento grid */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map(({ title, description, icon: Icon, span, featured }) => (
            <motion.li
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-colors duration-300 sm:p-7 ${span} ${
                featured
                  ? "border-[#5B5FEF]/30 bg-gradient-to-br from-[#5B5FEF]/10 via-white/[0.03] to-[#3DD9EB]/5 hover:border-[#5B5FEF]/50"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
              }`}
            >
              {/* Ambient glow on featured card */}
              {featured && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#5B5FEF]/25 blur-[80px] transition-opacity duration-300 group-hover:opacity-80"
                />
              )}

              <div className="relative flex h-full flex-col">
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${
                    featured
                      ? "border-[#5B5FEF]/40 bg-[#5B5FEF]/15"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      featured ? "text-[#3DD9EB]" : "text-[#9A9AA5]"
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#F5F5F7]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9A9AA5]">
                  {description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}