import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import { specialties } from "../../data/specialties";

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="elato-pattern section-pad"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Heading */}
        <ScrollReveal variant="fadeUp" style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.62rem", fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#B58A16", marginBottom: "14px",
          }}>
            Our Offerings
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 300, color: "#24180E",
            letterSpacing: "0.06em",
          }}>
            Crafted With Intention
          </h2>
          <div className="gold-line" style={{ width: "40px", margin: "16px auto 0" }} />
        </ScrollReveal>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          background: "rgba(181,138,22,0.15)",
          border: "1px solid rgba(181,138,22,0.15)",
        }}>
          {specialties.map((item, i) => (
            <ScrollReveal key={item.id} variant="fadeUp" delay={i * 0.08}>
              <div
                style={{
                  padding: "40px 32px",
                  background: "#E4D6B8",
                  transition: "background 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#EDE0C4"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#E4D6B8"}
              >
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.58rem", fontWeight: 600,
                  letterSpacing: "0.24em", textTransform: "uppercase",
                  color: "#8A9A5B", marginBottom: "12px",
                }}>
                  {item.accent}
                </p>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.35rem", fontWeight: 500,
                  color: "#24180E", marginBottom: "12px",
                  letterSpacing: "0.03em",
                }}>
                  {item.name}
                </h3>
                <div style={{ width: "20px", height: "1px", background: "#B58A16", opacity: 0.6, marginBottom: "14px" }} />
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.82rem", fontWeight: 300,
                  color: "#5C3D1E", lineHeight: 1.7,
                }}>
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}