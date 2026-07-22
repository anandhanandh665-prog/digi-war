import { type ReactNode } from "react";

import Container from "./Container";
import Badge from "./Badge";

type Align = "left" | "center";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: Align;
  className?: string;
}

const ALIGN_STYLES: Record<Align, string> = {
  left: "items-start text-left",
  center: "items-center text-center mx-auto",
};

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <Container className={className}>
      <div
        className={`flex max-w-[640px] flex-col ${ALIGN_STYLES[align]} ${className}`}
      >
        {badge && (
          <Badge variant="primary" size="sm" className="mb-4">
            {badge}
          </Badge>
        )}

        <h2 className="text-balance text-[32px] font-bold leading-tight tracking-tight text-[#F5F5F7] sm:text-[42px]">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-balance text-base leading-relaxed text-[#9A9AA5] sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </Container>
  );
}