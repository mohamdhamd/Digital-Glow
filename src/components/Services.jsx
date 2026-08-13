import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Search, 
  Code2, 
  ShieldCheck, 
  Palette, 
  TrendingUp, 
  Cpu, 
  Check 
} from 'lucide-react';

const iconMap = {
  Search,
  Code2,
  ShieldCheck,
  Palette,
  TrendingUp,
  Cpu
};

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section className="services-section" id="services">
      {/* Header */}
      <div className="section-header">
        <h2 className="services-main-title">{t.services.title}</h2>
        <p className="services-main-subtitle">{t.services.subtitle}</p>
      </div>

      {/* Grid of Service Cards */}
      <div className="services-grid">
        {t.services.items.map((item, idx) => {
          const IconComponent = iconMap[item.icon] || Search;

          return (
            <div 
              key={item.id} 
              className="service-card glass-card"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {/* Top Icon Badge */}
              <div className="service-icon-wrapper">
                <IconComponent className="service-icon" size={22} />
              </div>

              {/* Title */}
              <h3 className="service-card-title">{item.title}</h3>

              {/* Description */}
              <p className="service-card-desc">{item.description}</p>

              {/* Checklist items */}
              <div className="service-features-list">
                {item.features.map((feat, fIdx) => (
                  <div key={fIdx} className="service-feature-item">
                    <span className="feature-check-icon">
                      <Check size={16} strokeWidth={2.5} />
                    </span>
                    <span className="feature-text">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .services-section {
          padding: 50px 0 80px;
          position: relative;
          width: 100%;
          box-sizing: border-box;
        }

        .services-main-title {
          font-size: clamp(2rem, 4.5vw, 2.75rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
          text-align: center;
          letter-spacing: -0.02em;
        }

        .services-main-subtitle {
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          color: #9ca3af;
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.7;
          text-align: center;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
          width: 100%;
          box-sizing: border-box;
        }

        .service-card {
          padding: 30px 26px;
          background: rgba(14, 21, 37, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        [dir="rtl"] .service-card {
          align-items: flex-start;
          text-align: right;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.35), transparent);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249, 115, 22, 0.4);
          box-shadow: 0 18px 45px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(249, 115, 22, 0.15);
          background: rgba(20, 30, 54, 0.88);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: all 0.35s ease;
        }

        .service-card:hover .service-icon-wrapper {
          background: rgba(249, 115, 22, 0.18);
          border-color: rgba(249, 115, 22, 0.45);
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.35);
        }

        .service-icon {
          color: #fb923c;
        }

        .service-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .service-card-desc {
          font-size: 0.92rem;
          color: #94a3b8;
          line-height: 1.65;
          margin-bottom: 22px;
        }

        .service-features-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
          margin-top: auto;
        }

        .service-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: #e2e8f0;
        }

        .feature-check-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f97316;
          flex-shrink: 0;
        }

        .feature-text {
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }

        @media (max-width: 680px) {
          .services-section {
            padding: 36px 0 50px;
          }
          .services-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 28px;
          }
          .service-card {
            padding: 22px 18px;
          }
          .service-icon-wrapper {
            margin-bottom: 14px;
          }
        }
      `}</style>
    </section>
  );
};
