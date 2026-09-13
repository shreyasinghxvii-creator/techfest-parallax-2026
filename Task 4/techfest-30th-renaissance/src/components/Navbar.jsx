// Navbar.jsx
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (targetId === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { label: "OVERVIEW", href: "#top" },
    { label: "THEME", href: "#thesis" },
    { label: "EXHIBITIONS", href: "#knowledge" },
    { label: "COMPETITIONS", href: "#invention" },
    { label: "LECTURES", href: "#radar" },
    { label: "WORKSHOPS", href: "#workshops" },
    { label: "EVENTS", href: "#events" },
    { label: "ARCHIVE", href: "#archive" },
    { label: "TIME CAPSULE", href: "#time-capsule" },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="navbar-brand"
          aria-label="Techfest - Home"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 100 100"
            className="brand-mark-svg"
            aria-hidden="true"
          >
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <circle
              cx="50"
              cy="50"
              r="32"
              fill="none"
              stroke="#d4af37"
              strokeWidth="1"
            />
            <line
              x1="50"
              y1="10"
              x2="50"
              y2="90"
              stroke="#d4af37"
              strokeWidth="1"
            />
            <line
              x1="10"
              y1="50"
              x2="90"
              y2="50"
              stroke="#d4af37"
              strokeWidth="1"
            />
            <circle cx="50" cy="50" r="5" fill="#f1ebdd" />
          </svg>
          <div className="brand-text">
            <span className="brand-title">TECHFEST</span>
            <span className="brand-subtitle">IIT BOMBAY</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? "open" : ""}`} />
          <span className={`hamburger-bar ${mobileMenuOpen ? "open" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="mobile-nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: rgba(7, 7, 11, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.12);
          transition: background-color 0.3s ease, border-color 0.3s ease, padding 0.3s ease;
          padding: 1rem 0;
        }

        .navbar-header.is-scrolled {
          background-color: rgba(7, 7, 11, 0.92);
          border-bottom-color: rgba(212, 175, 55, 0.25);
          padding: 0.75rem 0;
        }

        .navbar-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          align-items: center !important;
          justify-content: space-between !important;
        }

        /* Brand */
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          flex: 0 0 auto !important;
        }

        .brand-mark-svg {
          flex-shrink: 0;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-heading, "Cinzel", serif);
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--color-ivory, #f1ebdd);
          line-height: 1;
        }

        .brand-subtitle {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.5625rem;
          letter-spacing: 0.15em;
          color: var(--color-gold, #d4af37);
          margin-top: 0.2rem;
        }

        /* Desktop Nav */
        .desktop-nav {
          display: none;
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: block !important;
            flex: 1 !important;
            min-width: 0 !important;
          }

          .desktop-nav .nav-list {
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            align-items: center !important;
            justify-content: flex-end !important;
            gap: 0.65rem !important;
            width: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            list-style: none !important;
            grid-template-columns: none !important;
            grid-template-rows: none !important;
          }

          .desktop-nav .nav-list li {
            display: block !important;
            width: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            flex: 0 0 auto !important;
          }

          .desktop-nav .nav-link {
            display: inline-block !important;
            white-space: nowrap !important;
            font-family: var(--font-mono, "Space Mono", monospace);
            font-size: 0.62rem !important;
            letter-spacing: 0.05em !important;
            color: var(--color-text-muted, #94a3b8);
            text-decoration: none;
            transition: color 0.25s ease;
          }
        }

        @media (min-width: 1180px) {
          .desktop-nav .nav-list {
            gap: 1rem !important;
          }

          .desktop-nav .nav-link {
            font-size: 0.6875rem !important;
            letter-spacing: 0.08em !important;
          }
        }

        .desktop-nav .nav-link:hover,
        .desktop-nav .nav-link:focus-visible {
          color: var(--color-ivory, #f1ebdd);
          outline: none;
        }

        /* Mobile Toggle */
        .mobile-toggle {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }

        @media (min-width: 1024px) {
          .mobile-toggle {
            display: none !important;
          }
        }

        .hamburger-bar {
          width: 20px;
          height: 1px;
          background-color: var(--color-gold, #d4af37);
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        /* Mobile Overlay */
        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: rgba(7, 7, 11, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          padding: 1.5rem 0;
        }

        @media (min-width: 1024px) {
          .mobile-nav {
            display: none !important;
          }
        }

        .mobile-nav-list {
          list-style: none;
          margin: 0;
          padding: 0 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          font-family: var(--font-mono, "Space Mono", monospace);
          font-size: 0.8125rem;
          letter-spacing: 0.12em;
          color: var(--color-text-muted, #94a3b8);
          text-decoration: none;
          display: block;
          transition: color 0.2s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link:focus-visible {
          color: var(--color-gold, #d4af37);
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar-header,
          .desktop-nav .nav-link,
          .hamburger-bar,
          .mobile-nav-link {
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
}
