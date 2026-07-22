"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  review: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Udhayaa",
    role: "Founder",
    company: "Sri Varahi Stitch Vibes",
    review:
      "Digi War rebuilt our website and the difference was immediate: faster load times, cleaner design, and a noticeable lift in conversions within the first month.",
  },
  {
    name: "Kavya",
    role: "CEO",
    company: "Anantabykavya",
    review:
      "The branding and marketing work gave us an identity that finally matches our product quality. Every touchpoint feels consistent now, from packaging to social.",
  },
  {
    name: "Arun Kumar",
    role: "Director",
    company: "White & Black",
    review:
      "Their AI automation setup handles a huge chunk of our support volume now. Response times dropped and our team can finally focus on complex issues.",
  },
  {
    name: "Syed Imran",
    role: "Founder",
    company: "Zutok",
    review:
      "From marketplace listings to ad management, Digi War treated our brand like their own. Communication was transparent at every single step.",
  },
  {
    name: "Balaji",
    role: "Owner",
    company: "AB Colors",
    review:
      "The CRM dashboard they built gives us visibility we never had before. We can actually see what is driving repeat orders instead of guessing.",
  },
  {
    name: "Mithra",
    role: "Marketing Head",
    company: "Sara Design Studio",
    review:
      "Execution speed is what stood out most. Campaigns that used to take weeks to launch now go live in days, without sacrificing quality.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-[#0A0A0C] py-24 lg:py-32"
    >
      <SectionHeading
        badge="Testimonials"
        title="Trusted by Growing Brands"
        subtitle="Businesses choose Digi War for quality, speed and long-term growth."
        align="center"
      />

      <Container className="mt-16">
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map(({ name, role, company, review }) => (
            <motion.li key={name} variants={cardVariants} className="h-full">
              <Card hover glass className="flex h-full flex-col p-7">
                <div
                  className="flex items-center gap-1"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#3DD9EB] text-[#3DD9EB]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#9A9AA5]">
                  &ldquo;{review}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5B5FEF]/30 to-[#3DD9EB]/20 text-sm font-semibold text-[#F5F5F7]"
                    aria-hidden="true"
                  >
                    {getInitials(name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#F5F5F7]">
                      {name}
                    </p>
                    <p className="text-xs text-[#9A9AA5]">
                      {role} at {company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}