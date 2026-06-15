import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import { reviews, googleRating } from "../../data/reviews";

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#B58A16">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section style={{ background: "#F8F4EC" }} className="section-pad">
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        <ScrollReveal style={{ textAlign: "center", marginBottom: "56px" }}>
          {/* Google rating */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "20px" }}>
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            <span style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.82rem", fontWeight: 500,
              color: "#B58A16", marginLeft: "4px",
            }}>
              {googleRating.score} · {googleRating.count} Reviews on Google
            </span>
          </div>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.62rem", fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#B58A16", marginBottom: "14px",
          }}>
            Guest Experiences
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 300, color: "#24180E", letterSpacing: "0.06em",
          }}>
            What Our Guests Say
          </h2>
          <div className="gold-line" style={{ width: "40px", margin: "16px auto 0" }} />
        </ScrollReveal>

        {/* Carousel */}
        <div style={{ position: "relative", textAlign: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={{ padding: "0 48px" }}
            >
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                fontWeight: 300, fontStyle: "italic",
                color: "#3D2200", lineHeight: 1.85,
                marginBottom: "28px",
              }}>
                "{reviews[current].text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginBottom: "6px" }}>
                {[...Array(reviews[current].rating)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.78rem", fontWeight: 500,
                color: "#24180E", letterSpacing: "0.06em",
              }}>
                {reviews[current].name}
              </p>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.65rem", fontWeight: 300,
                color: "#A78F73", letterSpacing: "0.1em",
                textTransform: "uppercase", marginTop: "3px",
              }}>
                {reviews[current].occasion}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginTop: "40px" }}>
            <button onClick={prev} style={{
              background: "none", border: "1px solid rgba(181,138,22,0.3)",
              borderRadius: "50%", width: "36px", height: "36px",
              cursor: "pointer", color: "#B58A16",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: "6px" }}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? "20px" : "6px",
                    height: "2px",
                    background: i === current ? "#B58A16" : "rgba(181,138,22,0.3)",
                    border: "none", padding: 0, cursor: "pointer",
                    borderRadius: "1px", transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button onClick={next} style={{
              background: "none", border: "1px solid rgba(181,138,22,0.3)",
              borderRadius: "50%", width: "36px", height: "36px",
              cursor: "pointer", color: "#B58A16",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}