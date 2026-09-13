// FrontierRadar.jsx
import React, { useState } from "react";

export default function FrontierRadar() {
  const [activeLecture, setActiveLecture] = useState(0);

  const lectures = [
    {
      id: "LEC-01",
      speaker: "14TH DALAI LAMA",
      field: "HISTORICAL FEATURE // 2018–19",
      title: "SCIENCE, ETHICS & HUMANITY",
      abstract:
        "Historical reference to Techfest's Lecture Series featuring the 14th Dalai Lama, presented here as a conceptual reflection on the relationship between science, ethics and humanity.",
    },
    {
      id: "LEC-02",
      speaker: "DR. A.P.J. ABDUL KALAM",
      field: "HISTORICAL FEATURE // 2015–17",
      title: "SCIENCE, VISION & NATION BUILDING",
      abstract:
        "Historical reference to Techfest's programming featuring Dr. A.P.J. Abdul Kalam, presented here as a conceptual reflection on technology, innovation and societal progress.",
    },
    {
      id: "LEC-03",
      speaker: "GLOBAL HUMANOID CONCLAVE",
      field: "HISTORICAL FEATURE // 2025",
      title: "HUMANOID ROBOTICS & AI",
      abstract:
        "Historical reference to Techfest's 2025 Global Humanoid Conclave, which featured Unitree G1 and explored emerging humanoid robotics.",
    },
  ];

  return (
    <section
      id="radar"
      aria-label="Frontier Radar - Historical Lecture References"
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
            <span>05 / FRONTIER RADAR</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ opacity: 0.8 }}>HISTORICAL REFERENCES</span>
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
            LECTURES & KEYNOTES
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
            Engage with pioneering thinkers and researchers charting the
            boundaries of applied science and future technology.
          </p>
        </div>

        {/* Interactive Radar & Speaker Showcase */}
        <div className="radar-layout">
          {/* Left Radar Visual */}
          <div className="radar-visual-container">
            <svg viewBox="0 0 400 400" className="radar-svg" aria-hidden="true">
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="rgba(212, 175, 55, 0.15)"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="200"
                r="130"
                fill="none"
                stroke="rgba(212, 175, 55, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle
                cx="200"
                cy="200"
                r="80"
                fill="none"
                stroke="rgba(212, 175, 55, 0.25)"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="200"
                r="30"
                fill="none"
                stroke="#d4af37"
                strokeWidth="1"
              />

              <line
                x1="200"
                y1="20"
                x2="200"
                y2="380"
                stroke="rgba(212, 175, 55, 0.15)"
                strokeWidth="1"
              />
              <line
                x1="20"
                y1="200"
                x2="380"
                y2="200"
                stroke="rgba(212, 175, 55, 0.15)"
                strokeWidth="1"
              />

              {/* Radar Targets */}
              {lectures.map((lec, idx) => {
                const angles = [45, 160, 290];
                const radii = [130, 80, 140];
                const rad = (angles[idx] * Math.PI) / 180;
                const cx = 200 + radii[idx] * Math.cos(rad);
                const cy = 200 + radii[idx] * Math.sin(rad);
                const isActive = activeLecture === idx;

                return (
                  <g
                    key={lec.id}
                    className="radar-target"
                    onClick={() => setActiveLecture(idx)}
                  >
                    {isActive && (
                      <circle
                        cx={cx}
                        cy={cy}
                        r="18"
                        fill="none"
                        stroke="#d4af37"
                        strokeWidth="1"
                        className="radar-pulse"
                      />
                    )}
                    <circle
                      cx={cx}
                      cy={cy}
                      r="6"
                      fill={isActive ? "#f1ebdd" : "#d4af37"}
                      stroke="#07070b"
                      strokeWidth="2"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right Lecture Details List */}
          <div
            className="radar-lectures-list"
            aria-label="Historical Lecture References"
          >
            {lectures.map((lec, idx) => {
              const isActive = activeLecture === idx;
              return (
                <button
                  key={lec.id}
                  type="button"
                  className={`lecture-card-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveLecture(idx)}
                  onMouseEnter={() => setActiveLecture(idx)}
                >
                  <div className="lecture-header">
                    <span className="lecture-id">{lec.id}</span>
                    <span className="lecture-field">{lec.field}</span>
                  </div>
                  <h3 className="lecture-title">{lec.title}</h3>
                  <div className="lecture-speaker">{lec.speaker}</div>
                  <p className="lecture-abstract">{lec.abstract}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .radar-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (min-width: 900px) {
          .radar-layout {
            grid-template-columns: 1fr 1.25fr;
          }
        }

        .radar-visual-container {
          width: 100%;
          max-width: 360px;
          margin: 0 auto;
          aspect-ratio: 1 / 1;
        }

        .radar-svg {
          width: 100%;
          height: 100%;
        }

        .radar-target {
          cursor: pointer;
        }

        .radar-pulse {
          animation: radarPulseAnim 2s infinite ease-out;
        }

        @keyframes radarPulseAnim {
          0% { r: 6px; opacity: 1; }
          100% { r: 24px; opacity: 0; }
        }

        .radar-lectures-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .lecture-card-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          width: 100%;
          background: rgba(12, 13, 20, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.12);
          border-bottom: 1px solid rgba(212, 175, 55, 0.15);
          padding: 1.5rem;
          cursor: pointer;
          transition: border-color 0.25s ease, background-color 0.25s ease;
          outline: none;
          color: inherit;
          font: inherit;
        }

        .lecture-card-btn:hover,
        .lecture-card-btn.is-active {
          border-color: rgba(212, 175, 55, 0.4);
          background: rgba(212, 175, 55, 0.04);
        }

        .lecture-card-btn:focus-visible {
          outline: 1px solid var(--color-gold, #d4af37);
          outline-offset: 2px;
        }

        .lecture-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .lecture-id {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-gold, #d4af37);
        }

        .lecture-field {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.1em;
          color: rgba(212, 175, 55, 0.6);
          text-transform: uppercase;
        }

        .lecture-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1.125rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--color-ivory, #f1ebdd);
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .lecture-speaker {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.8125rem;
          color: var(--color-gold, #d4af37);
          margin-bottom: 0.5rem;
        }

        .lecture-abstract {
          font-family: var(--font-sans, system-ui, sans-serif);
          font-size: 0.875rem;
          line-height: 1.55;
          color: var(--color-text-muted, #94a3b8);
          margin: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .radar-pulse {
            animation: none;
          }
          .lecture-card-btn {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
