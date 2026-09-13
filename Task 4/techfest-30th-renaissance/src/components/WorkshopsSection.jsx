// WorkshopsSection.jsx
import React, { useState } from "react";
import {
  Wrench,
  Terminal,
  Palette,
  FlaskConical,
  CornerDownRight,
} from "lucide-react";

export default function WorkshopsSection() {
  const [activeWorkshop, setActiveWorkshop] = useState(null);

  const workshops = [
    {
      id: "01",
      key: "build",
      title: "BUILD & PROTOTYPE",
      subtitle: "HARDWARE & SYSTEMS",
      desc: "Turn an idea into a tangible prototype through hands-on experimentation.",
      icon: Wrench,
      coord: "CONCEPT // 01",
    },
    {
      id: "02",
      key: "code",
      title: "CODE & COMPUTE",
      subtitle: "ALGORITHMS & DATA",
      desc: "Explore programming, computation and practical digital problem-solving.",
      icon: Terminal,
      coord: "CONCEPT // 02",
    },
    {
      id: "03",
      key: "design",
      title: "DESIGN & CREATE",
      subtitle: "INTERFACES & FORMS",
      desc: "Use creative methods to shape useful products, interfaces and experiences.",
      icon: Palette,
      coord: "CONCEPT // 03",
    },
    {
      id: "04",
      key: "experiment",
      title: "EXPERIMENT & DISCOVER",
      subtitle: "LABORATORY METHODS",
      desc: "Learn by testing, observing and refining an idea through experimentation.",
      icon: FlaskConical,
      coord: "CONCEPT // 04",
    },
  ];

  return (
    <section
      id="workshops"
      aria-label="Workshops - The Workshop Table"
      className="section"
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
        className="container"
        style={{ width: "100%", position: "relative", zIndex: 1 }}
      >
        {/* Header */}
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
            <span>06 / WORKSHOPS</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ color: "#00e5ff", opacity: 0.8 }}>
              CONCEPTUAL PRACTICE
            </span>
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
            THE WORKSHOP TABLE
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
            Move from ideas to practice through focused sessions built around
            making, experimenting and learning.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="workbench-layout">
          {/* Workbench Central Technical Visual */}
          <div className="workbench-visual-container">
            <div className="workbench-canvas">
              <svg
                viewBox="0 0 600 450"
                width="100%"
                height="100%"
                className="workbench-svg"
                aria-hidden="true"
              >
                {/* Outer Table Measurement Frame */}
                <rect
                  x="40"
                  y="40"
                  width="520"
                  height="370"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="1"
                  strokeDasharray="6 6"
                  opacity="0.25"
                />
                <rect
                  x="50"
                  y="50"
                  width="500"
                  height="350"
                  fill="rgba(12, 13, 20, 0.4)"
                  stroke="#d4af37"
                  strokeWidth="0.5"
                  opacity="0.2"
                />

                {/* Corner Calibration Marks */}
                <path
                  d="M 30,55 L 30,30 L 55,30"
                  stroke="#d4af37"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M 570,55 L 570,30 L 545,30"
                  stroke="#d4af37"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M 30,395 L 30,420 L 55,420"
                  stroke="#d4af37"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M 570,395 L 570,420 L 545,420"
                  stroke="#d4af37"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                />

                {/* Table Measurement Rulers */}
                {Array.from({ length: 26 }).map((_, i) => (
                  <line
                    key={`r-top-${i}`}
                    x1={50 + i * 20}
                    y1="40"
                    x2={50 + i * 20}
                    y2={i % 5 === 0 ? "32" : "36"}
                    stroke="#d4af37"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                ))}

                {/* 4 Quadrants representing the 4 workshop zones */}
                {/* Zone A: Top-Left (Build) */}
                <rect
                  x="70"
                  y="70"
                  width="220"
                  height="150"
                  fill={
                    activeWorkshop === "build"
                      ? "rgba(212, 175, 55, 0.08)"
                      : "none"
                  }
                  stroke={activeWorkshop === "build" ? "#d4af37" : "#d4af37"}
                  strokeWidth={activeWorkshop === "build" ? "1.25" : "0.5"}
                  strokeDasharray={activeWorkshop === "build" ? "none" : "3 3"}
                  opacity={activeWorkshop === "build" ? 1 : 0.25}
                  className="workbench-zone"
                />
                <text
                  x="80"
                  y="90"
                  fill="#d4af37"
                  fontSize="8"
                  fontFamily="Space Mono"
                  opacity={activeWorkshop === "build" ? 1 : 0.5}
                >
                  [01] BUILD / PROTOTYPE
                </text>

                {/* Zone B: Top-Right (Code) */}
                <rect
                  x="310"
                  y="70"
                  width="220"
                  height="150"
                  fill={
                    activeWorkshop === "code"
                      ? "rgba(0, 229, 255, 0.06)"
                      : "none"
                  }
                  stroke={activeWorkshop === "code" ? "#00e5ff" : "#d4af37"}
                  strokeWidth={activeWorkshop === "code" ? "1.25" : "0.5"}
                  strokeDasharray={activeWorkshop === "code" ? "none" : "3 3"}
                  opacity={activeWorkshop === "code" ? 1 : 0.25}
                  className="workbench-zone"
                />
                <text
                  x="320"
                  y="90"
                  fill={activeWorkshop === "code" ? "#00e5ff" : "#d4af37"}
                  fontSize="8"
                  fontFamily="Space Mono"
                  opacity={activeWorkshop === "code" ? 1 : 0.5}
                >
                  [02] CODE / COMPUTE
                </text>

                {/* Zone C: Bottom-Left (Design) */}
                <rect
                  x="70"
                  y="230"
                  width="220"
                  height="150"
                  fill={
                    activeWorkshop === "design"
                      ? "rgba(212, 175, 55, 0.08)"
                      : "none"
                  }
                  stroke={activeWorkshop === "design" ? "#d4af37" : "#d4af37"}
                  strokeWidth={activeWorkshop === "design" ? "1.25" : "0.5"}
                  strokeDasharray={activeWorkshop === "design" ? "none" : "3 3"}
                  opacity={activeWorkshop === "design" ? 1 : 0.25}
                  className="workbench-zone"
                />
                <text
                  x="80"
                  y="250"
                  fill="#d4af37"
                  fontSize="8"
                  fontFamily="Space Mono"
                  opacity={activeWorkshop === "design" ? 1 : 0.5}
                >
                  [03] DESIGN / INTERFACE
                </text>

                {/* Zone D: Bottom-Right (Experiment) */}
                <rect
                  x="310"
                  y="230"
                  width="220"
                  height="150"
                  fill={
                    activeWorkshop === "experiment"
                      ? "rgba(212, 175, 55, 0.08)"
                      : "none"
                  }
                  stroke={
                    activeWorkshop === "experiment" ? "#d4af37" : "#d4af37"
                  }
                  strokeWidth={activeWorkshop === "experiment" ? "1.25" : "0.5"}
                  strokeDasharray={
                    activeWorkshop === "experiment" ? "none" : "3 3"
                  }
                  opacity={activeWorkshop === "experiment" ? 1 : 0.25}
                  className="workbench-zone"
                />
                <text
                  x="320"
                  y="250"
                  fill="#d4af37"
                  fontSize="8"
                  fontFamily="Space Mono"
                  opacity={activeWorkshop === "experiment" ? 1 : 0.5}
                >
                  [04] EXPERIMENT / DISCOVERY
                </text>

                {/* Central Workbench Pivot / Protractor Assembly */}
                <circle
                  cx="300"
                  cy="225"
                  r="45"
                  fill="#07070b"
                  stroke="#d4af37"
                  strokeWidth="1"
                  opacity="0.8"
                />
                <circle
                  cx="300"
                  cy="225"
                  r="30"
                  fill="none"
                  stroke="#9f8440"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                  opacity="0.5"
                />
                <circle
                  cx="300"
                  cy="225"
                  r="10"
                  fill="none"
                  stroke="#00e5ff"
                  strokeWidth="0.75"
                  opacity="0.6"
                />
                <circle cx="300" cy="225" r="3" fill="#d4af37" />

                {/* Crosshair Lines */}
                <line
                  x1="300"
                  y1="50"
                  x2="300"
                  y2="400"
                  stroke="#d4af37"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
                <line
                  x1="50"
                  y1="225"
                  x2="550"
                  y2="225"
                  stroke="#d4af37"
                  strokeWidth="0.5"
                  opacity="0.2"
                />

                {/* Schematic Details inside zones */}
                {/* Zone A Schematic (Gear/Ruler) */}
                <circle
                  cx="180"
                  cy="145"
                  r="22"
                  stroke="#d4af37"
                  strokeWidth="0.75"
                  strokeDasharray="4 2"
                  fill="none"
                  opacity="0.4"
                />
                {/* Zone B Schematic (Matrix Grid) */}
                <rect
                  x="400"
                  y="125"
                  width="40"
                  height="40"
                  stroke="#00e5ff"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.4"
                />
                {/* Zone C Schematic (Bezier Curve) */}
                <path
                  d="M 120,320 Q 180,270 240,320"
                  stroke="#d4af37"
                  strokeWidth="0.75"
                  fill="none"
                  opacity="0.4"
                />
                {/* Zone D Schematic (Flask / Graph) */}
                <polygon
                  points="420,340 400,300 440,300"
                  stroke="#d4af37"
                  strokeWidth="0.75"
                  fill="none"
                  opacity="0.4"
                />
              </svg>

              {/* Technical Labels Overlay */}
              <div className="workbench-tag top-left-tag">
                GRID // WORKSHOP CONCEPT
              </div>
              <div className="workbench-tag top-right-tag">
                WORKSHOP OVERVIEW
              </div>
              <div className="workbench-tag bot-left-tag">CONCEPT TABLE</div>
              <div className="workbench-tag bot-right-tag">30TH EDITION</div>
            </div>
          </div>

          {/* Workshop Categories Grid */}
          <div className="workbench-cards-grid">
            {workshops.map((item) => {
              const IconComp = item.icon;
              const isActive = activeWorkshop === item.key;
              return (
                <div
                  key={item.id}
                  className={`workbench-card ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveWorkshop(item.key)}
                  onMouseLeave={() => setActiveWorkshop(null)}
                >
                  <div className="card-top-row">
                    <span className="card-id">{item.id}</span>
                    <span className="card-coord">{item.coord}</span>
                    <div className="card-icon-wrap">
                      <IconComp size={16} />
                    </div>
                  </div>

                  <h3 className="card-title">{item.title}</h3>
                  <div className="card-subtitle">{item.subtitle}</div>
                  <p className="card-desc">{item.desc}</p>

                  <div className="card-bottom-indicator">
                    <span>EXPLORE CONCEPT</span>
                    <CornerDownRight size={12} className="card-corner-icon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .workbench-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .workbench-layout {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        .workbench-visual-container {
          position: relative;
          width: 100%;
          background: rgba(12, 13, 20, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.18);
          padding: 1rem;
        }

        .workbench-canvas {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: rgba(7, 7, 11, 0.9);
          border: 1px solid rgba(212, 175, 55, 0.1);
          overflow: hidden;
        }

        .workbench-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .workbench-zone {
          transition: fill 0.25s ease, stroke 0.25s ease, opacity 0.25s ease;
        }

        .workbench-tag {
          position: absolute;
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.1em;
          color: rgba(212, 175, 55, 0.4);
          pointer-events: none;
        }

        .top-left-tag { top: 12px; left: 14px; }
        .top-right-tag { top: 12px; right: 14px; }
        .bot-left-tag { bottom: 12px; left: 14px; }
        .bot-right-tag { bottom: 12px; right: 14px; }

        /* Workshop Cards Grid */
        .workbench-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 576px) {
          .workbench-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }

        .workbench-card {
          position: relative;
          background: rgba(12, 13, 20, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.15);
          padding: 1.35rem 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;
          cursor: pointer;
          min-height: 200px;
        }

        .workbench-card:hover,
        .workbench-card.is-active {
          border-color: rgba(212, 175, 55, 0.5);
          background: rgba(212, 175, 55, 0.03);
          transform: translateY(-2px);
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed rgba(212, 175, 55, 0.15);
        }

        .card-id {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-gold, #d4af37);
        }

        .card-coord {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.08em;
          color: rgba(212, 175, 55, 0.5);
        }

        .card-icon-wrap {
          color: var(--color-text-muted, #94a3b8);
          transition: color 0.25s ease;
        }

        .workbench-card:hover .card-icon-wrap {
          color: var(--color-gold, #d4af37);
        }

        .card-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--color-ivory, #f1ebdd);
          margin: 0 0 0.2rem 0;
        }

        .card-subtitle {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.1em;
          color: #00e5ff;
          opacity: 0.7;
          margin-bottom: 0.6rem;
        }

        .card-desc {
          font-family: var(--font-sans, system-ui, sans-serif);
          font-size: 0.8125rem;
          line-height: 1.5;
          color: var(--color-text-muted, #94a3b8);
          margin: 0 0 1rem 0;
          flex-grow: 1;
        }

        .card-bottom-indicator {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.1em;
          color: rgba(212, 175, 55, 0.7);
          padding-top: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .card-corner-icon {
          transition: transform 0.25s ease;
        }

        .workbench-card:hover .card-corner-icon {
          transform: translate(2px, 2px);
          color: var(--color-gold, #d4af37);
        }
      `}</style>
    </section>
  );
}
