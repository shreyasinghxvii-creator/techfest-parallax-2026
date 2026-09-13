// TimeCapsule.jsx
import React, { useState } from "react";

export default function TimeCapsule() {
  const [selectedArtifact, setSelectedArtifact] = useState(0);

  const capsuleEntries = [
    {
      id: "TC-01",
      era: "FOUNDATIONAL ERA (2002–03)",
      title: "THE FIRST ROBOTICS TROPHY",
      summary:
        "The inception of the Techfest Trophy and India's first international Micromouse robotics competition.",
      detail:
        "Archiving the early competitive spark: Techfest introduced its flagship robotics competition featuring participating student teams from Nepal, Sri Lanka, and Singapore.",
    },
    {
      id: "TC-02",
      era: "CONVERGENCE EPOCH (2015–17)",
      title: "DISTINGUISHED LECTURES & SHE",
      summary:
        "Keynote addresses by visionary leaders, humanoid interactions, and social initiatives.",
      detail:
        "Documenting landmark addresses by Dr. A.P.J. Abdul Kalam and Dr. Pranab Mukherjee, the public appearance of humanoid robot Sophia, and the launch of the SHE initiative.",
    },
    {
      id: "TC-03",
      era: "HISTORICAL MILESTONE (2018–19)",
      title: "RECORD & LECTURE SERIES",
      summary:
        "Lecture Series keynotes and official Guinness World Record achievement.",
      detail:
        "Highlighting the lecture by the 14th Dalai Lama in the Techfest Lecture Series and achieving a Guinness World Record for the most LED lights lit simultaneously.",
    },
    {
      id: "TC-04",
      era: "DOCUMENTED MILESTONE (2020–22)",
      title: "NETWORK & SPEED HORIZONS",
      summary:
        "Pioneer 5G tests, international drone racing, and aerial shows.",
      detail:
        "Featuring India's first consumer 5G test by Jio, hosting the International Drone Racing League, and debuting Techfest's first-ever drone show.",
    },
    {
      id: "TC-05",
      era: "TECHFEST HISTORY (2023–24)",
      title: "GLOBAL & AUDIOVISUAL FRONTIERS",
      summary:
        "Robotic DJ performances, 360° production, and international outreach.",
      detail:
        "Featuring Japan's Robo DJ, India's first-ever 360° EDM night, and expanding reach via International Zonals in Mexico.",
    },
    {
      id: "TC-06",
      era: "PRESENT MILESTONE (2025)",
      title: "THE HUMANOID & SKY CONCLAVE",
      summary:
        "Global Humanoid Conclave, aerial productions, and record drone shows.",
      detail:
        "Featuring the Global Humanoid Conclave with Unitree G1, drone-based production, and Asia's largest college-festival drone show with 1,500+ drones.",
    },
  ];

  return (
    <section
      id="time-capsule"
      aria-label="Time Capsule - Historical Artifacts and Future Projections"
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
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem", maxWidth: "640px" }}>
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
            <span>08 / TIME CAPSULE</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ opacity: 0.8 }}>ARCHIVAL RECORD</span>
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
            PRESERVED ARTIFACTS
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
            Key historic milestones and documented highlights preserved from
            past editions of Techfest IIT Bombay.
          </p>
        </div>

        {/* Time Capsule Interactive Grid & Inspector */}
        <div className="capsule-layout">
          {/* Left Artifact Selection List */}
          <div
            className="capsule-list"
            role="tablist"
            aria-label="Time Capsule Artifacts"
          >
            {capsuleEntries.map((entry, idx) => {
              const isSelected = selectedArtifact === idx;
              return (
                <button
                  key={entry.id}
                  type="button"
                  role="tab"
                  id={`capsule-tab-${idx}`}
                  aria-selected={isSelected}
                  aria-controls={`capsule-panel-${idx}`}
                  className={`capsule-item-btn ${isSelected ? "is-selected" : ""}`}
                  onClick={() => setSelectedArtifact(idx)}
                  onMouseEnter={() => setSelectedArtifact(idx)}
                >
                  <div className="item-header">
                    <span className="item-id">{entry.id}</span>
                    <span className="item-era">{entry.era}</span>
                  </div>
                  <h3 className="item-title">{entry.title}</h3>
                  <p className="item-summary">{entry.summary}</p>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Inspector Card */}
          <div className="capsule-inspector-wrapper">
            {capsuleEntries.map((entry, idx) => {
              const isSelected = selectedArtifact === idx;
              if (!isSelected) return null;

              return (
                <div
                  key={entry.id}
                  id={`capsule-panel-${idx}`}
                  role="tabpanel"
                  aria-labelledby={`capsule-tab-${idx}`}
                  className="capsule-inspector-card"
                >
                  <div className="inspector-badge">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 16 14" />
                    </svg>
                    <span>ARCHIVAL RECORD</span>
                  </div>

                  <div className="inspector-meta">
                    <span className="meta-id">{entry.id}</span>
                    <span className="meta-divider">•</span>
                    <span className="meta-era">{entry.era}</span>
                  </div>

                  <h3 className="inspector-title">{entry.title}</h3>

                  <div className="inspector-divider" />

                  <p className="inspector-detail">{entry.detail}</p>

                  <div className="inspector-seal" aria-hidden="true">
                    <svg width="48" height="48" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="44"
                        fill="none"
                        stroke="rgba(212, 175, 55, 0.25)"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="28"
                        fill="none"
                        stroke="#d4af37"
                        strokeWidth="1"
                      />
                      <polygon
                        points="50,30 55,45 70,50 55,55 50,70 45,55 30,50 45,45"
                        fill="#d4af37"
                        opacity="0.6"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .capsule-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 900px) {
          .capsule-layout {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }
        }

        /* List / Buttons Column */
        .capsule-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .capsule-item-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          width: 100%;
          background: rgba(12, 13, 20, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.12);
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: border-color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;
          outline: none;
          color: inherit;
          font: inherit;
        }

        .capsule-item-btn:hover,
        .capsule-item-btn.is-selected {
          border-color: rgba(212, 175, 55, 0.4);
          background: rgba(212, 175, 55, 0.04);
          transform: translateX(4px);
        }

        .capsule-item-btn:focus-visible {
          outline: 1px solid var(--color-gold, #d4af37);
          outline-offset: 2px;
          border-color: var(--color-gold, #d4af37);
        }

        .item-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .item-id {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-gold, #d4af37);
        }

        .item-era {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.5625rem;
          letter-spacing: 0.1em;
          color: rgba(212, 175, 55, 0.6);
          text-transform: uppercase;
        }

        .item-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1.0625rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: var(--color-ivory, #f1ebdd);
          margin: 0 0 0.375rem 0;
        }

        .item-summary {
          font-family: var(--font-sans, system-ui, sans-serif);
          font-size: 0.8125rem;
          line-height: 1.5;
          color: var(--color-text-muted, #94a3b8);
          margin: 0;
        }

        /* Inspector Column */
        .capsule-inspector-wrapper {
          position: sticky;
          top: 6rem;
        }

        .capsule-inspector-card {
          position: relative;
          background: rgba(12, 13, 20, 0.7);
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 2.25rem 2rem;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .inspector-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.15em;
          color: var(--color-gold, #d4af37);
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 0.25rem 0.625rem;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
        }

        .inspector-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.75rem;
          color: rgba(212, 175, 55, 0.7);
          margin-bottom: 0.5rem;
        }

        .meta-id {
          font-weight: 700;
          color: var(--color-gold, #d4af37);
        }

        .meta-era {
          letter-spacing: 0.08em;
        }

        .inspector-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: var(--color-ivory, #f1ebdd);
          margin: 0 0 1rem 0;
          line-height: 1.25;
        }

        .inspector-divider {
          width: 40px;
          height: 1px;
          background: var(--color-gold, #d4af37);
          margin-bottom: 1.25rem;
          opacity: 0.6;
        }

        .inspector-detail {
          font-family: var(--font-sans, system-ui, sans-serif);
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--color-text-muted, #94a3b8);
          margin: 0;
        }

        .inspector-seal {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          opacity: 0.6;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .capsule-item-btn {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
