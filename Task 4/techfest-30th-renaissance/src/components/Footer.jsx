// Footer.jsx
import React from "react";

export default function Footer() {
  const handleScrollToLink = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (targetId === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "OVERVIEW", href: "#top" },
    { label: "CONCEPT", href: "#thesis" },
    { label: "EXHIBITIONS", href: "#knowledge" },
    { label: "COMPETITIONS", href: "#invention" },
    { label: "LECTURES", href: "#radar" },
    { label: "WORKSHOPS", href: "#workshops" },
    { label: "EVENTS", href: "#events" },
    { label: "ARCHIVE", href: "#archive" },
    { label: "TIME CAPSULE", href: "#time-capsule" },
  ];

  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "var(--color-bg, #07070b)",
        color: "var(--color-text, #e2e8f0)",
        borderTop: "1px solid var(--border-subtle, rgba(212, 175, 55, 0.15))",
        padding: "4.5rem 0 3rem 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="footer-grid">
          {/* Brand & Editorial Column */}
          <div className="footer-brand">
            <div className="brand-header">
              <svg
                width="24"
                height="24"
                viewBox="0 0 100 100"
                className="footer-seal-svg"
                aria-hidden="true"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="32"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="1"
                />
                <line
                  x1="50"
                  y1="10"
                  x2="50"
                  y2="90"
                  stroke="#d4af37"
                  strokeWidth="1"
                />
                <line
                  x1="10"
                  y1="50"
                  x2="90"
                  y2="50"
                  stroke="#d4af37"
                  strokeWidth="1"
                />
                <circle cx="50" cy="50" r="5" fill="#f1ebdd" />
              </svg>
              <div>
                <h3 className="brand-title">TECHFEST 30TH EDITION</h3>
                <span className="brand-sub">IIT BOMBAY</span>
              </div>
            </div>

            <p className="brand-description">
              An ongoing dialogue between human inquiry, science, and technical
              expression. Preserving curiosity as the foundational compass for
              discovery.
            </p>
          </div>

          {/* Compact Navigation Area */}
          <div className="footer-nav">
            <span className="nav-title">ATLAS NAVIGATION</span>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToLink(e, link.href)}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Link Section */}
          <div className="footer-external">
            <span className="nav-title">EXTERNAL PORTAL</span>
            <a
              href="https://techfest.org"
              target="_blank"
              rel="noopener noreferrer"
              className="external-portal-btn"
            >
              <span>TECHFEST.ORG</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Seal */}
        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="bottom-content">
            <span className="copyright-text">© TECHFEST · IIT BOMBAY</span>
            <span className="aesthetic-tag">
              CONCEPT DIRECTION: AETHERIAL RENAISSANCE
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 3fr 1.5fr;
            gap: 2.5rem;
          }
        }

        /* Brand Column */
        .brand-header {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          margin-bottom: 1.25rem;
        }

        .footer-seal-svg {
          flex-shrink: 0;
          opacity: 0.85;
        }

        .brand-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--color-ivory, #f1ebdd);
          margin: 0;
          line-height: 1;
        }

        .brand-sub {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.15em;
          color: var(--color-gold, #d4af37);
          display: block;
          margin-top: 0.25rem;
        }

        .brand-description {
          font-family: var(--font-sans, system-ui, sans-serif);
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--color-text-muted, #94a3b8);
          margin: 0;
          max-width: 320px;
        }

        /* Nav Titles */
        .nav-title {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.6875rem;
          letter-spacing: 0.15em;
          color: var(--color-gold, #d4af37);
          text-transform: uppercase;
          display: block;
          margin-bottom: 1.25rem;
        }

        /* Navigation List */
        .nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem 1.5rem;
        }

        @media (min-width: 480px) and (max-width: 767px) {
          .nav-list {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .footer-link {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--color-text-muted, #94a3b8);
          text-decoration: none;
          transition: color 0.2s ease;
          display: inline-block;
        }

        .footer-link:hover {
          color: var(--color-ivory, #f1ebdd);
        }

        .footer-link:focus-visible {
          outline: 1px solid var(--color-gold, #d4af37);
          outline-offset: 3px;
          color: var(--color-gold, #d4af37);
        }

        /* External Portal Button */
        .external-portal-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--color-ivory, #f1ebdd);
          text-decoration: none;
          padding: 0.625rem 1rem;
          border: 1px solid rgba(212, 175, 55, 0.25);
          background: rgba(12, 13, 20, 0.4);
          transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;
        }

        .external-portal-btn:hover {
          border-color: var(--color-gold, #d4af37);
          background: rgba(212, 175, 55, 0.08);
          color: #ffffff;
        }

        .external-portal-btn:focus-visible {
          outline: 1px solid var(--color-gold, #d4af37);
          outline-offset: 3px;
        }

        /* Footer Bottom */
        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-divider {
          width: 100%;
          height: 1px;
          background: rgba(212, 175, 55, 0.12);
        }

        .bottom-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
          text-align: center;
        }

        @media (min-width: 640px) {
          .bottom-content {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        .copyright-text {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.6875rem;
          letter-spacing: 0.1em;
          color: rgba(212, 175, 55, 0.6);
        }

        .aesthetic-tag {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.15em;
          color: rgba(212, 175, 55, 0.35);
          text-transform: uppercase;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-link,
          .external-portal-btn {
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
}
