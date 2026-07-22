"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Bot,
  Store,
  Palette,
  Database,
  type LucideIcon,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
}

const PROJECTS: Project[] = [
  {
    title: "Corporate Website",
    category: "Website Development",
    description: "Modern responsive business website with premium UI/UX.",
    tech: ["Next.js", "Tailwind CSS"],
    icon: Globe,
  },
  {
    title: "Shopify Store",
    category: "Ecommerce",
    description:
      "Complete Shopify store with payment integration and product management.",
    tech: ["Shopify", "Razorpay"],
    icon: ShoppingCart,
  },
  {
    title: "AI Customer Support",
    category: "AI Automation",
    description: "24/7 AI chatbot and lead qualification system.",
    tech: ["OpenAI", "WhatsApp API"],
    icon: Bot,
  },
  {
    title: "Marketplace Setup",
    category: "Ecommerce",
    description:
      "Amazon, Flipkart and Meesho onboarding with optimized listings.",
    tech: ["Amazon", "Flipkart", "Meesho"],
    icon: Store,
  },
  {
    title: "Branding & Design",
    category: "Branding",
    description: "Logo, social media kit and complete brand identity.",
    tech: ["Figma", "Adobe"],
    icon: Palette,
  },
  {
    title: "CRM Dashboard",
    category: "CRM",
    description:
      "Customer management dashboard with analytics and automation.",
    tech: ["React", "Supabase"],
    icon: Database,
  },
];

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

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-[#0A0A0C] py-24 lg:py-32"
    >
      <SectionHeading
        badge="Our Portfolio"
        title="Projects That Build Brands."
        subtitle="From websites to AI automation, explore the digital solutions we've crafted for startups, D2C brands, and growing businesses."
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
          {PROJECTS.map(({ title, category, description, tech, icon: Icon }) => (
            <motion.li key={title} variants={cardVariants} className="h-full">
              <Card
                hover
                glass
                className="flex h-full flex-col overflow-hidden"
              >
                {/* Placeholder image area */}
                <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#5B5FEF]/15 via-white/[0.02] to-[#3DD9EB]/10">
                  <Icon
                    className="h-10 w-10 text-white/20 transition-transform duration-300 group-hover:scale-105"
                    aria-hidden="true"
                  />
                  <Badge
                    variant="secondary"
                    size="sm"
                    className="absolute left-4 top-4"
                  >
                    {category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-lg font-semibold tracking-tight text-[#F5F5F7]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9A9AA5]">
                    {description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {tech.map((item) => (
                      <li key={item}>
                        <Badge variant="primary" size="sm">
                          {item}
                        </Badge>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="w-full"
                      aria-label={`View Project: ${title} (coming soon)`}
                    >
                      View Project
                    </Button>
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