// ArchiveSection.jsx
import React, { useState } from "react";

export default function ArchiveSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const archiveEntries = [
    {
      id: "01",
      period: "2002–03",
      title: "FOUNDATIONAL MILESTONES",
      desc: "Techfest Trophy launched alongside India's first Micromouse robotics competition, welcoming international participants from Nepal, Sri Lanka, and Singapore.",
    },
    {
      id: "02",
      period: "2015–17",
      title: "PIONEERING CONVERGENCE",
      desc: "Featured keynotes by Dr. A.P.J. Abdul Kalam, Dr. Pranab Mukherjee, and humanoid robot Sophia; launched the SHE initiative.",
    },
    {
      id: "03",
      period: "2018–19",
      title: "HISTORICAL HIGHLIGHT",
      desc: "Featured the 14th Dalai Lama in its Lecture Series and achieved a Guinness World Record for the most LED lights lit simultaneously.",
    },
    {
      id: "04",
      period: "2020–22",
      title: "DOCUMENTED MILESTONE",
      desc: "Featured India's first consumer 5G test by Jio, the International Drone Racing League, and its first-ever drone show.",
    },
    {
      id: "05",
      period: "2023–24",
      title: "TECHFEST HISTORY",
      desc: "Featured Japan's Robo DJ, India's first-ever 360° EDM night, and International Zonals in Mexico.",
    },
    {
      id: "06",
      period: "2025",
      title: "GLOBAL FRONTIER",
      desc: "Featured the Global Humanoid Conclave with Unitree G1, drone-based production, and Asia's largest college-festival drone show with 1,500+ drones.",
    },
  ];

  return (
    <section
      id="archive"
      aria-label="Archive Section - Epochs of Inquiry"
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
            <span>07 / ARCHIVE</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ opacity: 0.8 }}>HISTORICAL MILESTONES</span>
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
            EPOCHS OF INQUIRY
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
            Tracing key historical milestones, technological breakthroughs, and
            notable moments across past editions of Techfest IIT Bombay.
          </p>
        </div>

        {/* Responsive Horizontal SVG Timeline */}
        <div className="archive-timeline-wrapper">
          <div className="archive-timeline-track">
            <svg
              viewBox="0 0 1000 120"
              className="archive-svg"
              aria-hidden="true"
            >
              {/* Background Axis */}
              <line
                x1="80"
                y1="60"
                x2="920"
                y2="60"
                stroke="rgba(212, 175, 55, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />

              {/* Active Connector Progress */}
              <line
                x1="80"
                y1="60"
                x2={80 + activeIndex * 168}
                y2="60"
                stroke="#d4af37"
                strokeWidth="1.5"
                className="timeline-progress-line"
              />

              {/* Node Indicators */}
              {archiveEntries.map((entry, idx) => {
                const cx = 80 + idx * 168;
                const isActive = activeIndex === idx;

                return (
                  <g key={entry.id} className="timeline-node-group">
                    {/* Pulsing Ring for Active State */}
                    {isActive && (
                      <circle
                        cx={cx}
                        cy="60"
                        r="14"
                        fill="none"
                        stroke="#d4af37"
                        strokeWidth="0.75"
                        opacity="0.5"
                      />
                    )}

                    {/* Node Outer Ring */}
                    <circle
                      cx={cx}
                      cy="60"
                      r="8"
                      fill="#07070b"
                      stroke={isActive ? "#d4af37" : "rgba(212, 175, 55, 0.4)"}
                      strokeWidth={isActive ? "1.5" : "1"}
                      className="node-ring"
                    />

                    {/* Inner Core */}
                    <circle
                      cx={cx}
                      cy="60"
                      r="3"
                      fill={isActive ? "#f1ebdd" : "rgba(212, 175, 55, 0.5)"}
                    />

                    {/* Node Label Text */}
                    <text
                      x={cx}
                      y="28"
                      textAnchor="middle"
                      fill={isActive ? "#d4af37" : "rgba(212, 175, 55, 0.6)"}
                      fontSize="11"
                      fontFamily="Space Mono, monospace"
                      letterSpacing="0.1em"
                    >
                      {entry.id}
                    </text>

                    <text
                      x={cx}
                      y="95"
                      textAnchor="middle"
                      fill={isActive ? "#f1ebdd" : "#94a3b8"}
                      fontSize="10"
                      fontFamily="Space Mono, monospace"
                      letterSpacing="0.05em"
                    >
                      {entry.period}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Accessible Overlay Buttons for Keyboard Focus & Interaction */}
          <div
            className="timeline-accessible-nodes"
            role="tablist"
            aria-label="Archive Epoch Selection"
          >
            {archiveEntries.map((entry, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={entry.id}
                  type="button"
                  role="tab"
                  id={`archive-tab-${idx}`}
                  aria-selected={isActive}
                  aria-controls={`archive-panel-${idx}`}
                  tabIndex={0}
                  className={`accessible-node-btn ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  aria-label={`Epoch ${entry.id}: ${entry.period} - ${entry.title}`}
                />
              );
            })}
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="archive-cards-grid">
          {archiveEntries.map((entry, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={entry.id}
                id={`archive-panel-${idx}`}
                role="tabpanel"
                aria-labelledby={`archive-tab-${idx}`}
                className={`archive-card ${isActive ? "is-active" : ""}`}
                onMouseEnter={() => setActiveIndex(idx)}
                onFocus={() => setActiveIndex(idx)}
                tabIndex={0}
              >
                <div className="card-top">
                  <span className="card-id">{entry.id}</span>
                  <span className="card-period">{entry.period}</span>
                </div>

                <h3 className="card-title">{entry.title}</h3>
                <p className="card-desc">{entry.desc}</p>

                <div className="card-indicator">
                  <span className="indicator-line" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* Timeline Wrapper and SVG Responsiveness */
        .archive-timeline-wrapper {
          position: relative;
          width: 100%;
          margin-bottom: 3.5rem;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 0.5rem;
        }

        .archive-timeline-track {
          min-width: 640px;
          position: relative;
        }

        .archive-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .timeline-progress-line {
          transition: x2 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .node-ring {
          transition: stroke 0.25s ease, stroke-width 0.25s ease;
        }

        /* Accessible Keyboard Overlay Layer */
        .timeline-accessible-nodes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          min-width: 640px;
          height: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 5%;
          pointer-events: none;
          box-sizing: border-box;
        }

        .accessible-node-btn {
          pointer-events: auto;
          width: 44px;
          height: 44px;
          margin-top: 38px;
          background: transparent;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          outline: none;
        }

        .accessible-node-btn:focus-visible {
          outline: 2px solid var(--color-gold, #d4af37);
          outline-offset: 4px;
          background: rgba(212, 175, 55, 0.15);
        }

        /* Cards Layout */
        .archive-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .archive-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .archive-cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .archive-card {
          position: relative;
          background: rgba(12, 13, 20, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.12);
          padding: 1.5rem;
          transition: border-color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;
          cursor: pointer;
          outline: none;
          display: flex;
          flex-direction: column;
        }

        .archive-card:hover,
        .archive-card:focus-visible,
        .archive-card.is-active {
          border-color: rgba(212, 175, 55, 0.4);
          background: rgba(212, 175, 55, 0.03);
          transform: translateY(-2px);
        }

        .archive-card:focus-visible {
          outline: 1px solid var(--color-gold, #d4af37);
          outline-offset: 2px;
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .card-id {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-gold, #d4af37);
        }

        .card-period {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.5625rem;
          letter-spacing: 0.1em;
          color: rgba(212, 175, 55, 0.6);
          text-transform: uppercase;
        }

        .card-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--color-ivory, #f1ebdd);
          margin: 0 0 0.5rem 0;
        }

        .card-desc {
          font-family: var(--font-sans, system-ui, sans-serif);
          font-size: 0.8125rem;
          line-height: 1.55;
          color: var(--color-text-muted, #94a3b8);
          margin: 0 0 1.25rem 0;
          flex-grow: 1;
        }

        .card-indicator {
          width: 100%;
          height: 1px;
          background: rgba(212, 175, 55, 0.1);
          position: relative;
        }

        .indicator-line {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0%;
          background: var(--color-gold, #d4af37);
          transition: width 0.25s ease;
        }

        .archive-card.is-active .indicator-line {
          width: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          .archive-card,
          .timeline-progress-line,
          .node-ring,
          .indicator-line {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
