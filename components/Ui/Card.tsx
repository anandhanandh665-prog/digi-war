import { type HTMLAttributes, type ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
  glass = true,
  ...rest
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        glass
          ? "border-white/10 bg-white/[0.03] backdrop-blur-xl"
          : "border-white/10 bg-[#111214]"
      } ${
        hover
          ? "hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] focus-visible:-translate-y-1 focus-visible:border-white/20"
          : ""
      } ${
        hover ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FEF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0C]" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}