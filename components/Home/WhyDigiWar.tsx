"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Layers,
  Rocket,
  ShoppingBag,
  Zap,
  Handshake,
  type LucideIcon,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

interface Reason {
  title: string;
  description: string;
  icon: LucideIcon;
}

const REASONS: Reason[] = [
  {
    title: "AI Powered Solutions",
    description: "Automation, AI chatbots, AI calling and smart workflows.",
    icon: Bot,
  },
  {
    title: "End-to-End Services",
    description:
      "Everything from branding and websites to ecommerce and marketing.",
    icon: Layers,
  },
  {
    title: "Startup & D2C Focus",
    description: "Built specifically for startups, D2C and B2B businesses.",
    icon: Rocket,
  },
  {
    title: "Ecommerce Expertise",
    description: "Amazon, Flipkart, Meesho and Quick Commerce solutions.",
    icon: ShoppingBag,
  },
  {
    title: "Faster Execution",
    description: "Quick delivery with transparent communication.",
    icon: Zap,
  },
  {
    title: "Long-Term Partnership",
    description:
      "We grow with your business through continuous support and optimization.",
    icon: Handshake,
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

export default function WhyDigiWar() {
  return (
    <section
      id="why-digi-war"
      aria-labelledby="why-digi-war-heading"
      className="bg-[#0A0A0C] py-24 lg:py-32"
    >
      <SectionHeading
        badge="Why Digi War"
        title="Why Businesses Choose Digi War"
        subtitle="We combine AI, automation, ecommerce expertise, and digital strategy to help startups and growing brands scale faster."
        align="center"
      />

      <Container className="mt-16">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {REASONS.map(({ title, description, icon: Icon }) => (
            <motion.li
  key={title}
  variants={cardVariants}
  whileHover={{ y: -5 }}
  transition={{ type: "spring", stiffness: 300, damping: 22 }}
  className="h-full"
>
              <Card hover glass className="flex h-full flex-col p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#5B5FEF]/15 to-[#3DD9EB]/10">
                  <Icon className="h-5 w-5 text-[#3DD9EB]" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#F5F5F7]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9A9AA5]">
                  {description}
                </p>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}