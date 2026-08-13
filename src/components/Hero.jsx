import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export const Hero = ({ onOpenConsultation }) => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 85;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section" id="about">
      {/* Background Radial Glow */}
      <div className="hero-ambient-glow" aria-hidden="true"></div>

      <div className="hero-content">
        {/* Top Tag Pill with glowing animation */}
        <div className="hero-badge animate-fade-in">
          <Sparkles size={14} className="hero-badge-sparkle text-amber" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Main Title with animated reveal */}
        <h1 className="hero-title animate-fade-in">
          <span className="hero-title-white">{t.hero.titleLine1}</span>
          <span className="hero-title-gradient animate-glow">{t.hero.titleLine2}</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle animate-fade-in-delayed">
          {t.hero.subtitle}
        </p>

        {/* Dual CTA Buttons */}
        <div className="hero-cta-group animate-fade-in-delayed">
          <a
            href="#contact"
            className="btn btn-primary hero-btn-main"
            onClick={(e) => handleScrollTo(e, 'contact')}
          >
            <span>{t.hero.btnPrimary}</span>
            {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </a>

          <a
            href="#portfolio"
            className="btn btn-secondary hero-btn-secondary"
            onClick={(e) => handleScrollTo(e, 'portfolio')}
          >
            <span>{t.hero.btnSecondary}</span>
          </a>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px 12px 60px;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }

        .hero-ambient-glow {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(550px, 85vw);
          height: 280px;
          background: radial-gradient(ellipse at center, rgba(249, 115, 22, 0.18) 0%, rgba(245, 158, 11, 0.04) 50%, transparent 75%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          border-radius: var(--radius-full);
          background: rgba(17, 24, 39, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          color: #e2e8f0;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          margin-bottom: 22px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          transition: all var(--transition-fast);
        }

        .hero-badge:hover {
          border-color: rgba(249, 115, 22, 0.4);
          transform: translateY(-2px);
        }

        .hero-title {
          font-size: clamp(2.2rem, 6.5vw, 4.5rem);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .hero-title-white {
          color: #ffffff;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
          margin-bottom: 4px;
        }

        .hero-title-gradient {
          background: linear-gradient(135deg, #fb923c 0%, #f97316 45%, #ea580c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 35px rgba(249, 115, 22, 0.35));
        }

        .hero-subtitle {
          font-size: clamp(0.95rem, 2.2vw, 1.18rem);
          color: #94a3b8;
          max-width: 660px;
          line-height: 1.7;
          margin-bottom: 32px;
          font-weight: 400;
          padding: 0 8px;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          width: 100%;
          max-width: 460px;
        }

        .hero-btn-main {
          padding: 13px 30px;
          font-size: 0.98rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          box-shadow: 0 8px 30px rgba(249, 115, 22, 0.4);
          flex: 1 1 190px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .hero-btn-secondary {
          padding: 13px 28px;
          font-size: 0.98rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          background: rgba(22, 30, 49, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.12);
          flex: 1 1 190px;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 24px 8px 50px;
          }
          .hero-badge {
            font-size: 0.78rem;
            padding: 5px 14px;
            margin-bottom: 16px;
          }
          .hero-title {
            font-size: clamp(2rem, 8vw, 3rem);
          }
          .hero-subtitle {
            margin-bottom: 24px;
            font-size: 0.95rem;
          }
          .hero-cta-group {
            flex-direction: column;
            gap: 10px;
            width: 100%;
          }
          .hero-btn-main,
          .hero-btn-secondary {
            width: 100%;
            flex: none;
            padding: 12px 18px;
          }
        }
      `}</style>
    </section>
  );
};
