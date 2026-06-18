import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d74.8889!3d12.8765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a700766104dd%3A0xeedacba07390ccd2!2sELAT%C5%8C%20CELEBR%C3%89!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
const MAPS_DIRECTIONS =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5789860225887!2d75.0464367735871!3d12.870447117090926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4a700766104dd%3A0xeedacba07390ccd2!2zRUxBVMWMIENFTEVCUsOJ!5e0!3m2!1sen!2sin!4v1781811000825!5m2!1sen!2sin";

/* ─── SVG Icons ───────────────────────────────────────────────────────── */
const IGIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const NavIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

const WAIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Shared primitives ───────────────────────────────────────────────── */

/* Hairline rule that reads as a luxury directory separator */
const GoldRule = ({ style = {} }) => (
  <div
    style={{
      height: "1px",
      background: "rgba(181,138,22,0.22)",
      ...style,
    }}
  />
);

/* Card eyebrow label — the typographic signature of this section */
const CardEyebrow = ({ children }) => (
  <p
    style={{
      fontFamily: "'Manrope', sans-serif",
      fontSize: "0.5rem",
      fontWeight: 700,
      letterSpacing: "0.38em",
      textTransform: "uppercase",
      color: "#B58A16",
      marginBottom: 0,
    }}
  >
    {children}
  </p>
);

/* Premium info card container */
const InfoCard = ({ children, style = {} }) => (
  <div
    style={{
      background: "rgba(255,252,245,0.45)",
      border: "1px solid rgba(181,138,22,0.18)",
      padding: "28px 32px",
      ...style,
    }}
  >
    {children}
  </div>
);

/* ─── Desktop ─────────────────────────────────────────────────────────── */
function DesktopVisit() {
  const headerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const leftInView = useInView(leftRef, { once: true, margin: "-40px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-40px" });

  return (
    <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "100px 56px 112px" }}>

      {/* ── Section header ── */}
      <div ref={headerRef} style={{ textAlign: "center", marginBottom: "72px" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.5rem",
            fontWeight: 700,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "#B58A16",
            marginBottom: "18px",
          }}
        >
          Find Us
        </motion.p>
        <div style={{ overflow: "hidden" }}>
          <motion.h2
            initial={{ y: "100%" }}
            animate={headerInView ? { y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
              fontWeight: 300,
              color: "#24180E",
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            Visit ELATŌ
          </motion.h2>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.8 }}
          style={{
            width: "32px",
            height: "1px",
            background: "#B58A16",
            margin: "18px auto 0",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* ── Two-column grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.45fr",
          gap: "52px",
          alignItems: "start",
        }}
      >

        {/* ── LEFT: information stack ── */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -14 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: "12px", height: "100%" }}
        >

          {/* Location card */}
          <InfoCard style={{ flex: 1 }}>
            <CardEyebrow>Location</CardEyebrow>
            <GoldRule style={{ margin: "14px 0 20px" }} />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.2rem",
                fontWeight: 400,
                color: "#24180E",
                lineHeight: 1.75,
                letterSpacing: "0.015em",
                margin: 0,
              }}
            >
              Panemangalore, Narikombu
              <br />
              Karnataka
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.9rem",
                  letterSpacing: "0.06em",
                  color: "#6B4A28",
                }}
              >
                {" "}— 574 231
              </span>
            </p>
          </InfoCard>

          {/* Hours card */}
          <InfoCard>
            <CardEyebrow>Opening Hours</CardEyebrow>
            <GoldRule style={{ margin: "14px 0 20px" }} />
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {[
                  { day: "Monday — Saturday", time: "11:00 AM — 11:00 PM" },
                  { day: "Sunday", time: "11:00 AM — 10:00 PM" },
                ].map(({ day, time }, i) => (
                  <tr
                    key={day}
                    style={{
                      borderBottom: i === 0 ? "1px solid rgba(181,138,22,0.1)" : "none",
                    }}
                  >
                    <td
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "0.78rem",
                        fontWeight: 400,
                        color: "#6B4A28",
                        letterSpacing: "0.03em",
                        padding: "10px 0",
                        paddingRight: "24px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {day}
                    </td>
                    <td
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        color: "#24180E",
                        letterSpacing: "0.03em",
                        padding: "10px 0",
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </InfoCard>

          {/* Contact card */}
          <InfoCard>
            <CardEyebrow>Contact</CardEyebrow>
            <GoldRule style={{ margin: "14px 0 20px" }} />

            {/* Phone numbers */}
            <div style={{ marginBottom: "22px" }}>
              {["+91 97314 00313", "+91 96860 77485"].map((num, i) => (
                <div
                  key={num}
                  style={{
                    borderBottom: i === 0 ? "1px solid rgba(181,138,22,0.1)" : "none",
                    paddingBottom: i === 0 ? "10px" : 0,
                    marginBottom: i === 0 ? "10px" : 0,
                  }}
                >
                  <a
                    href={`tel:${num.replace(/\s/g, "")}`}
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.95rem",
                      fontWeight: 400,
                      letterSpacing: "0.04em",
                      color: "#24180E",
                      textDecoration: "none",
                      display: "block",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#B58A16")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#24180E")}
                  >
                    {num}
                  </a>
                </div>
              ))}
            </div>

            {/* Social links — on a single row, understated */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                paddingTop: "4px",
              }}
            >
              {[
                {
                  href: "https://instagram.com/elato.in",
                  icon: <IGIcon />,
                  label: "@elato.in",
                },
                {
                  href: "https://wa.me/919731400313",
                  icon: <WAIcon />,
                  label: "WhatsApp",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 400,
                    letterSpacing: "0.07em",
                    color: "#6B4A28",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#B58A16")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6B4A28")}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </InfoCard>
        </motion.div>

        {/* ── RIGHT: map as destination feature ── */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 14 }}
          animate={rightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Destination card */}
          <div
            style={{
              border: "1px solid rgba(181,138,22,0.2)",
              background: "rgba(255,252,245,0.45)",
              padding: "14px 14px 0 14px",
            }}
          >
            {/* Map header strip */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 4px 12px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  letterSpacing: "0.36em",
                  textTransform: "uppercase",
                  color: "#B58A16",
                }}
              >
                Location on Map
              </span>
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.58rem",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#6B4A28",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#B58A16")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6B4A28")}
              >
                Open full map
                <NavIcon size={11} />
              </a>
            </div>

            {/* Map iframe */}
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ELATŌ CELEBRÉ Location"
            />

            {/* Landmark tags — elegant destination cues */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderTop: "1px solid rgba(181,138,22,0.15)",
              }}
            >
              {[
                { eyebrow: "On Highway", detail: "NH 75, Near HP Pump" },
                { eyebrow: "Landmark", detail: "Panemangalore, Narikombu" },
              ].map(({ eyebrow, detail }, i) => (
                <div
                  key={eyebrow}
                  style={{
                    padding: "16px 18px",
                    borderRight: i === 0 ? "1px solid rgba(181,138,22,0.15)" : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.48rem",
                      fontWeight: 700,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "#B58A16",
                      marginBottom: "5px",
                    }}
                  >
                    {eyebrow}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      color: "#24180E",
                      letterSpacing: "0.01em",
                      margin: 0,
                    }}
                  >
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Get Directions — belongs to the map card */}
          <a
            href={MAPS_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              padding: "18px 28px",
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.58rem",
              fontWeight: 600,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#1A0E06",
              background: "#B58A16",
              marginTop: "20px",
              textDecoration: "none",
              boxSizing: "border-box",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#A07A12")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#B58A16")}
          >
            <NavIcon size={13} />
            Get Directions
          </a>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Mobile ──────────────────────────────────────────────────────────── */
function MobileVisit() {
  const headerRef = useRef(null);
  const infoRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const infoInView = useInView(infoRef, { once: true, margin: "-40px" });

  return (
    <div>
      {/* Header */}
      <div ref={headerRef} style={{ textAlign: "center", padding: "60px 28px 36px" }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.5rem",
            fontWeight: 700,
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color: "#B58A16",
            marginBottom: "14px",
          }}
        >
          Find Us
        </motion.p>
        <div style={{ overflow: "hidden" }}>
          <motion.h2
            initial={{ y: "100%" }}
            animate={headerInView ? { y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 8vw, 2.6rem)",
              fontWeight: 300,
              color: "#24180E",
              letterSpacing: "0.05em",
              margin: 0,
            }}
          >
            Visit ELATŌ
          </motion.h2>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={headerInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            width: "28px",
            height: "1px",
            background: "#B58A16",
            margin: "14px auto 0",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Map — destination card, mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ margin: "0 20px" }}
      >
        <div
          style={{
            border: "1px solid rgba(181,138,22,0.2)",
            background: "rgba(255,252,245,0.45)",
            padding: "12px 12px 0",
          }}
        >
          {/* Map strip header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "10px",
            }}
          >
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.48rem",
                fontWeight: 700,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "#B58A16",
              }}
            >
              Location on Map
            </span>
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.55rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#6B4A28",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Open full map <NavIcon size={10} />
            </a>
          </div>
          <iframe
            src={MAPS_EMBED}
            width="100%"
            height="280"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ELATŌ CELEBRÉ Location"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderTop: "1px solid rgba(181,138,22,0.15)",
            }}
          >
            {[
              { eyebrow: "On Highway", detail: "NH 75, Near HP Pump" },
              { eyebrow: "Landmark", detail: "Panemangalore" },
            ].map(({ eyebrow, detail }, i) => (
              <div
                key={eyebrow}
                style={{
                  padding: "12px 14px",
                  borderRight: i === 0 ? "1px solid rgba(181,138,22,0.15)" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.44rem",
                    fontWeight: 700,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#B58A16",
                    marginBottom: "4px",
                  }}
                >
                  {eyebrow}
                </p>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.7rem",
                    color: "#24180E",
                    margin: 0,
                  }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
        <a
          href={MAPS_DIRECTIONS}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            padding: "16px 28px",
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.56rem",
            fontWeight: 600,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "#1A0E06",
            background: "#B58A16",
            textDecoration: "none",
            boxSizing: "border-box",
            marginTop: "10px",
          }}
        >
          <NavIcon size={12} />
          Get Directions
        </a>
      </motion.div>

      {/* Info block */}
      <motion.div
        ref={infoRef}
        initial={{ opacity: 0, y: 16 }}
        animate={infoInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ padding: "32px 20px 0", display: "flex", flexDirection: "column", gap: "12px" }}
      >
        {/* Location */}
        <InfoCard>
          <CardEyebrow>Location</CardEyebrow>
          <GoldRule style={{ margin: "12px 0 16px" }} />
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "#24180E",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Panemangalore, Narikombu
            <br />
            Karnataka
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.85rem",
                color: "#6B4A28",
                letterSpacing: "0.05em",
              }}
            >
              {" "}— 574 231
            </span>
          </p>
        </InfoCard>

        {/* Hours */}
        <InfoCard>
          <CardEyebrow>Opening Hours</CardEyebrow>
          <GoldRule style={{ margin: "12px 0 16px" }} />
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {[
                { day: "Monday — Saturday", time: "11:00 AM — 11:00 PM" },
                { day: "Sunday", time: "11:00 AM — 10:00 PM" },
              ].map(({ day, time }, i) => (
                <tr
                  key={day}
                  style={{
                    borderBottom: i === 0 ? "1px solid rgba(181,138,22,0.1)" : "none",
                  }}
                >
                  <td
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.72rem",
                      color: "#6B4A28",
                      padding: "9px 0",
                      paddingRight: "16px",
                    }}
                  >
                    {day}
                  </td>
                  <td
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.78rem",
                      color: "#24180E",
                      padding: "9px 0",
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </InfoCard>

        {/* Contact */}
        <InfoCard style={{ marginBottom: "64px" }}>
          <CardEyebrow>Contact</CardEyebrow>
          <GoldRule style={{ margin: "12px 0 16px" }} />
          <div style={{ marginBottom: "18px" }}>
            {[
              { label: "+91 97314 00313", href: "tel:+919731400313" },
              { label: "+91 96860 77485", href: "tel:+919686077485" },
            ].map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  letterSpacing: "0.04em",
                  color: "#24180E",
                  textDecoration: "none",
                  display: "block",
                  padding: "9px 0",
                  borderBottom: i === 0 ? "1px solid rgba(181,138,22,0.1)" : "none",
                }}
              >
                {label}
              </a>
            ))}
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            {[
              { href: "https://instagram.com/elato.in", icon: <IGIcon />, label: "@elato.in" },
              { href: "https://wa.me/919731400313", icon: <WAIcon />, label: "WhatsApp" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  letterSpacing: "0.07em",
                  color: "#6B4A28",
                  textDecoration: "none",
                  padding: "8px 0",
                }}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </InfoCard>
      </motion.div>
    </div>
  );
}

/* ─── Main export ─────────────────────────────────────────────────────── */
export default function Visit() {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 1024 : false;

  return (
    <section id="visit" style={{ background: "#E4D6B8" }}>
      {isMobile ? <MobileVisit /> : <DesktopVisit />}
    </section>
  );
}