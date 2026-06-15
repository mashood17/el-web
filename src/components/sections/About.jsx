import ScrollReveal from "../ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: "#F8F4EC" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>

        <ScrollReveal variant="fadeUp">
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.62rem", fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#B58A16", marginBottom: "14px",
          }}>
            Our Story
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 300, color: "#24180E",
            letterSpacing: "0.06em", marginBottom: "24px",
          }}>
            A Destination, Not Merely A Café
          </h2>
          <div className="gold-line" style={{ width: "40px", margin: "0 auto 40px" }} />
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.15}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
            fontWeight: 300, fontStyle: "italic",
            color: "#3D2200", lineHeight: 1.9,
            marginBottom: "28px",
          }}>
            "ELATŌ CELEBRÉ was born from a simple belief — that exceptional desserts deserve an exceptional setting. We blend artisanal craftsmanship, premium ingredients, and elegant hospitality into an experience that transcends the ordinary."
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.25}>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.88rem", fontWeight: 300,
            color: "#5C3D1E", lineHeight: 1.85,
            marginBottom: "40px",
          }}>
            Located in Panemangalore, Karnataka, ELATŌ CELEBRÉ is more than a café — it is a curated experience. Every detail, from our handcrafted gelatos and imported ingredients to our refined interiors and attentive service, is designed to elevate everyday moments into celebrations worth remembering.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div style={{ display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap" }}>
            {[
              { number: "17+", label: "Menu Categories" },
              { number: "51+", label: "Curated Items" },
              { number: "4.8★", label: "Guest Rating" },
            ].map(({ number, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.5rem", fontWeight: 400,
                  color: "#B58A16", letterSpacing: "0.05em",
                  lineHeight: 1,
                }}>
                  {number}
                </p>
                <p style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.65rem", fontWeight: 500,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: "#A78F73", marginTop: "6px",
                }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}