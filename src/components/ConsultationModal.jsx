import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

export const ConsultationModal = ({ isOpen, onClose }) => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '$25k - $50k',
    date: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="consult-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="consult-success-state">
            <div className="success-icon-badge">
              <CheckCircle2 size={48} className="text-amber" />
            </div>
            <h3 className="success-title">{isRtl ? 'تم تأكيد موعدك!' : 'Session Confirmed!'}</h3>
            <p className="success-desc">{t.modal.bookSuccess}</p>
          </div>
        ) : (
          <div className="consult-content-body">
            <div className="consult-header">
              <div className="consult-tag">
                <Sparkles size={14} className="text-amber" />
                <span>{isRtl ? 'استشارة استراتيجية' : 'Strategy Session'}</span>
              </div>
              <h3 className="consult-title">{t.modal.consultationTitle}</h3>
              <p className="consult-subtitle">{t.modal.consultationSubtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="consult-form">
              <div className="form-field-group">
                <label className="field-label">{t.modal.name}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-underline-input"
                  placeholder={isRtl ? 'اسمك الكريم' : 'Your Name'}
                />
              </div>

              <div className="form-row-two-col">
                <div className="form-field-group">
                  <label className="field-label">{t.modal.email}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-underline-input"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="form-field-group">
                  <label className="field-label">{t.modal.phone}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-underline-input"
                    placeholder="+971 ..."
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label className="field-label">{t.modal.budget}</label>
                <div className="budget-chips-group">
                  {t.modal.budgetOptions.map((opt, idx) => (
                    <button
                      type="button"
                      key={idx}
                      className={`budget-chip ${formData.budget === opt ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, budget: opt })}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-field-group">
                <label className="field-label">{isRtl ? 'ملاحظات إضافية' : 'Any specific focus area?'}</label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="form-underline-input"
                  placeholder={isRtl ? 'مثال: إعادة تصميم المنصة وتوسيع المبيعات...' : 'e.g. Platform redesign & scaling...'}
                />
              </div>

              <button type="submit" className="btn btn-primary w-full consult-submit-btn">
                <span>{t.modal.bookBtn}</span>
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        .consult-modal-card {
          background: rgba(14, 21, 37, 0.96);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          max-width: 580px;
          width: 100%;
          padding: 40px;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(249, 115, 22, 0.15);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .consult-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 14px;
          border-radius: var(--radius-full);
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.3);
          font-size: 0.78rem;
          font-weight: 600;
          color: #fb923c;
          margin-bottom: 14px;
        }

        .consult-title {
          font-size: 1.65rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .consult-subtitle {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.5;
          margin-bottom: 28px;
        }

        .consult-form {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .budget-chips-group {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 6px;
        }

        .budget-chip {
          padding: 8px 14px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-family: inherit;
        }

        .budget-chip:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .budget-chip.active {
          background: rgba(249, 115, 22, 0.15);
          border-color: #f97316;
          color: #fb923c;
          font-weight: 600;
        }

        .consult-submit-btn {
          margin-top: 10px;
          padding: 14px;
        }

        .consult-success-state {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .success-icon-badge {
          margin-bottom: 20px;
          filter: drop-shadow(0 0 15px rgba(249, 115, 22, 0.5));
        }

        .success-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .success-desc {
          font-size: 1rem;
          color: #94a3b8;
          max-width: 400px;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};
