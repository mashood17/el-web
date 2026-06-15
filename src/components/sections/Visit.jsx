import ScrollReveal from "../ui/ScrollReveal";

export default function Visit() {
  return (
    <section id="visit" className="section-pad elato-pattern">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <ScrollReveal style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.62rem", fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#B58A16", marginBottom: "14px",
          }}>
            Find Us
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 300, color: "#24180E", letterSpacing: "0.06em",
          }}>
            Visit ELATŌ
          </h2>
          <div className="gold-line" style={{ width: "40px", margin: "16px auto 0" }} />
        </ScrollReveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px", alignItems: "start",
        }}
        className="grid-cols-1 md:grid-cols-2"
        >
          {/* Info */}
          <ScrollReveal variant="fadeLeft">
            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              {[
                {
                  label: "Location",
                  content: "Panemangalore, Narikombu\nKarnataka – 574231",
                },
                {
                  label: "Hours",
                  content: "Monday – Saturday\n11:00 AM – 11:00 PM\n\nSunday\n11:00 AM – 10:00 PM",
                },
                {
                  label: "Contact",
                  content: "+91 97314 00313\n+91 96860 77485",
                },
              ].map(({ label, content }) => (
                <div key={label}>
                  <p style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.6rem", fontWeight: 600,
                    letterSpacing: "0.24em", textTransform: "uppercase",
                    color: "#B58A16", marginBottom: "10px",
                  }}>
                    {label}
                  </p>
                  {content.split("\n").map((line, i) => (
                    <p key={i} style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.88rem", fontWeight: 300,
                      color: "#3D2200", lineHeight: 1.8,
                      marginBottom: line === "" ? "8px" : "0",
                    }}>
                      {line || "\u00A0"}
                    </p>
                  ))}
                </div>
              ))}

              {/* Action buttons */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="https://maps.app.goo.gl/9cLJC9pi2piR6yn29"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.72rem", fontWeight: 500,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "#24180E", background: "#B58A16",
                    padding: "11px 22px", borderRadius: "2px",
                    textDecoration: "none",
                  }}
                >
                  Get Directions
                </a>
                <a
                  href="https://wa.me/919731400313"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.72rem", fontWeight: 400,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "#24180E",
                    border: "1px solid rgba(36,24,14,0.3)",
                    padding: "11px 22px", borderRadius: "2px",
                    textDecoration: "none",
                  }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal variant="fadeRight">
            <div style={{
              borderRadius: "2px", overflow: "hidden",
              boxShadow: "0 16px 48px rgba(36,24,14,0.12)",
              border: "1px solid rgba(181,138,22,0.15)",
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d74.9!3d12.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ4JzAwLjAiTiA3NMKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ELATŌ CELEBRÉ Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}