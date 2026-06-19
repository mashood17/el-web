import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const stories = [
  {
    number: "01",
    eyebrow: "The Space",
    title: "A Setting Designed for Desire",
    body: "From the moment you step inside ELATŌ, the atmosphere shifts. Warm lighting, refined interiors, and carefully considered details create a space that feels both intimate and elevated — a world apart from the ordinary.",
    image: "/assets/images/cuisine-1.webp",
    reverse: false,
  },
  {
    number: "02",
    eyebrow: "The Hospitality",
    title: "Where Every Guest Feels Remembered",
    body: "Exceptional hospitality is not a gesture at ELATŌ — it is a standard. From the precision of our presentation to the warmth of our service, every visit is crafted to feel personal, unhurried, and genuinely memorable.",
    image: "/assets/images/cuisine-2.webp",
    reverse: true,
  },
  {
    number: "03",
    eyebrow: "Celebrations",
    title: "Moments Worth Returning For",
    body: "Birthdays. Anniversaries. Quiet evenings. Grand gestures. ELATŌ becomes the setting for milestones both large and small. We understand that celebrations are not events — they are memories in the making.",
    image: "/assets/images/cuisine-3.webp",
    reverse: false,
  },
];

// ── Desktop story row ─────────────────────────────────────────────────────────
function DesktopStory({ story, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
  <div
    ref={ref}
    style={{
      maxWidth: "1140px",
      margin: "0 auto",
      padding: "0 56px",
      marginBottom: index < 2 ? "64px" : "0",
    }}
  >
    <div
      style={{
        display: "grid",
        gridTemplateColumns: story.reverse ? "1fr 52%" : "52% 1fr",
        minHeight: "480px",
        boxShadow: "0 12px 56px rgba(0,0,0,0.25)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: story.reverse ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          order: story.reverse ? 2 : 1,
          overflow: "hidden",
          position: "relative",
          maxHeight: "480px",
        }}
      >
        <motion.div
          style={{
            y: imgY,
            height: "116%",
            marginTop: "-8%",
            maxHeight: "560px",
          }}
        >
          <motion.img
            src={story.image}
            alt={story.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            animate={{ scale: hovered ? 1.03 : 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            loading="lazy"
          />
        </motion.div>

        {/* Overlay — lightens subtly on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute", inset: 0,
            background: "rgba(181,138,22,0.06)",
            pointerEvents: "none",
          }}
        />

        {/* Chapter number watermark on image */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          style={{
            position: "absolute",
            bottom: "24px",
            left: story.reverse ? "auto" : "28px",
            right: story.reverse ? "28px" : "auto",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.65rem",
            fontWeight: 300,
            letterSpacing: "0.3em",
            color: "rgba(248,244,236,0.4)",
            textTransform: "uppercase",
          }}
        >
          Chapter {story.number}
        </motion.span>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: story.reverse ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{
          order: story.reverse ? 1 : 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Large ghost number */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1.2 }}
          style={{
            position: "absolute",
            bottom: "-20px",
            right: story.reverse ? "auto" : "-10px",
            left: story.reverse ? "-10px" : "auto",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "10rem",
            fontWeight: 300,
            color: "rgba(181,138,22,0.05)",
            lineHeight: 1,
            letterSpacing: "0.05em",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {story.number}
        </motion.span>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.7 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#B58A16",
            marginBottom: "20px",
          }}
        >
          {story.eyebrow}
        </motion.p>

        {/* Title */}
        <div style={{ overflow: "hidden", marginBottom: "24px" }}>
          <motion.h3
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)",
              fontWeight: 300,
              color: "#F8F4EC",
              letterSpacing: "0.03em",
              lineHeight: 1.15,
            }}
          >
            {story.title}
          </motion.h3>
        </div>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.8, ease: "easeOut" }}
          style={{
            width: "28px",
            height: "1px",
            background: "#B58A16",
            opacity: 0.6,
            marginBottom: "24px",
            transformOrigin: "left center",
          }}
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.88rem",
            fontWeight: 300,
            color: "rgba(248,244,236,0.6)",
            lineHeight: 1.9,
            maxWidth: "380px",
          }}
        >
          {story.body}
        </motion.p>
      </motion.div>
    </div>
    </div>
    );
}

// ── Mobile story block ────────────────────────────────────────────────────────
function MobileStory({ story, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      style={{
        marginBottom: index < 2 ? "0" : "0",
        borderBottom: index < 2
          ? "1px solid rgba(248,244,236,0.07)"
          : "none",
      }}
    >
      {/* Full-width image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          width: "100%",
          aspectRatio: "3/2",
          overflow: "hidden",
          position: "relative",
          borderRadius: "2px",
        }}
      >
        <motion.img
          src={story.image}
          alt={story.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          initial={{ scale: 1.08 }}
          animate={inView ? { scale: 1 } : { scale: 1.08 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          loading="lazy"
        />

        {/* Dark gradient at bottom for text legibility */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(26,12,4,0.55) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />

        {/* Chapter label over image */}
        <p style={{
          position: "absolute",
          bottom: "20px",
          left: "24px",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "0.65rem",
          fontWeight: 300,
          letterSpacing: "0.28em",
          color: "rgba(248,244,236,0.55)",
          textTransform: "uppercase",
        }}>
          Chapter {story.number}
        </p>
      </motion.div>

      {/* Content block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          padding: "40px 28px 52px",
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.58rem",
            fontWeight: 500,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#B58A16",
            marginBottom: "16px",
          }}
        >
          {story.eyebrow}
        </motion.p>

        {/* Title */}
        <div style={{ overflow: "hidden", marginBottom: "20px" }}>
          <motion.h3
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.9rem, 7vw, 2.4rem)",
              fontWeight: 300,
              color: "#F8F4EC",
              letterSpacing: "0.03em",
              lineHeight: 1.15,
            }}
          >
            {story.title}
          </motion.h3>
        </div>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          style={{
            width: "24px",
            height: "1px",
            background: "#B58A16",
            opacity: 0.6,
            marginBottom: "20px",
            transformOrigin: "left center",
          }}
        />

        {/* Body */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.8 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.88rem",
            fontWeight: 300,
            color: "rgba(248,244,236,0.62)",
            lineHeight: 1.9,
          }}
        >
          {story.body}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

// ── Section header ────────────────────────────────────────────────────────────
function SectionHeader({ isMobile }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      style={{
        textAlign: "center",
        padding: isMobile ? "64px 28px 52px" : "80px 40px 56px",
        maxWidth: isMobile ? "100%" : "800px",
        margin: "0 auto",
      }}
    >
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={inView ? { opacity: 1, letterSpacing: "0.3em" } : {}}
        transition={{ duration: 1 }}
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.6rem",
          fontWeight: 500,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#B58A16",
          marginBottom: "16px",
        }}
      >
        The Experience
      </motion.p>

      <div style={{ overflow: "hidden", marginBottom: "20px" }}>
        <motion.h2
          initial={{ y: "100%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile
              ? "clamp(2.2rem, 9vw, 3rem)"
              : "clamp(2.4rem, 4.5vw, 3.4rem)",
            fontWeight: 300,
            color: "#F8F4EC",
            letterSpacing: "0.05em",
            lineHeight: 1.1,
          }}
        >
          Where Craft Meets Celebration
        </motion.h2>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        style={{
          width: "36px",
          height: "1px",
          background: "#B58A16",
          margin: "0 auto",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function CuisineExperience() {
  const [isMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );

  return (
    <section id="cuisine" style={{ background: "#1E1008", overflow: "hidden" }}>
      <SectionHeader isMobile={isMobile} />

      {/* Desktop */}
      {!isMobile && (
        <div style={{ paddingBottom: "80px" }}>
          {stories.map((story, i) => (
            <DesktopStory key={story.number} story={story} index={i} />
          ))}
        </div>
      )}

      {/* Mobile */}
        {isMobile && (
          <div
            style={{
              paddingLeft: "16px",
              paddingRight: "16px",
              paddingBottom: "24px",
            }}
          >
          {stories.map((story, i) => (
            <MobileStory key={story.number} story={story} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}