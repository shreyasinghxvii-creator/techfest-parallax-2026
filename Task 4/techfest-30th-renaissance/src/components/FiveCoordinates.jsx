// FiveCoordinates.jsx
import React from "react";

export default function FiveCoordinates() {
  const coordinates = [
    {
      id: "01",
      title: "FOUNDATIONAL INQUIRY",
      subtitle: "ORIGIN & CURIOSITY",
      description:
        "Preserving raw curiosity as the essential catalyst for scientific discovery and technical innovation.",
    },
    {
      id: "02",
      title: "SYNTHETIC DIALOGUE",
      subtitle: "INTERDISCIPLINARY FUSION",
      description:
        "Bridging specialized disciplines to cultivate cross-pollination between code, physics, art, and biology.",
    },
    {
      id: "03",
      title: "ETHICAL HARMONY",
      subtitle: "HUMAN-CENTRIC ADVANCEMENT",
      description:
        "Ensuring engineered systems prioritize human well-being, ecological stability, and ethical responsibility.",
    },
    {
      id: "04",
      title: "OPEN EXPLORATION",
      subtitle: "ACCESSIBLE DISCOVERY",
      description:
        "Democratizing access to complex technical frameworks and fostering open collaboration across global borders.",
    },
    {
      id: "05",
      title: "CONTINUOUS HORIZON",
      subtitle: "THE UNKNOWN FUTURE",
      description:
        "Viewing technology not as a static destination, but as a dynamic horizon of ongoing questioning.",
    },
  ];

  return (
    <section
      id="coordinates"
      aria-label="Five Coordinates Section"
      style={{
        position: "relative",
        padding: "6rem 0",
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
        {/* Section Title Header */}
        <div style={{ marginBottom: "4rem", maxWidth: "640px" }}>
          <div
            style={{
              fontFamily: 'var(--font-mono, "Space Mono", monospace)',
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              color: "var(--color-gold, #d4af37)",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span>02 / CONCEPT NAVIGATION</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ opacity: 0.8 }}>CORE PILLARS</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading, "Cinzel", serif)',
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: "1.15",
              letterSpacing: "0.02em",
              color: "var(--color-ivory, #f1ebdd)",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            THE FIVE COORDINATES
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans, system-ui, sans-serif)",
              fontSize: "1.0625rem",
              lineHeight: "1.6",
              color: "var(--color-text-muted, #94a3b8)",
              margin: 0,
            }}
          >
            A conceptual framework framing this landing page design, exploring
            how scientific curiosity and engineering intersect for Techfest's
            30th Edition.
          </p>
        </div>

        {/* Coordinates Grid */}
        <div className="coordinates-grid">
          {coordinates.map((item) => (
            <div key={item.id} className="coordinate-card">
              <div className="card-top-bar">
                <span className="coord-number">{item.id}</span>
                <span className="coord-subtitle">{item.subtitle}</span>
              </div>
              <h3 className="coord-title">{item.title}</h3>
              <p className="coord-description">{item.description}</p>
              <div className="card-corner-mark" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .coordinates-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .coordinates-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .coordinates-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          /* Fifth card spans center on 3-col desktop layout for visual balance */
          .coordinate-card:nth-child(5) {
            grid-column: span 1;
          }
        }

        .coordinate-card {
          position: relative;
          background: rgba(12, 13, 20, 0.5);
          border: 1px solid rgba(212, 175, 55, 0.15);
          padding: 2rem 1.75rem;
          transition: border-color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .coordinate-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
          background: rgba(212, 175, 55, 0.03);
          transform: translateY(-3px);
        }

        .card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .coord-number {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-gold, #d4af37);
        }

        .coord-subtitle {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.12em;
          color: rgba(212, 175, 55, 0.7);
          text-transform: uppercase;
        }

        .coord-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: var(--color-ivory, #f1ebdd);
          margin: 0 0 0.75rem 0;
          line-height: 1.25;
        }

        .coord-description {
          font-family: var(--font-sans, system-ui, sans-serif);
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--color-text-muted, #94a3b8);
          margin: 0;
        }

        .card-corner-mark {
          position: absolute;
          bottom: 8px;
          right: 8px;
          width: 6px;
          height: 6px;
          border-right: 1px solid var(--color-gold, #d4af37);
          border-bottom: 1px solid var(--color-gold, #d4af37);
          opacity: 0.4;
        }

        @media (prefers-reduced-motion: reduce) {
          .coordinate-card {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
