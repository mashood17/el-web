import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    id: 1,
    index: "01",
    title: "Signature Gelatos",
    subtitle: "The Art of the Scoop",
    description:
      "Slow-churned from Madagascar vanilla pods, Sicilian pistachios, and Belgian couverture. Every flavour is a studied composition — rich in texture, precise in balance, and unmistakably artisanal.",
    image: "/assets/images/specialty-gelato.jpg",
    cta: "View Gelato Selection",
  },
  {
    id: 2,
    index: "02",
    title: "Artisan Desserts",
    subtitle: "Patisserie & Confections",
    description:
      "Handcrafted daily in our kitchen. New York cheesecakes with biscuit foundations, dark forest gateaux layered with precision, tiramisu soaked in single-origin espresso. Desserts that demand attention.",
    image: "/assets/images/specialty-dessert.jpg",
    cta: "Explore Desserts",
  },
  {
    id: 3,
    index: "03",
    title: "Café & Beverage Collection",
    subtitle: "Liquid Craftsmanship",
    description:
      "House-crafted mojitos with fresh mint and premium syrups. Thick indulgent shakes. Truffle-finished bites and brioche sandwiches. A complete café experience presented with the same care as every other element of ELATŌ.",
    image: "/assets/images/specialty-beverage.jpg",
    cta: "Browse Beverages",
  },
];

// Animated gold line that draws on scroll entry
function GoldRevealLine({ delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} style={{ overflow: "hidden", marginBottom: "20px" }}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        style={{
          width: "24px", height: "1px",
          background: "#B58A16", opacity: 0.7,
          transformOrigin: "left center",
        }}
      />
    </div>
  );
}

function DesktopRow({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  // Parallax on image within row
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const contentVariants = {
    hidden: { opacity: 0, x: isEven ? 32 : -32 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: isEven ? -32 : 32 },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div
      ref={ref}
      style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px", marginBottom: "80px" }}
    >
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "440px",
          boxShadow: hovered
            ? "0 20px 64px rgba(36,24,14,0.13)"
            : "0 8px 40px rgba(36,24,14,0.07)",
          transition: "box-shadow 0.5s ease",
        }}
      >
        {/* Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            order: isEven ? 1 : 2,
            overflow: "hidden",
            position: "relative",
            maxHeight: "460px",
          }}
        >
          <motion.div style={{ y: imgY, height: "115%", marginTop: "-7.5%" }}>
            <motion.img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", display: "block",
              }}
              animate={{ scale: hovered ? 1.04 : 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              loading="lazy"
            />
          </motion.div>

          {/* Hover overlay */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(181,138,22,0.12) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          {/* Index watermark on image */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              position: "absolute", bottom: "16px",
              left: isEven ? "auto" : "20px",
              right: isEven ? "20px" : "auto",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.65rem", fontWeight: 300,
              letterSpacing: "0.28em",
              color: "rgba(248,244,236,0.55)",
              textTransform: "uppercase",
            }}
          >
            {item.index} / 03
          </motion.span>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            order: isEven ? 2 : 1,
            background: isEven ? "#EDE0C8" : "#E8D9BC",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "56px 52px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ghost index */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            style={{
              position: "absolute",
              top: "16px",
              right: isEven ? "24px" : "auto",
              left: isEven ? "auto" : "24px",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "7rem", fontWeight: 300,
              color: "rgba(181,138,22,0.06)",
              lineHeight: 1, letterSpacing: "0.1em",
              userSelect: "none", pointerEvents: "none",
            }}
          >
            {item.index}
          </motion.span>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.6rem", fontWeight: 500,
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: "#B58A16", marginBottom: "14px",
            }}
          >
            {item.subtitle}
          </motion.p>

          {/* Title — character reveal */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)",
              fontWeight: 400, color: "#24180E",
              letterSpacing: "0.04em",
              lineHeight: 1.1, marginBottom: "20px",
            }}
          >
            {item.title}
          </motion.h3>

          <GoldRevealLine delay={0.55} />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.85rem", fontWeight: 300,
              color: "#5C3D1E", lineHeight: 1.9,
              marginBottom: "32px", maxWidth: "340px",
            }}
          >
            {item.description}
          </motion.p>

          {/* CTA */}
          <motion.a
            href="https://el-ce.vercel.app/"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.75 }}
            whileHover={{ x: 5 }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.6rem", fontWeight: 500,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#B58A16", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: "10px",
            }}
          >
            {item.cta}
            <motion.span
              animate={{ x: hovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: "0.85rem" }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

function MobileRow({ item }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ marginBottom: "72px" }}
    >
      {/* Image */}
      <motion.div
        style={{
          width: "100%", aspectRatio: "4/3",
          overflow: "hidden", marginBottom: "28px",
          position: "relative",
        }}
        onTapStart={() => setHovered(true)}
        onTap={() => setHovered(false)}
      >
        <motion.img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          initial={{ scale: 1.08 }}
          animate={inView ? { scale: 1 } : { scale: 1.08 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          loading="lazy"
        />
        <div style={{
          position: "absolute", top: "14px", left: "14px",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "0.65rem", fontWeight: 300,
          letterSpacing: "0.22em",
          color: "rgba(248,244,236,0.55)",
        }}>
          {item.index} / 03
        </div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.58rem", fontWeight: 600,
          letterSpacing: "0.28em", textTransform: "uppercase",
          color: "#B58A16", marginBottom: "10px",
        }}
      >
        {item.subtitle}
      </motion.p>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "2rem", fontWeight: 400,
          color: "#24180E", letterSpacing: "0.04em",
          lineHeight: 1.1, marginBottom: "16px",
        }}
      >
        {item.title}
      </motion.h3>

      <GoldRevealLine delay={0.4} />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.45 }}
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.85rem", fontWeight: 300,
          color: "#5C3D1E", lineHeight: 1.85, marginBottom: "20px",
        }}
      >
        {item.description}
      </motion.p>

      <motion.a
        href="https://el-ce.vercel.app/"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.55 }}
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.6rem", fontWeight: 500,
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "#B58A16", textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: "8px",
        }}
      >
        {item.cta}
        <span style={{ fontSize: "0.7rem" }}>→</span>
      </motion.a>
    </motion.div>
  );
}

// Animated section header
function SectionHeader({ isMobile }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      style={{
        maxWidth: "800px", margin: "0 auto",
        padding: isMobile ? "60px 28px 48px" : "100px 40px 80px",
        textAlign: "center",
      }}
    >
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={inView ? { opacity: 1, letterSpacing: "0.32em" } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.6rem", fontWeight: 600,
          letterSpacing: "0.32em", textTransform: "uppercase",
          color: "#B58A16", marginBottom: "16px",
        }}
      >
        Our Offerings
      </motion.p>

      {/* Title */}
      <div style={{ overflow: "hidden" }}>
        <motion.h2
          initial={{ y: "100%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? "clamp(2rem, 8vw, 2.8rem)" : "clamp(2.4rem, 4vw, 3.2rem)",
            fontWeight: 300, color: "#24180E",
            letterSpacing: "0.06em", lineHeight: 1.15,
            marginBottom: "20px",
          }}
        >
          Crafted With Intention
        </motion.h2>
      </div>

      {/* Gold divider — draws from center */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        style={{
          width: "36px", height: "1px",
          background: "#B58A16",
          margin: "0 auto 20px",
          transformOrigin: "center",
        }}
      />

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.55 }}
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.88rem", fontWeight: 300,
          color: "#6B4A28", lineHeight: 1.8,
          maxWidth: "440px", margin: "0 auto",
        }}
      >
        Three experiences that define ELATŌ. Each crafted with the same
        obsession for quality, texture, and presentation.
      </motion.p>
    </div>
  );
}

export default function Specialties() {
  const [isMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );

  return (
    <section id="specialties" style={{ background: "#E4D6B8" }}>
      <SectionHeader isMobile={isMobile} />

      {!isMobile && (
        <div style={{ paddingBottom: "80px" }}>
          {experiences.map((item, i) => (
            <DesktopRow key={item.id} item={item} index={i} />
          ))}
        </div>
      )}

      {isMobile && (
        <div style={{ padding: "0 24px", paddingBottom: "60px" }}>
          {experiences.map((item) => (
            <MobileRow key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}