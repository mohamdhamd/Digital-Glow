import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles } from 'lucide-react';

export const Process = () => {
  const { t } = useLanguage();

  return (
    <section className="process-section" id="process">
      {/* Header */}
      <div className="section-header">
        <div className="section-tag">
          <Sparkles size={14} className="text-amber" />
          <span>{t.process.badge}</span>
        </div>
        <h2 className="process-main-title">{t.process.title}</h2>
        <p className="process-main-subtitle">{t.process.subtitle}</p>
      </div>

      {/* Steps Timeline Grid */}
      <div className="process-steps-grid">
        {t.process.steps.map((step, idx) => (
          <div 
            key={idx} 
            className="process-step-card glass-card"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="step-number-badge">
              <span>{step.num}</span>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        .process-section {
          padding: 50px 0 80px;
          position: relative;
          width: 100%;
          box-sizing: border-box;
        }

        .process-main-title {
          font-size: clamp(2rem, 4.5vw, 2.75rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
          text-align: center;
          letter-spacing: -0.02em;
        }

        .process-main-subtitle {
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
          text-align: center;
        }

        .process-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 40px;
          position: relative;
          width: 100%;
          box-sizing: border-box;
        }

        .process-step-card {
          padding: 30px 22px;
          background: rgba(14, 21, 37, 0.7);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
        }

        .process-step-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249, 115, 22, 0.4);
          box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.6), 0 0 25px rgba(249, 115, 22, 0.15);
          background: rgba(20, 30, 54, 0.88);
        }

        .step-number-badge {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(249, 115, 22, 0.12);
          border: 1px solid rgba(249, 115, 22, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 800;
          color: #fb923c;
          margin-bottom: 18px;
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.15);
        }

        .step-title {
          font-size: 1.18rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          line-height: 1.35;
        }

        .step-desc {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.65;
        }

        @media (max-width: 1024px) {
          .process-steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 640px) {
          .process-section {
            padding: 36px 0 50px;
          }
          .process-steps-grid {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-top: 28px;
          }
          .process-step-card {
            padding: 22px 18px;
          }
        }
      `}</style>
    </section>
  );
};
