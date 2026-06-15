import ScrollReveal from "../ui/ScrollReveal";

export default function Celebrations() {
  return (
    <section style={{ background: "#24180E", overflow: "hidden" }} className="section-pad">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="grid-cols-1 md:grid-cols-2"
        >
          {/* Image */}
          <ScrollReveal variant="fadeLeft">
            <div style={{
              aspectRatio: "3/4", overflow: "hidden",
              borderRadius: "2px",
              boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
              position: "relative",
            }}>
              <img
                src="/assets/images/celebrations.jpg"
                alt="Celebrations at ELATŌ CELEBRÉ"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(36,24,14,0.5) 0%, transparent 60%)",
              }} />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal variant="fadeRight">
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.62rem", fontWeight: 600,
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: "#B58A16", marginBottom: "16px",
            }}>
              Special Occasions
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 300, color: "#F8F4EC",
              letterSpacing: "0.05em", lineHeight: 1.15,
              marginBottom: "24px",
            }}>
              Celebrate Every<br />Milestone Here
            </h2>
            <div style={{ width: "24px", height: "1px", background: "#B58A16", opacity: 0.6, marginBottom: "24px" }} />
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.88rem", fontWeight: 300,
              color: "rgba(248,244,236,0.65)", lineHeight: 1.85,
              marginBottom: "32px",
            }}>
              Birthdays, anniversaries, corporate gatherings, or simply moments worth marking — ELATŌ provides the perfect setting. Our team crafts personalised experiences with decorated setups, curated dessert selections, and attentive hospitality.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
              {["Custom dessert arrangements", "Personalised celebration setups", "Private gathering spaces", "Dedicated hospitality team"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "5px", height: "5px", background: "#B58A16", borderRadius: "50%", flexShrink: 0 }} />
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.82rem", fontWeight: 300,
                    color: "rgba(248,244,236,0.7)",
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919731400313?text=Hi%20ELATŌ!%20I'd%20like%20to%20enquire%20about%20a%20celebration%20booking."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.72rem", fontWeight: 500,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#24180E",
                background: "#B58A16",
                padding: "13px 28px", borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Enquire on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}