import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  "Custom dessert arrangements",
  "Personalised celebration setups",
  "Private gathering spaces",
  "Dedicated hospitality team",
];

// ── Desktop ───────────────────────────────────────────────────────────────────
function DesktopCelebrations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "100px 56px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
      }}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "relative" }}
      >
        <div style={{
          aspectRatio: "3/4",
          overflow: "hidden",
          borderRadius: "2px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
        }}>
          <motion.img
            src="/assets/images/celebrations.jpg"
            alt="Celebrations at ELATŌ CELEBRÉ"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            loading="lazy"
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(26,14,6,0.5) 0%, transparent 60%)",
          }} />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.6rem", fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#B58A16", marginBottom: "16px",
          }}
        >
          Special Occasions
        </motion.p>

        <div style={{ overflow: "hidden", marginBottom: "24px" }}>
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 300, color: "#F8F4EC",
              letterSpacing: "0.04em", lineHeight: 1.15,
            }}
          >
            Celebrate Every<br />Milestone Here
          </motion.h2>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.8, ease: "easeOut" }}
          style={{
            width: "28px", height: "1px",
            background: "#B58A16", opacity: 0.6,
            marginBottom: "24px", transformOrigin: "left center",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.88rem", fontWeight: 300,
            color: "rgba(248,244,236,0.65)",
            lineHeight: 1.9, marginBottom: "32px",
          }}
        >
          Birthdays, anniversaries, corporate gatherings, or simply moments
          worth marking — ELATŌ provides the perfect setting. Our team crafts
          personalised experiences with decorated setups, curated dessert
          selections, and attentive hospitality.
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
          {benefits.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "14px" }}
            >
              <div style={{
                width: "5px", height: "5px",
                background: "#B58A16", borderRadius: "50%", flexShrink: 0,
              }} />
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.82rem", fontWeight: 300,
                color: "rgba(248,244,236,0.65)",
              }}>
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="https://wa.me/919731400313?text=Hi%20ELATŌ!%20I'd%20like%20to%20enquire%20about%20a%20celebration%20booking."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.05, duration: 0.7 }}
          style={{
            display: "inline-block",
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.62rem", fontWeight: 500,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#1A0E06", background: "#B58A16",
            padding: "13px 28px",
            textDecoration: "none",
          }}
        >
          Enquire on WhatsApp
        </motion.a>
      </motion.div>
    </div>
  );
}

// ── Mobile ────────────────────────────────────────────────────────────────────
function MobileCelebrations() {
  const contentRef = useRef(null);
  const inView = useInView(contentRef, { once: true, margin: "-40px" });

  return (
    <div>

      {/* Content */}
      <div ref={contentRef} style={{ padding: "28px 28px 64px" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.56rem",
            fontWeight: 600,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#B58A16",
            marginBottom: "18px",
          }}
        >
          Special Occasions
        </motion.p>

        {/* Headline */}
        <div style={{ overflow: "hidden", marginBottom: "16px" }}>
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 8vw, 2.6rem)",
              fontWeight: 300, color: "#F8F4EC",
              letterSpacing: "0.04em", lineHeight: 1.15,
            }}
          >
            Celebrate Every<br />Milestone Here
          </motion.h2>
        </div>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          style={{
            width: "24px", height: "1px",
            background: "#B58A16", opacity: 0.65,
            marginBottom: "24px", transformOrigin: "left center",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: "100%",
            aspectRatio: "4/3",
            overflow: "hidden",
            position: "relative",
            borderRadius: "2px",
            marginBottom: "28px",
          }}
        >
          <motion.img
            src="/assets/images/celebrations.jpg"
            alt="Celebrations at ELATŌ CELEBRÉ"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            loading="lazy"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.8 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.88rem", fontWeight: 300,
            color: "rgba(248,244,236,0.62)",
            lineHeight: 1.9, marginBottom: "32px",
          }}
        >
          Birthdays, anniversaries, corporate gatherings, or simply moments
          worth marking — ELATŌ provides the perfect setting for every
          celebration, large or small.
        </motion.p>

        {/* Benefits */}
        <div style={{ marginBottom: "40px" }}>
          {benefits.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.45 + i * 0.09, duration: 0.6 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "14px 0",
                borderBottom: i < benefits.length - 1
                  ? "1px solid rgba(248,244,236,0.06)"
                  : "none",
              }}
            >
              <div style={{
                width: "4px", height: "4px",
                background: "#B58A16", borderRadius: "50%",
                flexShrink: 0,
              }} />
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.85rem", fontWeight: 300,
                color: "rgba(248,244,236,0.7)",
                lineHeight: 1.5,
              }}>
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="https://wa.me/919731400313?text=Hi%20ELATŌ!%20I'd%20like%20to%20enquire%20about%20a%20celebration%20booking."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.7 }}
          style={{
            display: "inline-block",
            width: "auto",
            minWidth: "220px",
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.65rem", fontWeight: 500,
            letterSpacing: "0.24em", textTransform: "uppercase",
            textAlign: "center",
            color: "#1A0E06", background: "#B58A16",
            padding: "14px 22px",
            textDecoration: "none",
          }}
        >
          Enquire on WhatsApp
        </motion.a>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function Celebrations() {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 1024 : false;

  return (
    <section style={{ background: "#24180E", overflow: "hidden" }}>
      {isMobile ? <MobileCelebrations /> : <DesktopCelebrations />}
    </section>
  );
}