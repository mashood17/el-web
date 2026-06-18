import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Cuisine", href: "#cuisine" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Desktop Navbar ───────────────────────────────────────────────────────────
function DesktopNav({ scrolled }) {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: scrolled ? "0 56px" : "0 56px",
        height: scrolled ? "64px" : "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(26,14,6,0.88)"
          : "linear-gradient(to bottom, rgba(26,14,6,0.55) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(181,138,22,0.1)"
          : "none",
        transition: "height 0.4s ease, background 0.4s ease, border 0.4s ease",
      }}
    >
      {/* Wordmark — left */}
      <button
        onClick={() => scrollTo("#home")}
        style={{
          background: "none", border: "none",
          cursor: "pointer", padding: 0,
          display: "flex", flexDirection: "column",
          alignItems: "flex-start", gap: "2px",
        }}
      >
        <span style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "0.95rem",
          fontWeight: 400,
          letterSpacing: "0.28em",
          color: "#F8F4EC",
          textTransform: "uppercase",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}>
          Elatō Celebré
        </span>
        <span style={{
          display: "block",
          width: "100%",
          height: "1px",
          background: "linear-gradient(90deg, rgba(181,138,22,0.5), transparent)",
        }} />
      </button>

      {/* Links — center */}
      <div style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: "40px",
      }}>
        {links.map(({ label, href }) => (
          <button
            key={href}
            onClick={() => scrollTo(href)}
            onMouseEnter={() => setHovered(href)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: "none", border: "none",
              cursor: "pointer", padding: "4px 0",
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: hovered === href
                ? "#F8F4EC"
                : "rgba(248,244,236,0.6)",
              transition: "color 0.25s ease",
              position: "relative",
            }}
          >
            {label}
            {/* Underline on hover */}
            <motion.span
              animate={{ scaleX: hovered === href ? 1 : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{
                position: "absolute",
                bottom: 0, left: 0,
                width: "100%", height: "1px",
                background: "#B58A16",
                display: "block",
                transformOrigin: "left center",
              }}
            />
          </button>
        ))}
      </div>

      {/* CTA — right */}
      <a
        href="https://el-ce.vercel.app/"
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.62rem",
          fontWeight: 500,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#B58A16",
          textDecoration: "none",
          padding: "8px 20px",
          border: "1px solid rgba(181,138,22,0.4)",
          borderRadius: "1px",
          transition: "all 0.25s ease",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(181,138,22,0.1)";
          e.currentTarget.style.borderColor = "rgba(181,138,22,0.7)";
          e.currentTarget.style.color = "#D4A82A";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "rgba(181,138,22,0.4)";
          e.currentTarget.style.color = "#B58A16";
        }}
      >
        Our Menu
      </a>
    </motion.nav>
  );
}

// ─── Mobile Navbar ────────────────────────────────────────────────────────────
function MobileNav({ scrolled }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    setTimeout(() => scrollTo(href), 300);
  };

  return (
    <>
      {/* Mobile topbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: "60px",
          display: "grid",
            gridTemplateColumns: "1fr auto auto",
            alignItems: "center",
            columnGap: "14px",
          padding: "0 20px",
          background: scrolled || open
            ? "rgba(26,14,6,0.95)"
            : "linear-gradient(to bottom, rgba(26,14,6,0.6) 0%, transparent 100%)",
          backdropFilter: scrolled || open ? "blur(12px)" : "none",
          borderBottom: scrolled || open
            ? "1px solid rgba(181,138,22,0.1)"
            : "none",
          transition: "background 0.3s ease",
        }}
      >
        {/* Wordmark */}
        <button
          onClick={() => { setOpen(false); scrollTo("#home"); }}
          style={{
            background: "none", border: "none", cursor: "pointer",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "0.88rem",
            fontWeight: 400,
            letterSpacing: "0.22em",
            color: "#F8F4EC",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Elatō Celebré
        </button>

        <a
            href="https://el-ce.vercel.app/"
            style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.58rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#24180E",
                background: "#B58A16",
                padding: "10px 14px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                borderRadius: "1px",
            }}
            >
            Menu
            </a>

        {/* Luxury menu trigger */}
        <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
        <AnimatePresence mode="wait">
            {open ? (
            <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0 }}
            >
                <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#B58A16"
                strokeWidth="1.4"
                >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </motion.div>
            ) : (
            <motion.div
                key="hamburger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                }}
            >
                <span
                style={{
                    width: "18px",
                    height: "1px",
                    background: "#F8F4EC",
                }}
                />
                <span
                style={{
                    width: "24px",
                    height: "1px",
                    background: "#B58A16",
                }}
                />
                <span
                style={{
                    width: "18px",
                    height: "1px",
                    background: "#F8F4EC",
                    alignSelf: "flex-end",
                }}
                />
            </motion.div>
            )}
        </AnimatePresence>
        </button>
      </motion.div>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 90,
              background: "rgba(20,10,4,0.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "80px 32px 48px",
            }}
          >
            

            {/* Nav links */}
            <nav style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: "0",
              width: "100%", maxWidth: "280px",
              marginBottom: "48px",
            }}>
              {links.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.07 }}
                  onClick={() => handleNav(href)}
                  style={{
                    background: "none", border: "none",
                    cursor: "pointer", padding: "16px 0",
                    width: "100%", textAlign: "center",
                    borderBottom: "1px solid rgba(181,138,22,0.08)",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.55rem", fontWeight: 300,
                    letterSpacing: "0.12em",
                    color: "rgba(248,244,236,0.85)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#B58A16"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(248,244,236,0.85)"}
                >
                  {label}
                </motion.button>
              ))}
            </nav>


            {/* Bottom indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              style={{
                position: "absolute",
                bottom: "28px",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.55rem",
                letterSpacing: "0.22em",
                color: "rgba(181,138,22,0.25)",
                textTransform: "uppercase",
              }}
            >
              Panemangalore, Karnataka
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Main export — JS-based responsive switching ──────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile
    ? <MobileNav scrolled={scrolled} />
    : <DesktopNav scrolled={scrolled} />;
}