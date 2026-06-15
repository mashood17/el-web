import ScrollReveal from "../ui/ScrollReveal";
import { motion } from "framer-motion";

export default function CuisineExperience() {
  return (
    <section id="cuisine" style={{ background: "#24180E", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="section-pad">

        {/* Header */}
        <ScrollReveal variant="fadeUp" style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.62rem", fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#B58A16", marginBottom: "14px",
          }}>
            The Experience
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 300, color: "#F8F4EC",
            letterSpacing: "0.06em", marginBottom: "16px",
          }}>
            Where Craft Meets Celebration
          </h2>
          <div style={{
            width: "40px", height: "1px",
            background: "linear-gradient(90deg, transparent, #B58A16, transparent)",
            margin: "0 auto",
          }} />
        </ScrollReveal>

        {/* Feature rows */}
        {[
          {
            image: "/assets/images/cuisine-1.jpg",
            title: "Handcrafted Gelatos",
            body: "Every flavour begins with the finest ingredients — Madagascar vanilla pods, Sicilian pistachios, Belgian couverture. Slow-churned for texture that's rich, creamy, and unmistakably artisanal.",
            reverse: false,
          },
          {
            image: "/assets/images/cuisine-2.jpg",
            title: "Premium Café Experience",
            body: "Beyond desserts, ELATŌ offers a full premium café experience. Truffle parmesan fries, brioche sandwiches, craft mojitos, and artisan shakes — all presented with the same dedication to quality.",
            reverse: true,
          },
          {
            image: "/assets/images/cuisine-3.jpg",
            title: "Celebrations Made Special",
            body: "Whether it's a birthday, anniversary, or simply a Tuesday worth celebrating — ELATŌ transforms ordinary moments into memorable experiences through thoughtful presentation and exceptional hospitality.",
            reverse: false,
          },
        ].map((row, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: row.reverse ? "row-reverse" : "row",
              gap: "64px",
              alignItems: "center",
              marginBottom: i < 2 ? "80px" : "0",
            }}
            className="flex-col md:flex-row"
          >
            {/* Image */}
            <ScrollReveal
              variant={row.reverse ? "fadeRight" : "fadeLeft"}
              style={{ flex: "0 0 48%", position: "relative" }}
            >
              <div style={{
                aspectRatio: "4/3",
                overflow: "hidden",
                borderRadius: "2px",
                boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
              }}>
                <motion.img
                  src={row.image}
                  alt={row.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  loading="lazy"
                />
              </div>
              {/* Gold accent corner */}
              <div style={{
                position: "absolute",
                [row.reverse ? "left" : "right"]: "-12px",
                bottom: "-12px",
                width: "60px", height: "60px",
                border: "1px solid rgba(181,138,22,0.3)",
                borderRadius: "1px",
                pointerEvents: "none",
              }} />
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal
              variant={row.reverse ? "fadeLeft" : "fadeRight"}
              style={{ flex: 1 }}
            >
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.6rem", fontWeight: 600,
                letterSpacing: "0.28em", textTransform: "uppercase",
                color: "#B58A16", marginBottom: "16px",
              }}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                fontWeight: 400, color: "#F8F4EC",
                letterSpacing: "0.04em",
                lineHeight: 1.15, marginBottom: "20px",
              }}>
                {row.title}
              </h3>
              <div style={{ width: "24px", height: "1px", background: "#B58A16", opacity: 0.6, marginBottom: "20px" }} />
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.88rem", fontWeight: 300,
                color: "rgba(248,244,236,0.65)",
                lineHeight: 1.85,
              }}>
                {row.body}
              </p>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
}