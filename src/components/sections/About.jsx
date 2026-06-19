import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function About() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const contentInView = useInView(contentRef, { once: true, margin: "-80px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 1024 : false;

  if (isMobile) {
    return <AboutMobile />;
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ background: "#F8F4EC", overflow: "hidden" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 56px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "88px",
          alignItems: "center",
        }}
      >
        {/* ── Left: Image ── */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -32 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative" }}
        >
          {/* Main image */}
          <div
            style={{
              overflow: "hidden",
              borderRadius: "2px",
              aspectRatio: "3/4",
              boxShadow: "0 32px 80px rgba(36,24,14,0.14)",
            }}
          >
            <motion.div style={{ y: imgY, height: "112%", marginTop: "-6%" }}>
              <img
                src="/assets/images/about.webp"
                alt="ELATŌ CELEBRÉ — The Experience"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Gold accent frame — bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={imageInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              position: "absolute",
              bottom: "-16px",
              right: "-16px",
              width: "80px",
              height: "80px",
              border: "1px solid rgba(181,138,22,0.3)",
              pointerEvents: "none",
            }}
          />

          {/* Small brand label on image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={imageInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              background: "rgba(26,14,6,0.65)",
              backdropFilter: "blur(8px)",
              padding: "10px 16px",
              borderLeft: "1px solid rgba(181,138,22,0.5)",
            }}
          >
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.55rem",
                fontWeight: 500,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "rgba(248,244,236,0.8)",
              }}
            >
              Panemangalore, Karnataka
            </p>
          </motion.div>
        </motion.div>

        {/* ── Right: Story ── */}
        <div ref={contentRef}>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={
              contentInView
                ? { opacity: 1, letterSpacing: "0.28em" }
                : {}
            }
            transition={{ duration: 1 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#B58A16",
              marginBottom: "20px",
            }}
          >
            Our Story
          </motion.p>

          {/* Headline */}
          <div style={{ overflow: "hidden", marginBottom: "28px" }}>
            <motion.h2
              initial={{ y: "100%" }}
              animate={contentInView ? { y: 0 } : {}}
              transition={{
                delay: 0.15,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 300,
                color: "#24180E",
                letterSpacing: "0.04em",
                lineHeight: 1.15,
              }}
            >
              A Destination,<br />Not Merely A Café
            </motion.h2>
          </div>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={contentInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            style={{
              width: "28px",
              height: "1.5px",
              background: "#B58A16",
              opacity: 0.65,
              marginBottom: "28px",
              transformOrigin: "left center",
            }}
          />

          {/* Intro — italic pull quote */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.1rem",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#3D2200",
              lineHeight: 1.75,
              marginBottom: "24px",
            }}
          >
            "Born from a belief that exceptional desserts deserve an
            exceptional setting — ELATŌ CELEBRÉ exists to elevate the
            ordinary into the unforgettable."
          </motion.p>

          {/* Story paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.62, duration: 0.8 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.88rem",
              fontWeight: 300,
              color: "#5C3D1E",
              lineHeight: 1.9,
              marginBottom: "24px",
            }}
          >
            Located in Panemangalore, Karnataka, ELATŌ CELEBRÉ is more
            than a café — it is a curated experience. Every detail, from
            our handcrafted gelatos and imported ingredients to our refined
            interiors and attentive service, is designed to transform
            everyday moments into celebrations worth remembering.
          </motion.p>

          {/* Philosophy paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.74, duration: 0.8 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.88rem",
              fontWeight: 300,
              color: "#5C3D1E",
              lineHeight: 1.9,
              marginBottom: "36px",
            }}
          >
            We believe hospitality is not a gesture — it is a standard.
            That luxury is not about price — it is about intentionality.
            And that the finest scoop of gelato, served in the right
            setting, can make any moment feel worth celebrating.
          </motion.p>

          {/* Signature CTA */}
          <motion.a
            href="#visit"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#visit")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.85, duration: 0.7 }}
            whileHover={{ x: 4 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#B58A16",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Plan Your Visit
            <span style={{ fontSize: "0.85rem" }}>→</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

// ── Mobile version ────────────────────────────────────────────────────────────
function AboutMobile() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="about" style={{ background: "#F8F4EC", overflow: "hidden" }}>
      <div
        style={{
          padding: "48px 28px 24px",
          textAlign: "left",
        }}
      >
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#B58A16",
            marginBottom: "16px",
          }}
        >
          Our Story
        </p>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 8vw, 2.6rem)",
            fontWeight: 300,
            color: "#24180E",
            lineHeight: 1.15,
            letterSpacing: "0.04em",
          }}
        >
          A Destination,<br />Not Merely A Café
        </h2>
      </div>
      {/* Full-width image */}
      <div style={{ padding: "0 16px" }}>
        <motion.div
          style={{
            width: "100%",
            borderRadius: "2px",
          aspectRatio: "4/3",
          overflow: "hidden",
          position: "relative",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/assets/images/about.webp"
          alt="ELATŌ CELEBRÉ"
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
        {/* Location label over image */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            background: "rgba(26,14,6,0.6)",
            backdropFilter: "blur(8px)",
            padding: "8px 14px",
            borderLeft: "1px solid rgba(181,138,22,0.45)",
          }}
        >
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.52rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(248,244,236,0.8)",
            }}
          >
            Panemangalore, Karnataka
          </p>
        </div>
      </motion.div>
      </div>


      {/* Content */}
      <div
        ref={ref}
        style={{
          padding: "40px 28px 64px",
          maxWidth: "560px",
          margin: "0 auto",
        }}
      >

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          style={{
            width: "24px",
            height: "1.5px",
            background: "#B58A16",
            opacity: 0.65,
            marginBottom: "24px",
            transformOrigin: "left center",
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.8 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.05rem",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#3D2200",
            lineHeight: 1.75,
            marginBottom: "20px",
          }}
        >
          "Born from a belief that exceptional desserts deserve an exceptional
          setting — ELATŌ CELEBRÉ exists to elevate the ordinary into the
          unforgettable."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.8 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 300,
            color: "#5C3D1E",
            lineHeight: 1.9,
            marginBottom: "20px",
          }}
        >
          Located in Panemangalore, Karnataka, ELATŌ CELEBRÉ is more than
          a café — it is a curated experience. Every detail is designed to
          transform everyday moments into celebrations worth remembering.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65, duration: 0.8 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 300,
            color: "#5C3D1E",
            lineHeight: 1.9,
            marginBottom: "32px",
          }}
        >
          We believe hospitality is not a gesture — it is a standard. That
          luxury is not about price — it is about intentionality.
        </motion.p>

        <motion.a
          href="#visit"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#visit")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.75, duration: 0.7 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.62rem",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#B58A16",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Plan Your Visit
          <span style={{ fontSize: "0.85rem" }}>→</span>
        </motion.a>
      </div>
    </section>
  );
}