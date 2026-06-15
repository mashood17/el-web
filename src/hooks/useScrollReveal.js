import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: options.margin || "-80px",
  });

  return { ref, isInView };
}