// Hero.jsx
import React from "react";

export default function Hero() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Editorial & Concept Header */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span className="badge-text">30TH EDITION</span>
            <span className="badge-separator">|</span>
            <span className="badge-concept">LANDING PAGE CONCEPT</span>
          </div>

          <h1 className="hero-title">
            AETHERIAL <br />
            <span className="hero-title-accent">RENAISSANCE</span>
          </h1>

          <p className="hero-subtitle">— CREATIVE DESIGN CONCEPT</p>

          <p className="hero-description">
            Techfest IIT Bombay marks its 30th edition with a celebration of
            science, technology, and ideas. Explore a design exploration of
            exhibitions, lectures, competitions, and experiences inspired by the
            spirit of innovation.
          </p>

          <div className="hero-actions">
            <a
              href="#thesis"
              onClick={(e) => handleNavClick(e, "#thesis")}
              className="btn-primary"
            >
              EXPLORE THE CONCEPT <span className="btn-icon">↗</span>
            </a>
            <a
              href="#events"
              onClick={(e) => handleNavClick(e, "#events")}
              className="btn-secondary"
            >
              VIEW EXPERIENCES <span className="btn-icon">◎</span>
            </a>
          </div>

          <div className="hero-metadata">
            <div className="meta-item">
              <span className="meta-label">VENUE</span>
              <span className="meta-value">IIT BOMBAY, MUMBAI</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <span className="meta-label">MILESTONE</span>
              <span className="meta-value">30TH EDITION</span>
            </div>
            <div className="meta-divider" />
            <div className="meta-item">
              <span className="meta-label">FOCUS</span>
              <span className="meta-value">SCIENCE & TECH</span>
            </div>
          </div>
        </div>

        {/* Right Column: Celestial/Astrolabe Diagram Visual */}
        <div className="hero-visual" aria-hidden="true">
          <div className="astrolabe-container">
            {/* Outer Rotating Ring */}
            <div className="ring ring-outer" />
            {/* Middle Dashed Ring */}
            <div className="ring ring-middle" />
            {/* Inner Ring */}
            <div className="ring ring-inner" />

            {/* Crosshair Axes */}
            <div className="axis axis-v" />
            <div className="axis axis-h" />

            {/* Orbiting Points */}
            <div className="orbit-node node-1" />
            <div className="orbit-node node-2" />
            <div className="orbit-node node-3" />

            {/* Core Element */}
            <div className="astrolabe-core">
              <span className="core-label">30TH EDITION</span>
              <span className="core-sublabel">IIT BOMBAY</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-ticker">
        <div className="ticker-track">
          <span>IIT BOMBAY</span>
          <span className="ticker-bullet">•</span>
          <span>MUMBAI</span>
          <span className="ticker-bullet">•</span>
          <span>30TH EDITION</span>
          <span className="ticker-bullet">•</span>
          <span>SCIENCE & TECHNOLOGY FESTIVAL</span>
          <span className="ticker-bullet">•</span>
          <span>EXHIBITIONS</span>
          <span className="ticker-bullet">•</span>
          <span>LECTURES</span>
          <span className="ticker-bullet">•</span>
          <span>COMPETITIONS</span>
          <span className="ticker-bullet">•</span>
          <span>WORKSHOPS</span>
          <span className="ticker-bullet">•</span>
          <span>IIT BOMBAY</span>
          <span className="ticker-bullet">•</span>
          <span>MUMBAI</span>
          <span className="ticker-bullet">•</span>
          <span>30TH EDITION</span>
          <span className="ticker-bullet">•</span>
          <span>SCIENCE & TECHNOLOGY FESTIVAL</span>
          <span className="ticker-bullet">•</span>
          <span>EXHIBITIONS</span>
          <span className="ticker-bullet">•</span>
          <span>LECTURES</span>
          <span className="ticker-bullet">•</span>
          <span>COMPETITIONS</span>
          <span className="ticker-bullet">•</span>
          <span>WORKSHOPS</span>
          <span className="ticker-bullet">•</span>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          background-color: var(--color-space, #07070b);
          padding-top: 6rem;
          padding-bottom: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .hero-container {
            grid-template-columns: 1.1fr 0.9fr;
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          z-index: 2;
          animation: heroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          padding: 0.25rem 0.75rem;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.25);
          width: fit-content;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background-color: var(--color-gold, #d4af37);
          border-radius: 50%;
          animation: pulseGlow 2.5s ease-in-out infinite alternate;
        }

        .badge-text, .badge-concept {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.6875rem;
          letter-spacing: 0.15em;
          color: var(--color-gold, #d4af37);
        }

        .badge-separator {
          color: rgba(212, 175, 55, 0.4);
          font-size: 0.75rem;
        }

        .hero-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: 0.04em;
          color: var(--color-ivory, #f1ebdd);
          margin-bottom: 0.75rem;
        }

        .hero-title-accent {
          color: var(--color-gold, #d4af37);
        }

        .hero-subtitle {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.8125rem;
          letter-spacing: 0.18em;
          color: var(--color-gold, #d4af37);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        .hero-description {
          font-family: var(--font-body, "Inter", sans-serif);
          font-size: 1rem;
          line-height: 1.65;
          color: var(--color-text-muted, #94a3b8);
          max-width: 520px;
          margin-bottom: 2rem;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-gold, #d4af37);
          color: #07070b;
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 0.875rem 1.5rem;
          text-decoration: none;
          transition: background-color 0.25s ease, transform 0.25s ease;
        }

        .btn-primary:hover {
          background: #f1ebdd;
          transform: translateY(-1px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: var(--color-ivory, #f1ebdd);
          border: 1px solid rgba(241, 235, 221, 0.25);
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          padding: 0.875rem 1.5rem;
          text-decoration: none;
          transition: border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }

        .btn-secondary:hover {
          border-color: var(--color-gold, #d4af37);
          color: var(--color-gold, #d4af37);
          transform: translateY(-1px);
        }

        .hero-metadata {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(212, 175, 55, 0.15);
        }

        .meta-item {
          display: flex;
          flex-direction: column;
        }

        .meta-label {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.5625rem;
          letter-spacing: 0.12em;
          color: var(--color-text-muted, #94a3b8);
        }

        .meta-value {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.6875rem;
          letter-spacing: 0.08em;
          color: var(--color-ivory, #f1ebdd);
          font-weight: 700;
          margin-top: 0.2rem;
        }

        .meta-divider {
          width: 1px;
          height: 24px;
          background: rgba(212, 175, 55, 0.15);
        }

        /* Hero Visual Diagram */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          animation: heroFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s backwards;
        }

        .astrolabe-container {
          width: 320px;
          height: 320px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 768px) {
          .astrolabe-container {
            width: 420px;
            height: 420px;
          }
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .ring-outer {
          width: 100%;
          height: 100%;
          border-style: dashed;
          animation: orbitRotate 90s linear infinite;
        }

        .ring-middle {
          width: 75%;
          height: 75%;
          border-color: rgba(212, 175, 55, 0.35);
          animation: orbitRotateRev 60s linear infinite;
        }

        .ring-inner {
          width: 50%;
          height: 50%;
          animation: orbitRotate 45s linear infinite;
        }

        .axis {
          position: absolute;
          background: rgba(212, 175, 55, 0.15);
        }

        .axis-v {
          width: 1px;
          height: 100%;
        }

        .axis-h {
          height: 1px;
          width: 100%;
        }

        .orbit-node {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-gold, #d4af37);
          box-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
          animation: nodePulse 3s ease-in-out infinite alternate;
        }

        .node-1 { top: 12.5%; left: 50%; transform: translate(-50%, -50%); animation-delay: 0s; }
        .node-2 { top: 68%; left: 20%; transform: translate(-50%, -50%); background: #38bdf8; box-shadow: 0 0 8px rgba(56, 189, 248, 0.6); animation-delay: 1s; }
        .node-3 { top: 78%; left: 75%; transform: translate(-50%, -50%); animation-delay: 2s; }

        .astrolabe-core {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: rgba(7, 7, 11, 0.85);
          border: 1px solid rgba(212, 175, 55, 0.4);
          text-align: center;
          z-index: 1;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.1);
          animation: coreGlow 4s ease-in-out infinite alternate;
        }

        .core-label {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.5625rem;
          letter-spacing: 0.1em;
          color: var(--color-gold, #d4af37);
        }

        .core-sublabel {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.5rem;
          letter-spacing: 0.08em;
          color: var(--color-text-muted, #94a3b8);
          margin-top: 0.2rem;
        }

        /* Ticker */
        .hero-ticker {
          width: 100%;
          border-top: 1px solid rgba(212, 175, 55, 0.12);
          border-bottom: 1px solid rgba(212, 175, 55, 0.12);
          padding: 0.625rem 0;
          overflow: hidden;
          background: rgba(7, 7, 11, 0.6);
        }

        .ticker-track {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          white-space: nowrap;
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.625rem;
          letter-spacing: 0.2em;
          color: rgba(241, 235, 221, 0.6);
          animation: tickerScroll 35s linear infinite;
        }

        .ticker-bullet {
          color: var(--color-gold, #d4af37);
        }

        /* Animations */
        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbitRotateRev {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes nodePulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(1.4); opacity: 1; }
        }

        @keyframes pulseGlow {
          0% { opacity: 0.5; box-shadow: 0 0 2px rgba(212, 175, 55, 0.4); }
          100% { opacity: 1; box-shadow: 0 0 8px rgba(212, 175, 55, 0.8); }
        }

        @keyframes coreGlow {
          0% { border-color: rgba(212, 175, 55, 0.3); box-shadow: 0 0 15px rgba(212, 175, 55, 0.05); }
          100% { border-color: rgba(212, 175, 55, 0.6); box-shadow: 0 0 25px rgba(212, 175, 55, 0.2); }
        }

        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ring-outer,
          .ring-middle,
          .ring-inner,
          .orbit-node,
          .badge-dot,
          .astrolabe-core,
          .hero-content,
          .hero-visual,
          .ticker-track {
            animation: none !important;
          }
          .btn-primary:hover,
          .btn-secondary:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
