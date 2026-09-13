// EventDiscovery.jsx
import React, { useState } from "react";
import { Compass, Sparkles, Trophy, Users, ArrowUpRight } from "lucide-react";

export default function EventDiscovery() {
  const [activeStage, setActiveStage] = useState(null);

  const stages = [
    {
      id: "01",
      phase: "CONCEPT // 01",
      key: "open",
      title: "OPEN",
      subtitle: "ORIENTATION & DIRECTION",
      desc: "Begin with the ideas, people and questions that set the direction.",
      icon: Compass,
      coord: "CONCEPT // 01",
      progress: "25%",
    },
    {
      id: "02",
      phase: "CONCEPT // 02",
      key: "explore",
      title: "EXPLORE",
      subtitle: "DEMONSTRATIONS & PERSPECTIVES",
      desc: "Discover demonstrations, experiences and perspectives across technology.",
      icon: Sparkles,
      coord: "CONCEPT // 02",
      progress: "50%",
    },
    {
      id: "03",
      phase: "CONCEPT // 03",
      key: "compete",
      title: "COMPETE",
      subtitle: "CHALLENGE & EXECUTION",
      desc: "Put your skills and ideas to the test through challenging experiences.",
      icon: Trophy,
      coord: "CONCEPT // 03",
      progress: "75%",
    },
    {
      id: "04",
      phase: "CONCEPT // 04",
      key: "connect",
      title: "CONNECT",
      subtitle: "COMMUNITY & EXCHANGE",
      desc: "Meet people, exchange ideas and carry the experience beyond the event.",
      icon: Users,
      coord: "CONCEPT // 04",
      progress: "100%",
    },
  ];

  return (
    <section
      id="events"
      aria-label="Events - Event Discovery"
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
            <span>06 / EVENTS</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ color: "#00e5ff", opacity: 0.8 }}>
              CONCEPTUAL JOURNEY
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
            EVENT DISCOVERY
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
            An exploratory framework mapping out the stages of experience,
            ideas, and competitive moments across Techfest.
          </p>
        </div>

        {/* 2D Horizontal Timeline Diagram */}
        <div className="timeline-visual-panel">
          <div className="timeline-meta-top">
            <span>INDEX // EXPERIENCE CONCEPT</span>
            <span style={{ color: "#00e5ff", opacity: 0.7 }}>
              {activeStage
                ? `SELECTED: ${activeStage.toUpperCase()}`
                : "STATUS: SEQUENCE READY"}
            </span>
          </div>

          <div className="timeline-svg-wrapper">
            <svg
              viewBox="0 0 1000 120"
              width="100%"
              height="100%"
              className="timeline-svg"
              aria-hidden="true"
            >
              {/* Main Timeline Base Track Line */}
              <line
                x1="80"
                y1="60"
                x2="920"
                y2="60"
                stroke="#d4af37"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.3"
              />
              <line
                x1="80"
                y1="60"
                x2="920"
                y2="60"
                stroke="#d4af37"
                strokeWidth="0.5"
                opacity="0.15"
              />

              {/* Active Progress Marker Line */}
              {activeStage && (
                <line
                  x1="80"
                  y1="60"
                  x2={
                    activeStage === "open"
                      ? "120"
                      : activeStage === "explore"
                        ? "373"
                        : activeStage === "compete"
                          ? "626"
                          : "880"
                  }
                  y2="60"
                  stroke="#00e5ff"
                  strokeWidth="1.5"
                  className="timeline-active-line"
                />
              )}

              {/* Ticks and Nodes along timeline */}
              {stages.map((stg, idx) => {
                const cx = 120 + idx * 253.33;
                const isActive = activeStage === stg.key;

                return (
                  <g
                    key={`node-${stg.key}`}
                    className="timeline-node-group"
                    onMouseEnter={() => setActiveStage(stg.key)}
                    onMouseLeave={() => setActiveStage(null)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Vertical Calibration Ticks */}
                    <line
                      x1={cx}
                      y1="35"
                      x2={cx}
                      y2="85"
                      stroke={isActive ? "#00e5ff" : "#d4af37"}
                      strokeWidth="0.5"
                      opacity={isActive ? "0.8" : "0.25"}
                    />

                    {/* Outer Circle Node */}
                    <circle
                      cx={cx}
                      cy="60"
                      r={isActive ? "14" : "9"}
                      fill="#07070b"
                      stroke={isActive ? "#00e5ff" : "#d4af37"}
                      strokeWidth={isActive ? "1.5" : "1"}
                      opacity={isActive ? "1" : "0.6"}
                      className="timeline-node-circle"
                    />

                    {/* Inner Core Dot */}
                    <circle
                      cx={cx}
                      cy="60"
                      r={isActive ? "4" : "2.5"}
                      fill={isActive ? "#00e5ff" : "#d4af37"}
                    />

                    {/* Stage Number Label above Node */}
                    <text
                      x={cx}
                      y="25"
                      textAnchor="middle"
                      fill={isActive ? "#00e5ff" : "rgba(212, 175, 55, 0.6)"}
                      fontSize="9"
                      fontFamily="Space Mono"
                      letterSpacing="0.1em"
                    >
                      {stg.phase}
                    </text>

                    {/* Stage Name Label below Node */}
                    <text
                      x={cx}
                      y="102"
                      textAnchor="middle"
                      fill={isActive ? "#f1ebdd" : "rgba(148, 163, 184, 0.7)"}
                      fontSize="10"
                      fontFamily="Cinzel"
                      letterSpacing="0.08em"
                      fontWeight="600"
                    >
                      {stg.title}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="timeline-meta-bottom">
            <span>CONCEPT // 01 THROUGH 04</span>
            <span>LANDING PAGE FRAMEWORK</span>
          </div>
        </div>

        {/* 4 Program Stages Grid Cards */}
        <div className="stages-grid">
          {stages.map((item) => {
            const IconComp = item.icon;
            const isActive = activeStage === item.key;

            return (
              <div
                key={item.id}
                className={`stage-card ${isActive ? "is-active" : ""}`}
                onMouseEnter={() => setActiveStage(item.key)}
                onMouseLeave={() => setActiveStage(null)}
              >
                <div className="stage-top">
                  <div className="stage-phase-tag">{item.phase}</div>
                  <div className="stage-icon-wrap">
                    <IconComp size={18} />
                  </div>
                </div>

                <div className="stage-header">
                  <span className="stage-id">{item.id}</span>
                  <h3 className="stage-title">{item.title}</h3>
                </div>

                <div className="stage-sub">{item.subtitle}</div>
                <p className="stage-desc">{item.desc}</p>

                <div className="stage-footer">
                  <span className="stage-coord">{item.coord}</span>
                  <ArrowUpRight size={14} className="stage-arrow" />
                </div>

                <div className="stage-bottom-line" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* Timeline Visual Strip */
        .timeline-visual-panel {
          position: relative;
          width: 100%;
          background: rgba(12, 13, 20, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.18);
          padding: 1.25rem 1.5rem;
          margin-bottom: 2.5rem;
        }

        .timeline-meta-top,
        .timeline-meta-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.1em;
          color: rgba(212, 175, 55, 0.5);
        }

        .timeline-meta-top {
          margin-bottom: 0.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed rgba(212, 175, 55, 0.15);
        }

        .timeline-meta-bottom {
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px dashed rgba(212, 175, 55, 0.15);
        }

        .timeline-svg-wrapper {
          position: relative;
          width: 100%;
          height: 100px;
        }

        .timeline-svg {
          width: 100%;
          height: 100%;
        }

        .timeline-node-circle {
          transition: r 0.25s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.25s ease;
        }

        .timeline-active-line {
          transition: x2 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Program Stages Cards Grid */
        .stages-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 576px) {
          .stages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .stages-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stage-card {
          position: relative;
          background: rgba(12, 13, 20, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.15);
          padding: 1.5rem 1.25rem 1.25rem 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;
          cursor: pointer;
          min-height: 240px;
        }

        .stage-card:hover,
        .stage-card.is-active {
          border-color: rgba(212, 175, 55, 0.5);
          background: rgba(212, 175, 55, 0.03);
          transform: translateY(-2px);
        }

        .stage-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .stage-phase-tag {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.1em;
          color: rgba(0, 229, 255, 0.8);
          background: rgba(0, 229, 255, 0.05);
          border: 1px solid rgba(0, 229, 255, 0.2);
          padding: 0.15rem 0.4rem;
        }

        .stage-icon-wrap {
          color: rgba(212, 175, 55, 0.6);
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .stage-card:hover .stage-icon-wrap {
          color: var(--color-gold, #d4af37);
          transform: scale(1.05);
        }

        .stage-header {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 0.2rem;
        }

        .stage-id {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-gold, #d4af37);
        }

        .stage-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1.125rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--color-ivory, #f1ebdd);
          margin: 0;
        }

        .stage-sub {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.12em;
          color: rgba(212, 175, 55, 0.6);
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .stage-desc {
          font-family: var(--font-sans, system-ui, sans-serif);
          font-size: 0.84375rem;
          line-height: 1.5;
          color: var(--color-text-muted, #94a3b8);
          margin: 0 0 1.25rem 0;
          flex-grow: 1;
        }

        .stage-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .stage-coord {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.5625rem;
          letter-spacing: 0.08em;
          color: rgba(212, 175, 55, 0.4);
        }

        .stage-arrow {
          color: rgba(212, 175, 55, 0.4);
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .stage-card:hover .stage-arrow {
          transform: translate(2px, -2px);
          color: var(--color-gold, #d4af37);
        }

        .stage-bottom-line {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: transparent;
          transition: background-color 0.25s ease;
        }

        .stage-card:hover .stage-bottom-line,
        .stage-card.is-active .stage-bottom-line {
          background: var(--color-gold, #d4af37);
        }

        /* Accessibility: Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .stage-card,
          .stage-icon-wrap,
          .stage-arrow,
          .timeline-node-circle,
          .timeline-active-line {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
