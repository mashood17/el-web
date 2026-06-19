import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    src: "/assets/images/gallery-1.webp",
    caption: "Handcrafted Elegance",
    subcaption: "Signature Gelato Collection",
  },
  {
    id: 2,
    src: "/assets/images/gallery-2.webp",
    caption: "The Art of Dessert",
    subcaption: "Patisserie & Confections",
  },
  {
    id: 3,
    src: "/assets/images/gallery-3.webp",
    caption: "A Space Designed for Desire",
    subcaption: "ELATŌ Interiors",
  },
  {
    id: 4,
    src: "/assets/images/gallery-4.webp",
    caption: "Crafted with Intention",
    subcaption: "Beverage Collection",
  },
  {
    id: 5,
    src: "/assets/images/gallery-5.webp",
    caption: "Moments Worth Celebrating",
    subcaption: "Celebrations & Gatherings",
  },
  {
    id: 6,
    src: "/assets/images/gallery-6.webp",
    caption: "Every Detail Considered",
    subcaption: "The ELATŌ Experience",
  },
];

// ── Desktop: premium carousel ─────────────────────────────────────────────────
function DesktopGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-60px" });

  const total = galleryItems.length;
  const prev = galleryItems[(current - 1 + total) % total];
  const curr = galleryItems[current];
  const next = galleryItems[(current + 1) % total];

  const navigate = useCallback((dir) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(dir);
    setCurrent((c) => (c + dir + total) % total);
    setTimeout(() => setIsTransitioning(false), 650);
  }, [isTransitioning, total]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 80 : -80, scale: 0.96 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -80 : 80, scale: 0.96, transition: { duration: 0.45, ease: "easeIn" } }),
  };

  return (
    <div style={{ background: "#1A0E06", paddingBottom: "80px" }}>
      {/* Header */}
      <div ref={headerRef} style={{ textAlign: "center", padding: "80px 40px 56px" }}>
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
          Visual Stories
        </motion.p>
        <div style={{ overflow: "hidden" }}>
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
              fontWeight: 300, color: "#F8F4EC",
              letterSpacing: "0.06em",
            }}
          >
            The ELATŌ Experience
          </motion.h2>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.8 }}
          style={{
            width: "36px", height: "1px",
            background: "#B58A16",
            margin: "16px auto 0",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Carousel */}
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "0 56px",
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        gap: "20px",
        alignItems: "center",
      }}>
        {/* Prev preview */}
        <motion.div
          key={`prev-${prev.id}`}
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.02 }}
          style={{
            aspectRatio: "3/4",
            overflow: "hidden",
            cursor: "pointer",
            opacity: 0.45,
            filter: "brightness(0.7)",
            transition: "opacity 0.3s ease, filter 0.3s ease",
            borderRadius: "2px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.65";
            e.currentTarget.style.filter = "brightness(0.85)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.45";
            e.currentTarget.style.filter = "brightness(0.7)";
          }}
        >
          <img
            src={prev.src}
            alt={prev.caption}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy"
          />
        </motion.div>

        {/* Main image */}
        <div style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "4/3",
            overflow: "hidden",
            borderRadius: "2px",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            position: "relative",
          }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={curr.id}
                src={curr.src}
                alt={curr.caption}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover", display: "block",
                }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>

          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`caption-${curr.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              style={{ marginTop: "24px", textAlign: "center" }}
            >
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem", fontWeight: 400,
                color: "#F8F4EC", letterSpacing: "0.04em",
                marginBottom: "4px",
              }}>
                {curr.caption}
              </p>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.6rem", fontWeight: 400,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(181,138,22,0.65)",
              }}>
                {curr.subcaption}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: "24px",
            marginTop: "28px",
          }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                background: "none",
                border: "1px solid rgba(181,138,22,0.3)",
                borderRadius: "50%",
                width: "40px", height: "40px",
                color: "#B58A16", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(181,138,22,0.7)";
                e.currentTarget.style.background = "rgba(181,138,22,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(181,138,22,0.3)";
                e.currentTarget.style.background = "none";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
              {galleryItems.map((_, i) => (
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
                width: "40px", height: "40px",
                color: "#B58A16", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(181,138,22,0.7)";
                e.currentTarget.style.background = "rgba(181,138,22,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(181,138,22,0.3)";
                e.currentTarget.style.background = "none";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          {/* Counter */}
          <p style={{
            textAlign: "center", marginTop: "16px",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.8rem", fontWeight: 300,
            color: "rgba(248,244,236,0.25)",
            letterSpacing: "0.2em",
          }}>
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>

        {/* Next preview */}
        <motion.div
          key={`next-${next.id}`}
          onClick={() => navigate(1)}
          whileHover={{ scale: 1.02 }}
          style={{
            aspectRatio: "3/4",
            overflow: "hidden",
            cursor: "pointer",
            opacity: 0.45,
            filter: "brightness(0.7)",
            transition: "opacity 0.3s ease, filter 0.3s ease",
            borderRadius: "2px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.65";
            e.currentTarget.style.filter = "brightness(0.85)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.45";
            e.currentTarget.style.filter = "brightness(0.7)";
          }}
        >
          <img
            src={next.src}
            alt={next.caption}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}

// ── Mobile: full-screen story cards ──────────────────────────────────────────
function MobileGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [dragStart, setDragStart] = useState(null);
  const total = galleryItems.length;
  const item = galleryItems[current];

  const navigate = (dir) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + total) % total);
  };

  const handleDragStart = (e) => {
    setDragStart(e.touches?.[0]?.clientX ?? e.clientX);
  };

  const handleDragEnd = (e) => {
    const end = e.changedTouches?.[0]?.clientX ?? e.clientX;
    const diff = dragStart - end;
    if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
    setDragStart(null);
  };

  const slideVariants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? "100%" : "-100%" }),
    center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? "-60%" : "60%", transition: { duration: 0.4, ease: "easeIn" } }),
  };

  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true });

  return (
    <div style={{ background: "#1A0E06" }}>
      {/* Header */}
      <div ref={headerRef} style={{ textAlign: "center", padding: "60px 28px 40px" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.6rem", fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#B58A16", marginBottom: "14px",
          }}
        >
          Visual Stories
        </motion.p>
        <div style={{ overflow: "hidden" }}>
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 8vw, 2.6rem)",
              fontWeight: 300, color: "#F8F4EC",
              letterSpacing: "0.05em",
            }}
          >
            The ELATŌ Experience
          </motion.h2>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            width: "28px", height: "1px",
            background: "#B58A16",
            margin: "14px auto 0",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Story card */}
      <div
        style={{
          padding: "0 20px",
          position: "relative",
          overflow: "hidden",
          touchAction: "pan-y",
        }}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={item.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ borderRadius: "4px", overflow: "hidden" }}
          >
            {/* Image */}
            <div style={{
              width: "100%",
              aspectRatio: "4/5",
              overflow: "hidden",
              position: "relative",
            }}>
              <img
                src={item.src}
                alt={item.caption}
                style={{
                  width: "100%", height: "100%",
                  objectFit: "cover", display: "block",
                }}
                loading="lazy"
              />
              {/* Bottom gradient */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(26,14,6,0.75) 0%, transparent 45%)",
                pointerEvents: "none",
              }} />
              {/* Caption overlay */}
              <div style={{
                position: "absolute", bottom: "24px", left: "24px", right: "24px",
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.3rem", fontWeight: 400,
                  color: "#F8F4EC", letterSpacing: "0.03em",
                  lineHeight: 1.2, marginBottom: "6px",
                }}>
                  {item.caption}
                </p>
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.58rem", fontWeight: 400,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "rgba(181,138,22,0.8)",
                }}>
                  {item.subcaption}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 28px 56px",
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "1px solid rgba(181,138,22,0.25)",
            borderRadius: "50%", width: "44px", height: "44px",
            color: "#B58A16", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        {/* Counter + dots */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.85rem", fontWeight: 300,
            color: "rgba(248,244,236,0.3)",
            letterSpacing: "0.2em",
          }}>
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <div style={{ display: "flex", gap: "5px" }}>
            {galleryItems.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                animate={{
                  width: i === current ? "16px" : "4px",
                  background: i === current ? "#B58A16" : "rgba(181,138,22,0.2)",
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
        </div>

        <button
          onClick={() => navigate(1)}
          style={{
            background: "none",
            border: "1px solid rgba(181,138,22,0.25)",
            borderRadius: "50%", width: "44px", height: "44px",
            color: "#B58A16", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function Gallery() {
  const [isMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );

  return (
    <section id="gallery">
      {isMobile ? <MobileGallery /> : <DesktopGallery />}
    </section>
  );
}