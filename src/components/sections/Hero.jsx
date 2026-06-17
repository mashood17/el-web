import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      id="home"
      ref={ref}
      style={{ position: "relative", height: "100vh", minHeight: "600px", overflow: "hidden" }}
    >
      {/* Background */}
      <motion.div style={{ y, position: "absolute", inset: "-10% 0", zIndex: 0 }}>
        <img
          src="/assets/images/hero.jpg"
          alt="ELATŌ CELEBRÉ"
          style={{ width: "100%", height: "110%", objectFit: "cover", display: "block" }}
          loading="eager"
        />
      </motion.div>

      {/* Gradient — heavier at bottom for legibility */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: `
          linear-gradient(to bottom,
            rgba(26,12,4,0.42) 0%,
            rgba(26,12,4,0.18) 30%,
            rgba(26,12,4,0.52) 65%,
            rgba(26,12,4,0.88) 100%
          )
        `,
      }} />

      {/* Content */}
      <motion.div
        style={{
          position: "absolute", inset: 0, zIndex: 2, opacity,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: isMobile ? "0 28px" : "0 40px",
          paddingTop: isMobile ? "72px" : "80px",
        }}
      >

        {/* ── Location marker ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            display: "flex", alignItems: "center", gap: "12px",
            marginBottom: isMobile ? "20px" : "28px",
          }}
        >
          <div style={{
            width: isMobile ? "20px" : "28px", height: "1px",
            background: "rgba(181,138,22,0.55)",
          }} />
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: isMobile ? "0.6rem" : "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.38em",
            color: "rgba(213,180,100,0.9)",
            textTransform: "uppercase",
          }}>
            Panemangalore, Karnataka
          </p>
          <div style={{
            width: isMobile ? "20px" : "28px", height: "1px",
            background: "rgba(181,138,22,0.55)",
          }} />
        </motion.div>

        {/* ── Wordmark ──────────────────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: isMobile ? "clamp(2.7rem, 15vw, 4.2rem)" : "clamp(3.8rem, 7vw, 6rem)",
            fontWeight: 300,
            letterSpacing: isMobile ? "0.09em" : "0.16em",
            color: "#F8F4EC",
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 0.92,
            marginBottom: isMobile ? "6px" : "4px",
            textShadow: "0 2px 60px rgba(0,0,0,0.25)",
          }}
        >
          Elatō
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: isMobile
              ? "clamp(2.7rem, 15vw, 4.2rem)"
              : "clamp(3.8rem, 7vw, 6rem)",
            fontWeight: 300,
            letterSpacing: isMobile ? "0.12em" : "0.18em",
            color: "#F8F4EC",
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 0.92,
            marginBottom: isMobile ? "24px" : "32px",
            textShadow: "0 2px 60px rgba(0,0,0,0.25)",
          }}
        >
          Celebré
        </motion.h1>

        {/* ── Ornament ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.85, ease: "easeOut" }}
          style={{
            display: "flex", alignItems: "center", gap: "14px",
            marginBottom: isMobile ? "20px" : "28px",
            transformOrigin: "center",
          }}
        >
          <div style={{ width: isMobile ? "40px" : "64px", height: "1px", background: "rgba(181,138,22,0.45)" }} />
          <div style={{ width: "5px", height: "5px", background: "#B58A16", transform: "rotate(45deg)", flexShrink: 0 }} />
          <div style={{ width: isMobile ? "40px" : "64px", height: "1px", background: "rgba(181,138,22,0.45)" }} />
        </motion.div>

        {/* ── Subheadline ───────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0 }}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: isMobile ? "1.05rem" : "clamp(1.15rem, 2.2vw, 1.5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "rgba(248,244,236,0.92)",
            textAlign: "center",
            lineHeight: 1.55,
            letterSpacing: "0.04em",
            maxWidth: isMobile ? "260px" : "480px",
            marginBottom: isMobile ? "36px" : "52px",
            textShadow: "0 1px 24px rgba(0,0,0,0.4)",
          }}
        >
          Artisanal Desserts. Memorable Celebrations.
        </motion.p>

        {/* ── CTAs ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15 }}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: isMobile ? "12px" : "16px",
            alignItems: "center",
            maxWidth: isMobile ? "380px" : "none",
            justifyContent: "center",
          }}
        >
          {/* Primary CTA */}
          <a
            href="https://el-ce.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setPrimaryHovered(true)}
            onMouseLeave={() => setPrimaryHovered(false)}
            style={{
              display: "block",
              flexDirection: "row",
              fontFamily: "'Manrope', sans-serif",
              fontSize: isMobile ? "0.65rem" : "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              textAlign: "center",
              textDecoration: "none",
              color: primaryHovered ? "#F8F4EC" : "#1A0E06",
              background: primaryHovered
                ? "rgba(181,138,22,0.85)"
                : "#B58A16",
              padding: isMobile ? "14px 20px" : "14px 36px",
              border: "1px solid #B58A16",
              transition: "all 0.35s ease",
              whiteSpace: "nowrap",
            }}
          >
            Explore Cuisine
          </a>

          {/* Divider — desktop only */}
          {!isMobile && (
            <div style={{
              width: "1px", height: "32px",
              background: "rgba(248,244,236,0.2)",
            }} />
          )}

          {/* Secondary CTA */}
          <button
            onClick={() => document.querySelector("#visit")?.scrollIntoView({ behavior: "smooth" })}
            onMouseEnter={() => setSecondaryHovered(true)}
            onMouseLeave={() => setSecondaryHovered(false)}
            style={{
              display: "block",
              flexDirection: "row",
              fontFamily: "'Manrope', sans-serif",
              fontSize: isMobile ? "0.65rem" : "0.62rem",
              fontWeight: 400,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              textAlign: "center",
              color: secondaryHovered
                ? "#F8F4EC"
                : "rgba(248,244,236,0.75)",
              background: "transparent",
              border: `1px solid ${secondaryHovered ? "rgba(248,244,236,0.5)" : "rgba(248,244,236,0.25)"}`,
              padding: isMobile ? "14px 20px" : "14px 36px",
              cursor: "pointer",
              transition: "all 0.35s ease",
              whiteSpace: "nowrap",
              
            }}
          >
            Plan Your Visit
          </button>
        </motion.div>

      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute", bottom: "32px", left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "10px",
        }}
      >
        <motion.div
          animate={{ scaleY: [0, 1, 0], opacity: [0, 0.7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          style={{
            width: "1px", height: "44px",
            background: "#B58A16",
            transformOrigin: "top",
          }}
        />
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.48rem",
          letterSpacing: "0.32em",
          color: "rgba(181,138,22,0.55)",
          textTransform: "uppercase",
        }}>
          Scroll
        </p>
      </motion.div>
    </section>
  );
}