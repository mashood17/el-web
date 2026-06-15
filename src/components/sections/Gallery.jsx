import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import { galleryItems } from "../../data/gallery";

function Lightbox({ item, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(36,24,14,0.95)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "20px",
        }}
      >
        <motion.img
          key={item.id}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={item.src}
          alt={item.alt}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: "90vw", maxHeight: "85vh",
            objectFit: "contain", borderRadius: "2px",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
          }}
        />

        {/* Controls */}
        <button onClick={onClose} style={{
          position: "absolute", top: "20px", right: "20px",
          background: "rgba(248,244,236,0.1)", border: "1px solid rgba(248,244,236,0.2)",
          borderRadius: "50%", width: "40px", height: "40px",
          color: "#F8F4EC", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {[{ action: onPrev, icon: "←", side: "left" }, { action: onNext, icon: "→", side: "right" }].map(({ action, icon, side }) => (
          <button key={side} onClick={(e) => { e.stopPropagation(); action(); }} style={{
            position: "absolute", [side]: "20px", top: "50%", transform: "translateY(-50%)",
            background: "rgba(248,244,236,0.08)", border: "1px solid rgba(248,244,236,0.15)",
            borderRadius: "2px", width: "44px", height: "44px",
            color: "#F8F4EC", cursor: "pointer", fontSize: "1.2rem",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {icon}
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const prev = () => setLightboxIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const next = () => setLightboxIndex((i) => (i + 1) % galleryItems.length);

  return (
    <section id="gallery" className="section-pad elato-pattern">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <ScrollReveal style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.62rem", fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#B58A16", marginBottom: "14px",
          }}>
            Visual Stories
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 300, color: "#24180E", letterSpacing: "0.06em",
          }}>
            The ELATŌ Experience
          </h2>
          <div className="gold-line" style={{ width: "40px", margin: "16px auto 0" }} />
        </ScrollReveal>

        {/* Editorial grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
        className="grid-cols-2 md:grid-cols-3"
        >
          {galleryItems.map((item, i) => (
            <ScrollReveal key={item.id} variant="fadeUp" delay={i * 0.06}
              style={{ gridColumn: item.wide ? "span 2" : "span 1" }}>
              <motion.div
                whileHover={{ opacity: 0.9 }}
                onClick={() => setLightboxIndex(i)}
                style={{
                  aspectRatio: item.wide ? "16/9" : "4/3",
                  overflow: "hidden", cursor: "pointer",
                  borderRadius: "2px", position: "relative",
                }}
              >
                <motion.img
                  src={item.src}
                  alt={item.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(36,24,14,0.4) 0%, transparent 50%)",
                  opacity: 0, transition: "opacity 0.3s ease",
                }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "0"}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          item={galleryItems[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}