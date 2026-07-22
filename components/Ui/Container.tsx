import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Reusable layout wrapper that constrains content to the site's
 * max content width (1280px) with responsive horizontal padding.
 */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}