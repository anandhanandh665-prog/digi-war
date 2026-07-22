import { type HTMLAttributes, type ReactNode } from "react";

type BadgeVariant = "primary" | "secondary" | "success";
type BadgeSize = "sm" | "md";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  primary: "bg-[#5B5FEF]/15 text-[#8A8DF5] border border-[#5B5FEF]/30",
  secondary: "bg-white/10 text-[#F5F5F7] border border-white/15",
  success: "bg-[#B4F461]/15 text-[#B4F461] border border-[#B4F461]/30",
};

const SIZE_STYLES: Record<BadgeSize, string> = {
  sm: "h-6 px-2.5 text-xs",
  md: "h-7 px-3.5 text-sm",
};

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: BadgeProps) {
  return (
    <span
      aria-label="Badge"
      className={`inline-flex w-fit items-center justify-center whitespace-nowrap rounded-full font-medium tracking-tight ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}