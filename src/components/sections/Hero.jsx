import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="home" ref={ref} style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background image with parallax */}
      <motion.div style={{ y, position: "absolute", inset: "-10% 0", zIndex: 0 }}>
        <img
          src="/assets/images/hero.jpg"
          alt="ELATŌ CELEBRÉ Premium Ice Cream"
          style={{ width: "100%", height: "110%", objectFit: "cover", display: "block" }}
          loading="eager"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to bottom, rgba(36,24,14,0.3) 0%, rgba(36,24,14,0.1) 40%, rgba(36,24,14,0.65) 80%, rgba(36,24,14,0.9) 100%)",
      }} />

      {/* Content */}
      <motion.div
        style={{
          position: "absolute", inset: 0, zIndex: 2, opacity,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "0 24px",
          paddingTop: "80px",
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(0.55rem, 1.5vw, 0.7rem)",
            fontWeight: 500,
            letterSpacing: "0.3em",
            color: "#B58A16",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Panemangalore, Karnataka
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(3rem, 10vw, 7rem)",
            fontWeight: 300,
            letterSpacing: "0.15em",
            color: "#F8F4EC",
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 0.95,
            marginBottom: "8px",
            textShadow: "0 2px 40px rgba(0,0,0,0.3)",
          }}
        >
          Elatō
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(3rem, 10vw, 7rem)",
            fontWeight: 300,
            letterSpacing: "0.15em",
            color: "#F8F4EC",
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 0.95,
            marginBottom: "28px",
            textShadow: "0 2px 40px rgba(0,0,0,0.3)",
          }}
        >
          Celebré
        </motion.h1>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}
        >
          <div style={{ width: "60px", height: "1px", background: "rgba(181,138,22,0.5)" }} />
          <div style={{ width: "5px", height: "5px", background: "#B58A16", transform: "rotate(45deg)" }} />
          <div style={{ width: "60px", height: "1px", background: "rgba(181,138,22,0.5)" }} />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "rgba(248,244,236,0.88)",
            textAlign: "center",
            lineHeight: 1.65,
            maxWidth: "520px",
            marginBottom: "40px",
          }}
        >
          Artisanal Desserts. Memorable Celebrations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}
        >
          <a
            href="https://el-ce.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.72rem", fontWeight: 500,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#24180E",
              background: "#B58A16",
              padding: "13px 28px", borderRadius: "2px",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
          >
            Explore Cuisine
          </a>
          <button
            onClick={() => document.querySelector("#visit")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.72rem", fontWeight: 400,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#F8F4EC",
              background: "transparent",
              border: "1px solid rgba(248,244,236,0.4)",
              padding: "13px 28px", borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
          >
            Plan Your Visit
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          style={{
            position: "absolute", bottom: "36px",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          }}
        >
          <motion.div
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ width: "1px", height: "40px", background: "rgba(181,138,22,0.6)", transformOrigin: "top" }}
          />
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.5rem", letterSpacing: "0.28em",
            color: "rgba(181,138,22,0.6)", textTransform: "uppercase",
          }}>
            Scroll
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}