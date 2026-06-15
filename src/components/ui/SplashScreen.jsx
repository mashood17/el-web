import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#24180E",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}
    >
      {/* Top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        style={{ width: "40px", height: "1px", background: "#B58A16", marginBottom: "24px", transformOrigin: "center" }}
      />

      {/* Brand name */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
          fontWeight: 300,
          letterSpacing: "0.3em",
          color: "#F8F4EC",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "12px",
        }}
      >
        Elatō Celebré
      </motion.h1>

      {/* Ornament */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}
      >
        <div style={{ width: "32px", height: "1px", background: "rgba(181,138,22,0.45)" }} />
        <div style={{ width: "4px", height: "4px", background: "#B58A16", transform: "rotate(45deg)" }} />
        <div style={{ width: "32px", height: "1px", background: "rgba(181,138,22,0.45)" }} />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(0.7rem, 2vw, 0.85rem)",
          fontStyle: "italic",
          color: "rgba(181,138,22,0.6)",
          letterSpacing: "0.08em",
          textAlign: "center",
        }}
      >
        Premium Ice Cream Experience
      </motion.p>

      {/* Loading dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ position: "absolute", bottom: "44px", display: "flex", gap: "7px" }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.22, ease: "easeInOut" }}
            style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#B58A16" }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}