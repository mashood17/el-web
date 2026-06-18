import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { reviews, googleReviewsUrl } from "../../data/reviews";

function StarRow() {
  return (
    <div style={{ display: "flex", gap: "4px", justifyContent: "center", marginBottom: "6px" }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#B58A16">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

// ── Section header ────────────────────────────────────────────────────────────
function Header({ isMobile }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        padding: isMobile ? "60px 28px 44px" : "70px 40px 40px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={inView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
        transition={{ duration: 1 }}
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.6rem", fontWeight: 600,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "#B58A16", marginBottom: "16px",
        }}
      >
        Guest Experiences
      </motion.p>

      <div style={{ overflow: "hidden", marginBottom: "20px" }}>
        <motion.h2
          initial={{ y: "100%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? "clamp(2rem, 8vw, 2.6rem)" : "clamp(2.4rem, 4vw, 3rem)",
            fontWeight: 300, color: "#24180E",
            letterSpacing: "0.05em",
          }}
        >
          What Our Guests Say
        </motion.h2>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.45, duration: 0.8 }}
        style={{
          width: "32px", height: "1px",
          background: "#B58A16",
          margin: "0 auto",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}

// ── Review card ───────────────────────────────────────────────────────────────
function ReviewCard({ review, direction }) {
  const variants = {
    enter: (d) => ({
      opacity: 0,
      x: d > 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (d) => ({
      opacity: 0,
      x: d > 0 ? -40 : 40,
      transition: { duration: 0.4, ease: "easeIn" },
    }),
  };

  return (
    <motion.div
      key={review.id}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      style={{
        textAlign: "center",
        padding: "0 16px",
        maxWidth: "680px",
        margin: "0 auto",
      }}
    >
      {/* Large decorative quotation mark */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "3.5rem",
          lineHeight: 0.6,
          color: "rgba(181,138,22,0.12)",
          marginBottom: "10px",
          userSelect: "none",
        }}
      >
        "
      </div>

      {/* Review text */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)",
          fontWeight: 400,
          fontStyle: "italic",
          color: "#3D2200",
          lineHeight: 1.8,
          marginBottom: "24px",
          letterSpacing: "0.02em",
        }}
      >
        {review.text}
      </p>

      {/* Stars */}
      <StarRow />

      {/* Author */}
      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.82rem",
          fontWeight: 500,
          color: "#24180E",
          letterSpacing: "0.06em",
          marginTop: "10px",
          marginBottom: "4px",
        }}
      >
        {review.name}
      </p>
      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.62rem",
          fontWeight: 300,
          color: "#A78F73",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {review.date}
      </p>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = reviews.length;

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 1024 : false;

  const navigate = (dir) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + total) % total);
  };

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-40px" });

  return (
    <section id="reviews" style={{ background: "#F8F4EC" }}>
      <Header isMobile={isMobile} />

      {/* Carousel */}
      <div
        style={{
          position: "relative",
          padding: isMobile ? "0 20px" : "0 40px",
          minHeight: isMobile ? "280px" : "170px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence custom={direction} mode="wait">
          <ReviewCard
            key={reviews[current].id}
            review={reviews[current]}
            direction={direction}
          />
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          padding: "20px 0 12px",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "1px solid rgba(181,138,22,0.3)",
            borderRadius: "50%",
            width: isMobile ? "44px" : "40px",
            height: isMobile ? "44px" : "40px",
            color: "#B58A16",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(181,138,22,0.65)";
            e.currentTarget.style.background = "rgba(181,138,22,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(181,138,22,0.3)";
            e.currentTarget.style.background = "none";
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {reviews.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              animate={{
                width: i === current ? "20px" : "5px",
                background: i === current ? "#B58A16" : "rgba(181,138,22,0.25)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                height: "2px", border: "none",
                padding: 0, cursor: "pointer",
                borderRadius: "1px",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => navigate(1)}
          style={{
            background: "none",
            border: "1px solid rgba(181,138,22,0.3)",
            borderRadius: "50%",
            width: isMobile ? "44px" : "40px",
            height: isMobile ? "44px" : "40px",
            color: "#B58A16",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(181,138,22,0.65)";
            e.currentTarget.style.background = "rgba(181,138,22,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(181,138,22,0.3)";
            e.currentTarget.style.background = "none";
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "40px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(181,138,22,0.3), transparent)",
          margin: "18px auto",
        }}
      />

      {/* Google Reviews CTA */}
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 12 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: "center",
          paddingBottom: isMobile ? "60px" : "60px",
          padding: isMobile ? "0 28px 60px" : "0 40px 60px",
        }}
      >
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#B58A16",
            textDecoration: "none",
            border: "1px solid rgba(181,138,22,0.35)",
            padding: isMobile ? "14px 28px" : "12px 28px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(181,138,22,0.06)";
            e.currentTarget.style.borderColor = "rgba(181,138,22,0.65)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(181,138,22,0.35)";
          }}
        >
          See All Google Reviews
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>

        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.62rem",
            fontWeight: 300,
            color: "#A78F73",
            letterSpacing: "0.08em",
            marginTop: "12px",
          }}
        >
          Verified reviews on Google
        </p>
      </motion.div>
    </section>
  );
}