"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the page has been scrolled past a given threshold.
 * Used by the Navbar to toggle its transparent -> blurred background state.
 */
export function useScrollPosition(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Set initial state (handles page loads that aren't at the top)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}