import ScrollReveal from "../ui/ScrollReveal";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ background: "#1A0E06", borderTop: "1px solid rgba(181,138,22,0.12)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 32px 28px" }}>

        {/* Main row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gap: "48px",
          marginBottom: "48px",
          alignItems: "start",
        }}
        className="grid-cols-1 md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem", fontWeight: 300,
              letterSpacing: "0.2em", color: "#F8F4EC",
              textTransform: "uppercase", marginBottom: "8px",
            }}>
              Elatō Celebré
            </p>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.72rem", fontWeight: 300,
              color: "rgba(181,138,22,0.55)", letterSpacing: "0.06em",
              marginBottom: "20px",
            }}>
              Artisanal Desserts · Memorable Celebrations
            </p>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.75rem", fontWeight: 300,
              color: "rgba(248,244,236,0.35)", lineHeight: 1.6,
            }}>
              Panemangalore, Karnataka
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.58rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#B58A16", marginBottom: "16px",
            }}>
              Navigate
            </p>
            {[
              { label: "Home", id: "#home" },
              { label: "About", id: "#about" },
              { label: "Cuisine", id: "#cuisine" },
              { label: "Gallery", id: "#gallery" },
              { label: "Visit", id: "#visit" },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  display: "block",
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.78rem", fontWeight: 300,
                  color: "rgba(248,244,236,0.45)",
                  padding: "4px 0", letterSpacing: "0.06em",
                  transition: "color 0.2s ease",
                  textAlign: "left",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Social / Connect */}
          <div>
            <p style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.58rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#B58A16", marginBottom: "16px",
            }}>
              Connect
            </p>
            {[
              { label: "Instagram", href: "https://instagram.com/elato.in" },
              { label: "WhatsApp", href: "https://wa.me/919731400313" },
              { label: "Get Directions", href: "https://maps.app.goo.gl/9cLJC9pi2piR6yn29" },
              { label: "Our Menu", href: "https://el-ce.vercel.app/" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.78rem", fontWeight: 300,
                  color: "rgba(248,244,236,0.45)",
                  padding: "4px 0", letterSpacing: "0.06em",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(181,138,22,0.2), transparent)", marginBottom: "20px" }} />

        {/* Copyright */}
        <p style={{
          textAlign: "center",
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.62rem", fontWeight: 300,
          color: "rgba(248,244,236,0.2)",
          letterSpacing: "0.12em",
        }}>
          © {year} ELATŌ CELEBRÉ. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}