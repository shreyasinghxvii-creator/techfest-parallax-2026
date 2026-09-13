// KnowledgeMap.jsx
import React, { useState } from "react";

export default function KnowledgeMap() {
  const [activeDomain, setActiveDomain] = useState(0);

  const domains = [
    {
      id: "DM-01",
      title: "QUANTUM & APPLIED PHYSICS",
      desc: "Explorations in quantum coherence, semiconductor physics, photonics, and novel materials shaping future computational architectures.",
      x: 200,
      y: 120,
    },
    {
      id: "DM-02",
      title: "ROBOTICS & AUTONOMY",
      desc: "Kinematic frameworks, sensor fusion, spatial navigation, and bio-inspired robotics operating across complex physical environments.",
      x: 340,
      y: 220,
    },
    {
      id: "DM-03",
      title: "SYNTHETIC INTELLIGENCE",
      desc: "Algorithmic intelligence, predictive neural models, natural language synthesis, and scalable machine learning frameworks.",
      x: 120,
      y: 280,
    },
    {
      id: "DM-04",
      title: "SUSTAINABLE INFRASTRUCTURE",
      desc: "Renewable energy systems, smart grid dynamics, circular material flows, and resilient urban engineering paradigms.",
      x: 260,
      y: 350,
    },
  ];

  const handleKeyDownNode = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveDomain(idx);
    }
  };

  return (
    <section
      id="knowledge"
      aria-label="Knowledge Map - Conceptual Exploration Domains"
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
            <span>03 / KNOWLEDGE MAP</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span style={{ opacity: 0.8 }}>CONCEPTUAL DOMAINS</span>
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
            INTERCONNECTED LANDSCAPES
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
            A landing page visual mapping conceptual technology domains at the
            intersection of scientific curiosity and practical engineering for
            Techfest 30th Edition.
          </p>
        </div>

        {/* Constellation & Card Layout */}
        <div className="knowledge-layout">
          {/* Constellation SVG Graph */}
          <div className="knowledge-map-graphic">
            <svg
              viewBox="0 0 460 460"
              className="constellation-svg"
              aria-hidden="true"
            >
              {/* Connection Lines */}
              <line
                className={`constellation-line ${
                  activeDomain === 0 || activeDomain === 1 ? "is-connected" : ""
                }`}
                x1="200"
                y1="120"
                x2="340"
                y2="220"
                stroke="rgba(212, 175, 55, 0.25)"
                strokeWidth="1"
              />
              <line
                className={`constellation-line ${
                  activeDomain === 0 || activeDomain === 2 ? "is-connected" : ""
                }`}
                x1="200"
                y1="120"
                x2="120"
                y2="280"
                stroke="rgba(212, 175, 55, 0.25)"
                strokeWidth="1"
              />
              <line
                className={`constellation-line ${
                  activeDomain === 1 || activeDomain === 3 ? "is-connected" : ""
                }`}
                x1="340"
                y1="220"
                x2="260"
                y2="350"
                stroke="rgba(212, 175, 55, 0.25)"
                strokeWidth="1"
              />
              <line
                className={`constellation-line ${
                  activeDomain === 2 || activeDomain === 3 ? "is-connected" : ""
                }`}
                x1="120"
                y1="280"
                x2="260"
                y2="350"
                stroke="rgba(212, 175, 55, 0.25)"
                strokeWidth="1"
              />
              <line
                className={`constellation-line ${
                  activeDomain === 0 || activeDomain === 3 ? "is-connected" : ""
                }`}
                x1="200"
                y1="120"
                x2="260"
                y2="350"
                stroke="rgba(212, 175, 55, 0.15)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              {/* Node Groups */}
              {domains.map((node, idx) => {
                const isActive = activeDomain === idx;
                return (
                  <g
                    key={node.id}
                    tabIndex="0"
                    role="button"
                    aria-label={`${node.id}: ${node.title}`}
                    className={`constellation-node ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveDomain(idx)}
                    onKeyDown={(e) => handleKeyDownNode(e, idx)}
                  >
                    {isActive && (
                      <circle
                        className="pulse-ring"
                        cx={node.x}
                        cy={node.y}
                        r="22"
                        fill="none"
                        stroke="#d4af37"
                        strokeWidth="0.75"
                        opacity="0.6"
                      />
                    )}
                    <circle
                      className="node-outer"
                      cx={node.x}
                      cy={node.y}
                      r="8"
                      fill="#07070b"
                      stroke={isActive ? "#d4af37" : "rgba(212, 175, 55, 0.4)"}
                      strokeWidth={isActive ? "2" : "1"}
                    />
                    <circle
                      className="node-inner"
                      cx={node.x}
                      cy={node.y}
                      r="3"
                      fill={isActive ? "#f1ebdd" : "#d4af37"}
                    />
                    <text
                      className="node-text"
                      x={node.x}
                      y={node.y - 14}
                      textAnchor="middle"
                      fill={isActive ? "#d4af37" : "rgba(212, 175, 55, 0.7)"}
                      fontSize="10"
                      fontFamily="Space Mono, monospace"
                      letterSpacing="0.1em"
                    >
                      {node.id}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Domain Cards List */}
          <div
            className="knowledge-cards-list"
            role="tablist"
            aria-label="Conceptual Domains"
          >
            {domains.map((domain, idx) => {
              const isActive = activeDomain === idx;
              return (
                <button
                  key={domain.id}
                  type="button"
                  role="tab"
                  id={`domain-tab-${idx}`}
                  aria-selected={isActive}
                  aria-controls={`domain-panel-${idx}`}
                  className={`domain-card-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveDomain(idx)}
                  onMouseEnter={() => setActiveDomain(idx)}
                >
                  <div className="card-header">
                    <span className="domain-id">{domain.id}</span>
                    <h3 className="domain-title">{domain.title}</h3>
                  </div>
                  <p className="domain-desc">{domain.desc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .knowledge-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (min-width: 900px) {
          .knowledge-layout {
            grid-template-columns: 1fr 1.25fr;
          }
        }

        .knowledge-map-graphic {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          aspect-ratio: 1 / 1;
        }

        .constellation-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .constellation-line {
          transition: stroke 0.3s ease, stroke-width 0.3s ease, opacity 0.3s ease;
        }

        .constellation-line.is-connected {
          stroke: rgba(212, 175, 55, 0.7);
          stroke-width: 1.5;
        }

        .constellation-node {
          cursor: pointer;
          outline: none;
        }

        .constellation-node .node-outer,
        .constellation-node .node-inner,
        .constellation-node .node-text {
          transition: stroke 0.3s ease, fill 0.3s ease, transform 0.3s ease;
          transform-origin: center;
        }

        .constellation-node:hover .node-outer,
        .constellation-node:focus-visible .node-outer {
          stroke: #d4af37;
          stroke-width: 1.5;
        }

        .constellation-node:hover .node-text,
        .constellation-node:focus-visible .node-text {
          fill: #d4af37;
        }

        .pulse-ring {
          animation: nodePulse 2s ease-in-out infinite alternate;
          transform-origin: center;
        }

        @keyframes nodePulse {
          0% {
            r: 18px;
            opacity: 0.3;
          }
          100% {
            r: 24px;
            opacity: 0.7;
          }
        }

        .knowledge-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .domain-card-btn {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          width: 100%;
          background: rgba(12, 13, 20, 0.4);
          border: 1px solid rgba(212, 175, 55, 0.12);
          padding: 1.5rem;
          cursor: pointer;
          transition: border-color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;
          outline: none;
          color: inherit;
          font: inherit;
        }

        .domain-card-btn:hover,
        .domain-card-btn.is-active {
          border-color: rgba(212, 175, 55, 0.4);
          background: rgba(212, 175, 55, 0.04);
          transform: translateX(4px);
        }

        .domain-card-btn:focus-visible {
          outline: 1px solid var(--color-gold, #d4af37);
          outline-offset: 2px;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .domain-id {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-gold, #d4af37);
        }

        .domain-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1.0625rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: var(--color-ivory, #f1ebdd);
          margin: 0;
        }

        .domain-desc {
          font-family: var(--font-sans, system-ui, sans-serif);
          font-size: 0.875rem;
          line-height: 1.55;
          color: var(--color-text-muted, #94a3b8);
          margin: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .domain-card-btn,
          .constellation-line,
          .constellation-node .node-outer,
          .constellation-node .node-inner,
          .constellation-node .node-text {
            transition: none !important;
          }

          .domain-card-btn:hover,
          .domain-card-btn.is-active {
            transform: none !important;
          }

          .pulse-ring {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
