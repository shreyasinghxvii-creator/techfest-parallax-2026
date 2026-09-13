import React from "react";

export default function FinalCTA() {
  const handleReturnToTop = (e) => {
    e.preventDefault();
    const topElement = document.getElementById("top") || document.body;
    topElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="final-cta"
      aria-label="Final Call to Action - Future Discovery"
      style={{
        position: "relative",
        padding: "7rem 0 6rem 0",
        backgroundColor: "var(--color-bg, #07070b)",
        color: "var(--color-text, #e2e8f0)",
        borderTop: "1px solid var(--border-subtle, rgba(212, 175, 55, 0.15))",
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
        <div className="final-cta-container">
          {/* 2D Orbital Compass Visual Centerpiece */}
          <div className="centerpiece-wrapper">
            <svg
              viewBox="0 0 400 400"
              className="centerpiece-svg"
              aria-hidden="true"
            >
              {/* Outer Faint Celestial Rings */}
              <circle
                cx="200"
                cy="200"
                r="185"
                fill="none"
                stroke="rgba(212, 175, 55, 0.12)"
                strokeWidth="0.75"
                strokeDasharray="3 6"
              />
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="rgba(212, 175, 55, 0.2)"
                strokeWidth="1"
              />

              {/* Cardinal Axis Lines */}
              <line
                x1="200"
                y1="20"
                x2="200"
                y2="380"
                stroke="rgba(212, 175, 55, 0.15)"
                strokeWidth="0.75"
              />
              <line
                x1="20"
                y1="200"
                x2="380"
                y2="200"
                stroke="rgba(212, 175, 55, 0.15)"
                strokeWidth="0.75"
              />

              {/* Inner Elliptical Horizons */}
              <ellipse
                cx="200"
                cy="200"
                rx="130"
                ry="45"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1"
                opacity="0.4"
              />
              <ellipse
                cx="200"
                cy="200"
                rx="45"
                ry="130"
                fill="none"
                stroke="#d4af37"
                strokeWidth="0.75"
                opacity="0.25"
              />

              {/* Forward Orbit Path */}
              <path
                d="M 70,200 A 130,45 0 0,1 330,200"
                fill="none"
                stroke="rgba(212, 175, 55, 0.8)"
                strokeWidth="1.5"
                className="orbit-path"
              />

              {/* Core Node */}
              <circle
                cx="200"
                cy="200"
                r="28"
                fill="#07070b"
                stroke="#d4af37"
                strokeWidth="1.5"
              />
              <circle cx="200" cy="200" r="6" fill="#f1ebdd" />

              {/* Orbital Marker Nodes */}
              <circle
                cx="330"
                cy="200"
                r="4"
                fill="#d4af37"
                className="orbit-marker"
              />
              <circle cx="70" cy="200" r="3" fill="#d4af37" opacity="0.6" />
            </svg>
          </div>

          {/* Heading and Narrative Content */}
          <div className="cta-content">
            <div className="eyebrow-tag">
              <span>09 / CLIMAX</span>
              <span style={{ opacity: 0.4 }}>|</span>
              <span style={{ opacity: 0.8 }}>CONTINUOUS INQUIRY</span>
            </div>

            <h2 className="cta-heading">THE FUTURE IS AN OPEN QUESTION.</h2>

            <p className="cta-description">
              Step into the landscape of Techfest to engage with modern ideas,
              hands-on demonstrations, technical challenges, and collaborative
              dialogues that shape technical discovery.
            </p>

            {/* CTA Button Actions */}
            <div className="cta-actions">
              <a
                href="https://techfest.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>EXPLORE TECHFEST</span>
                <svg
                  width="14"
                  height="14"
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

              <a
                href="#top"
                onClick={handleReturnToTop}
                className="btn-secondary"
              >
                <span>RETURN TO THE ATLAS</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19V5" />
                  <path d="M5 12l7-7 7 7" />
                </svg>
              </a>
            </div>

            {/* Editorial Footer Line */}
            <div className="editorial-footer">
              <div className="footer-line" />
              <span className="footer-text">KEEP LOOKING FORWARD.</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .final-cta-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 780px;
          margin: 0 auto;
        }

        /* Centerpiece Graphic */
        .centerpiece-wrapper {
          width: 100%;
          max-width: 280px;
          aspect-ratio: 1 / 1;
          margin-bottom: 2.5rem;
          position: relative;
        }

        .centerpiece-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .orbit-path {
          transition: stroke 0.3s ease;
        }

        .orbit-marker {
          transition: transform 0.5s ease;
        }

        .final-cta-container:hover .orbit-path {
          stroke: #f1ebdd;
        }

        /* Typography */
        .eyebrow-tag {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          color: var(--color-gold, #d4af37);
          text-transform: uppercase;
          margin-bottom: 1.25rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .cta-heading {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          line-height: 1.15;
          letter-spacing: 0.02em;
          color: var(--color-ivory, #f1ebdd);
          margin-bottom: 1.25rem;
          font-weight: 600;
        }

        .cta-description {
          font-family: var(--font-sans, system-ui, sans-serif);
          font-size: clamp(1rem, 1.8vw, 1.125rem);
          line-height: 1.65;
          color: var(--color-text-muted, #94a3b8);
          margin: 0 auto 2.5rem auto;
          max-width: 640px;
        }

        /* Button Group */
        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          max-width: 440px;
          justify-content: center;
          margin-bottom: 4rem;
        }

        @media (min-width: 576px) {
          .cta-actions {
            flex-direction: row;
            max-width: none;
          }
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.8125rem;
          letter-spacing: 0.12em;
          text-decoration: none;
          padding: 0.9375rem 1.75rem;
          transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
          cursor: pointer;
        }

        .btn-primary {
          background-color: var(--color-gold, #d4af37);
          color: #07070b;
          border: 1px solid var(--color-gold, #d4af37);
          font-weight: 700;
        }

        .btn-primary:hover,
        .btn-primary:focus {
          background-color: #f1ebdd;
          border-color: #f1ebdd;
          color: #07070b;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background-color: rgba(12, 13, 20, 0.6);
          color: var(--color-ivory, #f1ebdd);
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .btn-secondary:hover,
        .btn-secondary:focus {
          border-color: var(--color-gold, #d4af37);
          background-color: rgba(212, 175, 55, 0.08);
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* Footer Line */
        .editorial-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        .footer-line {
          width: 40px;
          height: 1px;
          background: rgba(212, 175, 55, 0.3);
        }

        .footer-text {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 0.8125rem;
          letter-spacing: 0.2em;
          color: var(--color-gold, #d4af37);
          opacity: 0.85;
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .btn-primary,
          .btn-secondary,
          .orbit-path,
          .orbit-marker {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
