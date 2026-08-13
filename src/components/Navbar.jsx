import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

export const Navbar = ({ onOpenConsultation }) => {
  const { t, lang, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.contact, href: '#contact' }
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="navbar-wrapper">
      <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        {/* Brand Logo - strictly LTR so DigitalGlow is never reversed */}
        <a 
          href="#" 
          className="brand-logo" 
          dir="ltr"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <span className="logo-digital">Digital</span>
          <span className="logo-glow">Glow</span>
          <span className="logo-dot"></span>
        </a>

        {/* Desktop Nav Links */}
        <div className="nav-center-links">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleScrollTo(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions (Language Toggle & CTA Button) */}
        <div className="nav-actions">
          {/* EN/AR Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="lang-toggle-btn"
            title={`Switch to ${lang === 'en' ? 'Arabic' : 'English'}`}
            aria-label="Toggle language"
            dir="ltr"
          >
            <Globe size={14} className="globe-icon" />
            <span>{t.nav.langToggle}</span>
          </button>

          {/* Consultation CTA Button */}
          <button
            onClick={onOpenConsultation}
            className="btn btn-primary nav-cta-btn"
          >
            <span>{t.nav.cta}</span>
          </button>

          {/* Mobile Toggle Button (only on screens < 768px) */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-links-list">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => handleScrollTo(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-menu-actions">
              <button
                onClick={toggleLanguage}
                className="mobile-lang-btn"
              >
                <Globe size={16} />
                <span>{lang === 'en' ? 'العربية (AR)' : 'English (EN)'}</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
                className="btn btn-primary w-full"
              >
                {t.nav.cta}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: sticky;
          top: 16px;
          left: 0;
          right: 0;
          z-index: 100;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 20px;
          margin-bottom: 24px;
          box-sizing: border-box;
        }

        .navbar-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 28px;
          border-radius: var(--radius-full);
          background: rgba(13, 19, 34, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 35px -5px rgba(0, 0, 0, 0.6), 0 0 25px rgba(249, 115, 22, 0.08);
          transition: all var(--transition-smooth);
          box-sizing: border-box;
        }

        .navbar-container.scrolled {
          background: rgba(9, 13, 22, 0.94);
          border-color: rgba(249, 115, 22, 0.25);
          box-shadow: 0 12px 40px -5px rgba(0, 0, 0, 0.8), 0 0 30px rgba(249, 115, 22, 0.15);
        }

        .brand-logo {
          display: inline-flex !important;
          align-items: center;
          text-decoration: none;
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          direction: ltr !important;
          unicode-bidi: isolate;
          flex-shrink: 0;
        }

        .logo-digital {
          color: #ffffff;
        }

        .logo-glow {
          color: var(--accent-orange);
          background: var(--text-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 20px rgba(249, 115, 22, 0.4);
        }

        .logo-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-orange);
          margin-left: 2px;
          margin-top: 6px;
          box-shadow: 0 0 8px var(--accent-orange);
        }

        .nav-center-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          transition: color var(--transition-fast);
          position: relative;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link:hover::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent-orange);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--accent-orange);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .lang-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 15px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-cream);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          direction: ltr !important;
        }

        .lang-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--accent-orange);
          color: #ffffff;
        }

        .globe-icon {
          color: var(--accent-orange);
        }

        .nav-cta-btn {
          padding: 9px 22px;
          font-size: 0.88rem;
          white-space: nowrap;
        }

        .mobile-toggle-btn {
          display: none;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          color: var(--text-cream);
          cursor: pointer;
          padding: 7px 11px;
          align-items: center;
          justify-content: center;
          transition: background var(--transition-fast);
        }

        .mobile-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }

        .mobile-menu-drawer {
          display: none;
          width: 100%;
          max-width: 1200px;
          margin-top: 10px;
          background: rgba(13, 19, 34, 0.96);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.85);
          animation: drawerSlideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }

        .mobile-links-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-nav-link {
          color: var(--text-cream);
          font-size: 1.05rem;
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          font-weight: 600;
        }

        .mobile-menu-actions {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-lang-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-white);
          font-weight: 600;
          cursor: pointer;
        }

        /* Responsive Breakpoints */
        @media (max-width: 960px) {
          .nav-center-links {
            gap: 18px;
          }
          .nav-link {
            font-size: 0.86rem;
          }
          .nav-cta-btn {
            padding: 8px 16px;
            font-size: 0.82rem;
          }
        }

        @media (max-width: 768px) {
          .navbar-wrapper {
            padding: 0 14px;
          }
          .nav-center-links {
            display: none;
          }
          .nav-cta-btn {
            display: none;
          }
          .mobile-toggle-btn {
            display: inline-flex;
          }
          .mobile-menu-drawer {
            display: block;
          }
          .navbar-container {
            padding: 10px 18px;
          }
          .brand-logo {
            font-size: 1.3rem;
          }
        }

        @keyframes drawerSlideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};
