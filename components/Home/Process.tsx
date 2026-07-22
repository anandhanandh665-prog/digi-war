"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  Compass,
  Code2,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

const STEPS: Step[] = [
  {
    title: "Free Consultation",
    description: "Understand business goals and challenges.",
    icon: MessageCircle,
  },
  {
    title: "Business Analysis",
    description: "Research competitors and identify opportunities.",
    icon: Search,
  },
  {
    title: "Strategy & Planning",
    description: "Create the perfect digital roadmap.",
    icon: Compass,
  },
  {
    title: "Design & Development",
    description: "Website, Ecommerce, AI Automation and Branding.",
    icon: Code2,
  },
  {
    title: "Testing & Launch",
    description: "Quality assurance and smooth deployment.",
    icon: Rocket,
  },
  {
    title: "Growth & Support",
    description: "Continuous optimization and scaling.",
    icon: TrendingUp,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-[#0A0A0C] py-24 lg:py-32"
    >
      <SectionHeading
        badge="Our Process"
        title="Simple Process. Powerful Results."
        subtitle="From consultation to launch and continuous growth, we make every step clear, transparent and efficient."
        align="center"
      />

      <Container className="mt-16">
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mx-auto max-w-[720px]"
        >
          {/* Connecting line */}
          <motion.div
            aria-hidden="true"
            variants={lineVariants}
            style={{ transformOrigin: "top" }}
            className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-[#5B5FEF] via-white/15 to-transparent sm:left-7"
          />

          {STEPS.map(({ title, description, icon: Icon }, index) => (
            <motion.li
              key={title}
              variants={itemVariants}
              className="relative pb-10 pl-14 last:pb-0 sm:pl-20"
            >
              {/* Step marker */}
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#5B5FEF]/40 bg-[#0A0A0C] ring-4 ring-[#0A0A0C] sm:h-14 sm:w-14">
                <Icon
                  className="h-5 w-5 text-[#3DD9EB] sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </div>

              <Card hover glass className="p-6 sm:p-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5FEF]">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#F5F5F7]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9A9AA5]">
                  {description}
                </p>
              </Card>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}