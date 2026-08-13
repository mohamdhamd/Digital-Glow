import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = ({ onOpenLegal }) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="footer-glass-box">
        {/* Brand Logo - strictly LTR */}
        <div className="footer-brand" dir="ltr">
          <span className="logo-digital">Digital</span>
          <span className="logo-glow">Glow</span>
        </div>

        {/* Legal Links */}
        <div className="footer-links">
          <button
            onClick={() => onOpenLegal('privacy')}
            className="footer-link-btn"
          >
            {t.footer.privacy}
          </button>
          <button
            onClick={() => onOpenLegal('terms')}
            className="footer-link-btn"
          >
            {t.footer.terms}
          </button>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <span>{t.footer.copyright?.replace('{year}', currentYear)}</span>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          padding: 30px 0 45px;
          position: relative;
        }

        .footer-glass-box {
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 32px;
          border-radius: var(--radius-xl);
          background: rgba(14, 21, 37, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .footer-brand {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          direction: ltr !important;
          unicode-bidi: isolate;
          display: inline-flex;
          align-items: center;
        }

        .logo-digital {
          color: #ffffff;
        }

        .logo-glow {
          color: var(--accent-orange);
          background: var(--text-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .footer-link-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          font-size: 0.92rem;
          font-weight: 500;
          cursor: pointer;
          font-family: inherit;
          transition: color var(--transition-fast);
        }

        .footer-link-btn:hover {
          color: #ffffff;
        }

        .footer-copyright {
          font-size: 0.88rem;
          color: #94a3b8;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .footer-glass-box {
            flex-direction: column;
            gap: 16px;
            text-align: center;
            padding: 22px 18px;
            border-radius: 20px;
          }
          .footer-links {
            gap: 18px;
          }
        }
      `}</style>
    </footer>
  );
};
