import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import omniImg from '../assets/omni-retail.jpg';
import nexusImg from '../assets/nexus-pay.jpg';
import vitalImg from '../assets/vitalcore.jpg';
import glowImg from '../assets/glow-campaign.jpg';

const imageMap = {
  'omni-retail': omniImg,
  'nexus-pay': nexusImg,
  'vitalcore': vitalImg,
  'glow-campaign': glowImg
};

export const Portfolio = ({ onSelectProject }) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = t.portfolio.items.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'web') return item.category === 'web';
    if (activeFilter === 'marketing') return item.category === 'marketing';
    if (activeFilter === 'branding') return item.category === 'branding' || item.badge.toLowerCase().includes('brand');
    return true;
  });

  return (
    <section className="portfolio-section" id="portfolio">
      {/* Header */}
      <div className="section-header">
        <h2 className="portfolio-main-title">{t.portfolio.title}</h2>
        <p className="portfolio-main-subtitle">{t.portfolio.subtitle}</p>
      </div>

      {/* Filter Tabs */}
      <div className="portfolio-filters">
        {t.portfolio.filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredItems.map(item => {
          const imgSrc = imageMap[item.image] || omniImg;

          return (
            <div
              key={item.id}
              className="portfolio-card glass-card"
              onClick={() => onSelectProject(item)}
            >
              {/* Card Image Wrapper with Badge */}
              <div className="card-image-container">
                <img
                  src={imgSrc}
                  alt={`${item.title} — ${item.badge} Case Study | DigitalGlow`}
                  className="card-image"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <div className="card-image-overlay"></div>
                <div className="card-tag-badge">
                  <span>{item.badge}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <div className="card-metric-highlight">
                  <span>{item.metric}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .portfolio-section {
          padding: 60px 0 80px;
          position: relative;
        }

        .portfolio-main-title {
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
          text-align: center;
          letter-spacing: -0.02em;
        }

        .portfolio-main-subtitle {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: #9ca3af;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.7;
          text-align: center;
        }

        .portfolio-filters {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 32px 0 40px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 8px 20px;
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-fast);
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(17, 24, 39, 0.6);
          color: #9ca3af;
          font-family: inherit;
        }

        .filter-btn:hover {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(30, 41, 59, 0.7);
        }

        .filter-btn.active {
          background: rgba(26, 35, 54, 0.95);
          border-color: rgba(249, 115, 22, 0.5);
          color: #ffffff;
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.25);
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .portfolio-card {
          border-radius: 22px;
          overflow: hidden;
          background: rgba(14, 21, 37, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.07);
          cursor: pointer;
          transition: all var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }

        .portfolio-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249, 115, 22, 0.4);
          box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(249, 115, 22, 0.15);
        }

        .card-image-container {
          position: relative;
          width: 100%;
          height: 210px;
          overflow: hidden;
          background: #090d16;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .portfolio-card:hover .card-image {
          transform: scale(1.06);
        }

        .card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(14, 21, 37, 0.95) 0%, rgba(14, 21, 37, 0.2) 60%, transparent 100%);
          pointer-events: none;
        }

        .card-tag-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          background: rgba(13, 19, 34, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #e2e8f0;
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        [dir="rtl"] .card-tag-badge {
          right: auto;
          left: 14px;
        }

        .card-body {
          padding: 22px 24px 26px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .card-description {
          font-size: 0.92rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .card-metric-highlight {
          margin-top: auto;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fb923c;
          letter-spacing: -0.01em;
          text-shadow: 0 0 15px rgba(249, 115, 22, 0.3);
        }

        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 680px) {
          .portfolio-section {
            padding: 40px 0 60px;
          }
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .card-image-container {
            height: 190px;
          }
          .card-body {
            padding: 18px 20px 22px;
          }
        }
      `}</style>
    </section>
  );
};
