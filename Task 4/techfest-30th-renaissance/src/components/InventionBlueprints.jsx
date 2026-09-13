// InventionBlueprints.jsx
import React from "react";
import { ArrowUpRight, Hammer, BrainCircuit, Sparkles } from "lucide-react";

export default function InventionBlueprints() {
  const panels = [
    {
      id: "01",
      title: "BUILD",
      icon: Hammer,
      code: "BUILD // CONCEPT-01",
      description: "Design, prototype and build a working solution.",
      renderDiagram: () => (
        <svg
          viewBox="0 0 200 120"
          width="100%"
          height="100%"
          aria-hidden="true"
        >
          {/* Blueprint Grid */}
          <line
            x1="0"
            y1="20"
            x2="200"
            y2="20"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />
          <line
            x1="0"
            y1="60"
            x2="200"
            y2="60"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />
          <line
            x1="0"
            y1="100"
            x2="200"
            y2="100"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />
          <line
            x1="50"
            y1="0"
            x2="50"
            y2="120"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="120"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />
          <line
            x1="150"
            y1="0"
            x2="150"
            y2="120"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />

          {/* Technical Diagram 01 */}
          <rect
            x="40"
            y="30"
            width="120"
            height="60"
            stroke="#d4af37"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <polygon
            points="100,15 150,30 50,30"
            stroke="#00e5ff"
            strokeWidth="0.75"
            fill="none"
            opacity="0.5"
          />
          <circle
            cx="100"
            cy="60"
            r="18"
            stroke="#d4af37"
            strokeWidth="0.75"
            strokeDasharray="4 2"
            fill="none"
            opacity="0.8"
            className="diagram-rotate-cw"
          />
          <circle
            cx="100"
            cy="60"
            r="4"
            fill="#d4af37"
            opacity="0.9"
            className="diagram-pulse"
          />
          <line
            x1="20"
            y1="60"
            x2="180"
            y2="60"
            stroke="#9f8440"
            strokeWidth="0.5"
            opacity="0.4"
          />

          {/* Dimension Lines */}
          <line
            x1="40"
            y1="100"
            x2="160"
            y2="100"
            stroke="#00e5ff"
            strokeWidth="0.5"
            opacity="0.5"
          />
          <line
            x1="40"
            y1="97"
            x2="40"
            y2="103"
            stroke="#00e5ff"
            strokeWidth="0.5"
            opacity="0.5"
          />
          <line
            x1="160"
            y1="97"
            x2="160"
            y2="103"
            stroke="#00e5ff"
            strokeWidth="0.5"
            opacity="0.5"
          />
          <text
            x="100"
            y="112"
            fill="#00e5ff"
            fontSize="7"
            fontFamily="Space Mono"
            textAnchor="middle"
            opacity="0.7"
          >
            CONCEPT MAP
          </text>
        </svg>
      ),
    },
    {
      id: "02",
      title: "SOLVE",
      icon: BrainCircuit,
      code: "ALG // CONCEPT-02",
      description:
        "Approach complex problems with logic, strategy and technical skill.",
      renderDiagram: () => (
        <svg
          viewBox="0 0 200 120"
          width="100%"
          height="100%"
          aria-hidden="true"
        >
          {/* Blueprint Grid */}
          <line
            x1="0"
            y1="30"
            x2="200"
            y2="30"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />
          <line
            x1="0"
            y1="90"
            x2="200"
            y2="90"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />
          <line
            x1="60"
            y1="0"
            x2="60"
            y2="120"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />
          <line
            x1="140"
            y1="0"
            x2="140"
            y2="120"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />

          {/* Technical Diagram 02 */}
          <circle
            cx="100"
            cy="60"
            r="40"
            stroke="#d4af37"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
          <polygon
            points="100,20 135,80 65,80"
            stroke="#d4af37"
            strokeWidth="0.75"
            fill="none"
            opacity="0.5"
            className="diagram-rotate-cw"
          />
          <polygon
            points="100,100 65,40 135,40"
            stroke="#00e5ff"
            strokeWidth="0.75"
            fill="none"
            opacity="0.4"
            className="diagram-rotate-ccw"
          />
          <circle
            cx="100"
            cy="60"
            r="8"
            fill="#07070b"
            stroke="#d4af37"
            strokeWidth="1"
            className="diagram-pulse"
          />

          {/* Angle Dimension */}
          <path
            d="M 100,20 A 40,40 0 0,1 135,80"
            fill="none"
            stroke="#00e5ff"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            opacity="0.7"
          />
        </svg>
      ),
    },
    {
      id: "03",
      title: "CREATE",
      icon: Sparkles,
      code: "DEV // CONCEPT-03",
      description:
        "Develop original ideas that connect technology with real-world needs.",
      renderDiagram: () => (
        <svg
          viewBox="0 0 200 120"
          width="100%"
          height="100%"
          aria-hidden="true"
        >
          {/* Blueprint Grid */}
          <line
            x1="0"
            y1="40"
            x2="200"
            y2="40"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />
          <line
            x1="0"
            y1="80"
            x2="200"
            y2="80"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="120"
            stroke="#d4af37"
            strokeWidth="0.5"
            opacity="0.15"
            strokeDasharray="2 2"
          />

          {/* Technical Diagram 03 */}
          <path
            d="M 30,80 Q 60,10 100,60 T 170,40"
            fill="none"
            stroke="#d4af37"
            strokeWidth="1.25"
            opacity="0.8"
            className="diagram-dash-flow"
          />
          <path
            d="M 30,40 Q 80,100 130,40 T 170,80"
            fill="none"
            stroke="#00e5ff"
            strokeWidth="0.75"
            strokeDasharray="3 3"
            opacity="0.5"
            className="diagram-dash-flow-rev"
          />

          <circle
            cx="60"
            cy="42"
            r="3"
            fill="#d4af37"
            className="diagram-pulse"
          />
          <circle
            cx="100"
            cy="60"
            r="3"
            fill="#d4af37"
            className="diagram-pulse"
          />
          <circle
            cx="148"
            cy="46"
            r="3"
            fill="#d4af37"
            className="diagram-pulse"
          />

          <line
            x1="100"
            y1="15"
            x2="100"
            y2="105"
            stroke="#9f8440"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <text
            x="105"
            y="22"
            fill="#d4af37"
            fontSize="7"
            fontFamily="Space Mono"
            opacity="0.7"
          >
            IDEA_FLOW
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="invention"
      aria-label="Invention Blueprints - Conceptual Frameworks"
      className="section"
      style={{
        position: "relative",
        padding: "6rem 0",
        backgroundColor: "var(--color-bg, #07070b)",
        color: "var(--color-text, #e2e8f0)",
        borderTop: "1px solid var(--border-subtle, rgba(212, 175, 55, 0.15))",
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
            <span>04 / COMPETITIONS</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ color: "#00e5ff", opacity: 0.8 }}>
              TECHNICAL SCHEMATICS
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
            INVENTION BLUEPRINTS
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
            Turn ideas into solutions through challenges that test
            problem-solving, engineering and creative thinking.
          </p>
        </div>

        {/* Blueprint Sheets Grid */}
        <div className="blueprint-grid">
          {panels.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="blueprint-card">
                {/* Blueprint Sheet Header */}
                <div className="blueprint-meta">
                  <span className="blueprint-id">{item.id}</span>
                  <span className="blueprint-code">{item.code}</span>
                  <div className="blueprint-icon-wrap">
                    <IconComponent size={16} />
                  </div>
                </div>

                {/* Abstract Schematic Visual */}
                <div className="blueprint-visual">
                  {item.renderDiagram()}
                  <div className="blueprint-crosshair top-left-ch">+</div>
                  <div className="blueprint-crosshair top-right-ch">+</div>
                  <div className="blueprint-crosshair bottom-left-ch">+</div>
                  <div className="blueprint-crosshair bottom-right-ch">+</div>
                </div>

                {/* Content & Action */}
                <div className="blueprint-body">
                  <h3 className="blueprint-title">{item.title}</h3>
                  <p className="blueprint-desc">{item.description}</p>

                  <div className="blueprint-footer">
                    <span className="blueprint-cue">
                      <span>EXPLORE</span>
                      <ArrowUpRight size={14} className="blueprint-arrow" />
                    </span>
                    <span className="blueprint-stamp">CONCEPT</span>
                  </div>
                </div>

                {/* Blueprint Technical Frame Markings */}
                <div className="frame-line frame-top" />
                <div className="frame-line frame-right" />
                <div className="frame-line frame-bottom" />
                <div className="frame-line frame-left" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .blueprint-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 768px) {
          .blueprint-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .blueprint-card {
          position: relative;
          background: rgba(12, 13, 20, 0.6);
          border: 1px solid rgba(212, 175, 55, 0.18);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.25s ease, background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
          outline: none;
        }

        .blueprint-card:hover,
        .blueprint-card:focus-visible {
          border-color: rgba(212, 175, 55, 0.5);
          background: rgba(212, 175, 55, 0.02);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .blueprint-card:focus-visible {
          outline: 1px solid var(--color-gold, #d4af37);
          outline-offset: 2px;
        }

        .blueprint-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px dashed rgba(212, 175, 55, 0.2);
          font-family: var(--font-mono, "Space Mono", monospace);
        }

        .blueprint-id {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-gold, #d4af37);
        }

        .blueprint-code {
          font-size: 0.6875rem;
          letter-spacing: 0.1em;
          color: rgba(212, 175, 55, 0.6);
        }

        .blueprint-icon-wrap {
          color: var(--color-text-muted, #94a3b8);
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .blueprint-card:hover .blueprint-icon-wrap,
        .blueprint-card:focus-visible .blueprint-icon-wrap {
          color: var(--color-gold, #d4af37);
          transform: scale(1.1);
        }

        .blueprint-visual {
          position: relative;
          width: 100%;
          height: 130px;
          background: rgba(7, 7, 11, 0.8);
          border: 1px solid rgba(212, 175, 55, 0.1);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          overflow: hidden;
        }

        .blueprint-crosshair {
          position: absolute;
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          color: rgba(212, 175, 55, 0.3);
          line-height: 1;
        }

        .top-left-ch { top: 3px; left: 5px; }
        .top-right-ch { top: 3px; right: 5px; }
        .bottom-left-ch { bottom: 3px; left: 5px; }
        .bottom-right-ch { bottom: 3px; right: 5px; }

        .blueprint-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .blueprint-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--color-ivory, #f1ebdd);
          margin: 0 0 0.6rem 0;
        }

        .blueprint-desc {
          font-family: var(--font-sans, system-ui, sans-serif);
          font-size: 0.875rem;
          line-height: 1.55;
          color: var(--color-text-muted, #94a3b8);
          margin: 0 0 1.75rem 0;
          flex-grow: 1;
        }

        .blueprint-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.875rem;
          border-top: 1px solid rgba(212, 175, 55, 0.12);
          font-family: var(--font-mono, "Space Mono", monospace);
        }

        .blueprint-cue {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          color: var(--color-gold, #d4af37);
          font-weight: 600;
        }

        .blueprint-arrow {
          transition: transform 0.25s ease;
        }

        .blueprint-card:hover .blueprint-arrow,
        .blueprint-card:focus-visible .blueprint-arrow {
          transform: translate(2px, -2px);
        }

        .blueprint-stamp {
          font-size: 0.625rem;
          letter-spacing: 0.12em;
          color: #00e5ff;
          opacity: 0.6;
          border: 1px solid rgba(0, 229, 255, 0.3);
          padding: 0.15rem 0.4rem;
          transition: opacity 0.25s ease, border-color 0.25s ease;
        }

        .blueprint-card:hover .blueprint-stamp,
        .blueprint-card:focus-visible .blueprint-stamp {
          opacity: 0.9;
          border-color: rgba(0, 229, 255, 0.6);
        }

        /* Frame Corner Highlights */
        .frame-line {
          position: absolute;
          background: rgba(212, 175, 55, 0.3);
          transition: background-color 0.25s ease;
        }

        .blueprint-card:hover .frame-line,
        .blueprint-card:focus-visible .frame-line {
          background: var(--color-gold, #d4af37);
        }

        .frame-top { top: -1px; left: 10px; right: 10px; height: 1px; }
        .frame-bottom { bottom: -1px; left: 10px; right: 10px; height: 1px; }
        .frame-left { top: 10px; bottom: 10px; left: -1px; width: 1px; }
        .frame-right { top: 10px; bottom: 10px; right: -1px; width: 1px; }

        /* Technical SVG Diagram Motion */
        .diagram-rotate-cw {
          transform-origin: center;
          animation: diagramRotate 40s linear infinite;
        }

        .diagram-rotate-ccw {
          transform-origin: center;
          animation: diagramRotateRev 30s linear infinite;
        }

        .diagram-pulse {
          animation: diagramPulse 2.5s ease-in-out infinite alternate;
        }

        .diagram-dash-flow {
          stroke-dasharray: 6 3;
          animation: dashFlow 20s linear infinite;
        }

        .diagram-dash-flow-rev {
          animation: dashFlowRev 25s linear infinite;
        }

        @keyframes diagramRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes diagramRotateRev {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes diagramPulse {
          0% { opacity: 0.4; }
          100% { opacity: 1; }
        }

        @keyframes dashFlow {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -100; }
        }

        @keyframes dashFlowRev {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 100; }
        }

        @media (prefers-reduced-motion: reduce) {
          .blueprint-card,
          .blueprint-icon-wrap,
          .blueprint-arrow,
          .blueprint-stamp,
          .frame-line {
            transition: none !important;
          }

          .blueprint-card:hover,
          .blueprint-card:focus-visible {
            transform: none !important;
          }

          .diagram-rotate-cw,
          .diagram-rotate-ccw,
          .diagram-pulse,
          .diagram-dash-flow,
          .diagram-dash-flow-rev {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
