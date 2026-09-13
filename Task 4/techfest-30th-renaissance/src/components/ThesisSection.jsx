// ThesisSection.jsx
import React from "react";

export default function ThemeThesis() {
  const pillars = [
    {
      id: "I",
      title: "HERITAGE",
      subtitle: "FOUNDATIONAL LEGACY",
      desc: "Honouring three decades of science and technology excellence at IIT Bombay, anchoring future exploration in established academic rigor.",
    },
    {
      id: "II",
      title: "INGENUITY",
      subtitle: "PRACTICAL INNOVATION",
      desc: "Translating technological concepts into real-world applications through practical problem solving and competitive challenges.",
    },
    {
      id: "III",
      title: "FRONTIER",
      subtitle: "EMERGING HORIZONS",
      desc: "Exploring uncharted domains across synthetic intelligence, autonomous systems, and advanced scientific research.",
    },
  ];

  return (
    <section id="thesis" className="thesis-section">
      <div className="thesis-container">
        <div className="section-header">
          <span className="section-eyebrow">DESIGN DIRECTION</span>
          <h2 className="section-title">AETHERIAL RENAISSANCE</h2>
          <p className="section-intro">
            A creative landing page concept designed for Techfest IIT Bombay's
            30th Edition, exploring the intersection of scientific curiosity and
            practical engineering.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="pillar-card">
              <div className="card-header">
                <span className="pillar-num">{pillar.id}</span>
                <span className="pillar-subtitle">{pillar.subtitle}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
              <div className="card-footer-line" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .thesis-section {
          padding: 6rem 1.5rem;
          background-color: #0b0b12;
          border-top: 1px solid rgba(212, 175, 55, 0.1);
        }

        .thesis-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 4rem;
          max-width: 640px;
        }

        .section-eyebrow {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.6875rem;
          letter-spacing: 0.2em;
          color: var(--color-gold, #d4af37);
          display: block;
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--color-ivory, #f1ebdd);
          margin-bottom: 1rem;
          letter-spacing: 0.04em;
        }

        .section-intro {
          font-family: var(--font-body, "Inter", sans-serif);
          font-size: 1rem;
          line-height: 1.6;
          color: var(--color-text-muted, #94a3b8);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .pillars-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .pillar-card {
          background: rgba(15, 15, 24, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.15);
          padding: 2rem;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 1.5rem;
        }

        .pillar-num {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1.5rem;
          color: var(--color-gold, #d4af37);
        }

        .pillar-subtitle {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.5625rem;
          letter-spacing: 0.12em;
          color: var(--color-text-muted, #94a3b8);
        }

        .pillar-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1.25rem;
          color: var(--color-ivory, #f1ebdd);
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .pillar-desc {
          font-family: var(--font-body, "Inter", sans-serif);
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--color-text-muted, #94a3b8);
          flex-grow: 1;
        }

        .card-footer-line {
          height: 1px;
          background: rgba(212, 175, 55, 0.2);
          margin-top: 1.5rem;
        }
      `}</style>
    </section>
  );
}
