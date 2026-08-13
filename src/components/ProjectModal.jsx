import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import omniImg from '../assets/omni-retail.jpg';
import nexusImg from '../assets/nexus-pay.jpg';
import vitalImg from '../assets/vitalcore.jpg';
import glowImg from '../assets/glow-campaign.jpg';
import { X, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

const imageMap = {
  'omni-retail': omniImg,
  'nexus-pay': nexusImg,
  'vitalcore': vitalImg,
  'glow-campaign': glowImg
};

export const ProjectModal = ({ project, onClose, onOpenConsultation }) => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const imgSrc = imageMap[project.image] || omniImg;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Image Header */}
        <div className="modal-image-header">
          <img src={imgSrc} alt={project.title} className="modal-header-img" />
          <div className="modal-img-gradient"></div>
          <div className="modal-tag-pill">{project.badge}</div>
        </div>

        {/* Modal Body */}
        <div className="modal-content-body">
          <div className="modal-title-row">
            <div>
              <h2 className="modal-project-title">{project.title}</h2>
              <p className="modal-project-desc">{project.description}</p>
            </div>
            <div className="modal-metric-badge">
              <span className="metric-val">{project.metric}</span>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="modal-meta-grid">
            <div className="meta-cell">
              <span className="meta-label">{t.modal.client}</span>
              <span className="meta-value">{project.details?.client || 'Confidential'}</span>
            </div>
            <div className="meta-cell">
              <span className="meta-label">{t.modal.year}</span>
              <span className="meta-value">{project.details?.year || '2024'}</span>
            </div>
            <div className="meta-cell full-span">
              <span className="meta-label">{t.modal.scope}</span>
              <span className="meta-value">{project.details?.scope || 'Full-Stack'}</span>
            </div>
          </div>

          {/* Details breakdown */}
          <div className="modal-sections-breakdown">
            <div className="detail-section">
              <h4 className="detail-section-title">{t.modal.challenge}</h4>
              <p className="detail-section-text">{project.details?.challenge}</p>
            </div>

            <div className="detail-section">
              <h4 className="detail-section-title text-gradient">{t.modal.solution}</h4>
              <p className="detail-section-text">{project.details?.solution}</p>
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="modal-action-footer">
            <button
              onClick={() => { onClose(); onOpenConsultation(); }}
              className="btn btn-primary w-full"
            >
              <span>{t.hero.btnPrimary}</span>
              {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 7, 14, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.25s ease-out;
        }

        .modal-container {
          background: rgba(14, 21, 37, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          max-width: 680px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(249, 115, 22, 0.15);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 10;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(9, 13, 22, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        [dir="rtl"] .modal-close-btn {
          right: auto;
          left: 16px;
        }

        .modal-close-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: #ef4444;
          color: #ef4444;
        }

        .modal-image-header {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: #000;
        }

        .modal-header-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-img-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(14, 21, 37, 1) 0%, transparent 60%);
        }

        .modal-tag-pill {
          position: absolute;
          bottom: 16px;
          left: 24px;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          background: rgba(13, 19, 34, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
        }
        [dir="rtl"] .modal-tag-pill {
          left: auto;
          right: 24px;
        }

        .modal-content-body {
          padding: 24px 32px 32px;
        }

        .modal-title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 24px;
        }

        .modal-project-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .modal-project-desc {
          font-size: 1rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .modal-metric-badge {
          padding: 10px 18px;
          border-radius: var(--radius-md);
          background: rgba(249, 115, 22, 0.12);
          border: 1px solid rgba(249, 115, 22, 0.3);
          flex-shrink: 0;
        }

        .metric-val {
          font-size: 1.05rem;
          font-weight: 800;
          color: #fb923c;
        }

        .modal-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          margin-bottom: 24px;
        }

        .meta-cell.full-span {
          grid-column: span 2;
        }

        .meta-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .meta-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: #e2e8f0;
        }

        .modal-sections-breakdown {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 30px;
        }

        .detail-section-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .detail-section-text {
          font-size: 0.94rem;
          color: #94a3b8;
          line-height: 1.65;
        }

        .modal-action-footer {
          margin-top: 10px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};
