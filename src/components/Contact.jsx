import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Share2, 
  Linkedin, 
  Twitter, 
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export const Contact = () => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    serviceNeeded: '',
    projectDetails: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectService = (service) => {
    setFormData(prev => ({ ...prev, serviceNeeded: service }));
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setStatus({
        type: 'error',
        message: t.contact.form.errorMsg
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate smooth API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: t.contact.form.successMsg
      });
      setFormData({
        fullName: '',
        company: '',
        email: '',
        serviceNeeded: '',
        projectDetails: ''
      });

      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 6000);
    }, 800);
  };

  return (
    <section className="contact-section" id="contact">
      {/* Section Title */}
      <div className="section-header">
        <h2 className="contact-main-title">{t.contact.title}</h2>
        <p className="contact-main-subtitle">{t.contact.subtitle}</p>
      </div>

      {/* 2-Column Grid (Map removed, clean streamlined layout) */}
      <div className="contact-layout-grid">
        {/* Left Column: Contact Info Cards & Socials */}
        <div className="contact-info-column">
          <h3 className="contact-info-title">{t.contact.infoTitle}</h3>
          <p className="contact-info-subtitle">{t.contact.infoSubtitle}</p>

          <div className="contact-cards-stack">
            {/* Email Card */}
            <a href={`mailto:${t.contact.emailValue}`} className="contact-method-card glass-card">
              <div className="contact-icon-bubble">
                <Mail size={20} className="contact-bubble-icon" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">{t.contact.emailLabel}</span>
                <span className="contact-card-val" dir="ltr">{t.contact.emailValue}</span>
              </div>
            </a>

            {/* Phone Card */}
            <a href={`tel:${t.contact.phoneValue.replace(/\s+/g, '')}`} className="contact-method-card glass-card">
              <div className="contact-icon-bubble">
                <Phone size={20} className="contact-bubble-icon" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">{t.contact.phoneLabel}</span>
                <span className="contact-card-val" dir="ltr">{t.contact.phoneValue}</span>
              </div>
            </a>

            {/* Location Card (replacing bulky map image with a sleek glass card) */}
            <div className="contact-method-card glass-card">
              <div className="contact-icon-bubble">
                <MapPin size={20} className="contact-bubble-icon" />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">{isRtl ? 'المقر الرئيسي' : 'HEADQUARTERS'}</span>
                <span className="contact-card-val">{t.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Social Icons row */}
          <div className="contact-social-section">
            <span className="social-label">{isRtl ? 'تابعنا على الشبكات' : 'Connect with us'}</span>
            <div className="contact-social-row">
              <a href="https://digitalglow.io" target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="Website">
                <Globe size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-circle-btn" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: 'DigitalGlow', url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert(isRtl ? 'تم نسخ الرابط بنجاح!' : 'Link copied to clipboard!');
                  }
                }}
                className="social-circle-btn"
                aria-label="Share"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="contact-form-column">
          <div className="form-glass-container">
            <form onSubmit={handleSubmit} className="contact-inquiry-form">
              {/* Row 1: Full Name & Company */}
              <div className="form-row-two-col">
                <div className="form-field-group">
                  <label className="field-label">{t.contact.form.fullName}</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t.contact.form.fullNamePlaceholder}
                    className="form-underline-input"
                    required
                  />
                </div>

                <div className="form-field-group">
                  <label className="field-label">{t.contact.form.company}</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t.contact.form.companyPlaceholder}
                    className="form-underline-input"
                  />
                </div>
              </div>

              {/* Row 2: Email Address */}
              <div className="form-field-group">
                <label className="field-label">{t.contact.form.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.form.emailPlaceholder}
                  className="form-underline-input"
                  required
                />
              </div>

              {/* Row 3: Service Needed Dropdown */}
              <div className="form-field-group dropdown-group">
                <label className="field-label">{t.contact.form.serviceNeeded}</label>
                <div
                  className="custom-dropdown-trigger"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span className={formData.serviceNeeded ? 'selected-text' : 'placeholder-text'}>
                    {formData.serviceNeeded || t.contact.form.serviceSelect}
                  </span>
                  <div className="dropdown-double-arrows">
                    <ChevronDown size={14} className={`arrow-1 ${dropdownOpen ? 'rotate' : ''}`} />
                    <ChevronDown size={14} className={`arrow-2 ${dropdownOpen ? 'rotate' : ''}`} />
                  </div>
                </div>

                {dropdownOpen && (
                  <div className="custom-dropdown-menu">
                    {t.contact.form.servicesList.map((srv, idx) => (
                      <div
                        key={idx}
                        className={`dropdown-menu-item ${formData.serviceNeeded === srv ? 'active' : ''}`}
                        onClick={() => handleSelectService(srv)}
                      >
                        {srv}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Row 4: Project Details */}
              <div className="form-field-group">
                <label className="field-label">{t.contact.form.projectDetails}</label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder={t.contact.form.projectDetailsPlaceholder}
                  rows={3}
                  className="form-underline-textarea"
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <div className={`form-status-alert ${status.type}`}>
                  {status.type === 'success' ? (
                    <CheckCircle size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="form-action-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary submit-inquiry-btn"
                >
                  <span>{isSubmitting ? '...' : t.contact.form.submitBtn}</span>
                  <div className="double-arrows">
                    {isRtl ? (
                      <>
                        <ArrowLeft size={16} />
                        <ArrowLeft size={16} style={{ marginInlineStart: '-6px' }} />
                      </>
                    ) : (
                      <>
                        <ArrowRight size={16} />
                        <ArrowRight size={16} style={{ marginInlineStart: '-6px' }} />
                      </>
                    )}
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 60px 0 90px;
          position: relative;
        }

        .contact-main-title {
          font-size: clamp(2.2rem, 5vw, 3.25rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
          text-align: center;
          letter-spacing: -0.025em;
        }

        .contact-main-subtitle {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: #9ca3af;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.7;
          text-align: center;
        }

        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 40px;
          margin-top: 50px;
          align-items: start;
        }

        /* Left Column */
        .contact-info-column {
          display: flex;
          flex-direction: column;
        }

        .contact-info-title {
          font-size: clamp(1.45rem, 3vw, 1.85rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .contact-info-subtitle {
          font-size: 0.95rem;
          color: #94a3b8;
          margin-bottom: 24px;
        }

        .contact-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }

        .contact-method-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          border-radius: var(--radius-lg);
          background: rgba(17, 24, 39, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          text-decoration: none;
          transition: all var(--transition-smooth);
        }

        .contact-method-card:hover {
          border-color: rgba(249, 115, 22, 0.4);
          background: rgba(26, 35, 54, 0.85);
          transform: translateX(4px);
        }
        [dir="rtl"] .contact-method-card:hover {
          transform: translateX(-4px);
        }

        .contact-icon-bubble {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(249, 115, 22, 0.12);
          border: 1px solid rgba(249, 115, 22, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-bubble-icon {
          color: #f97316;
        }

        .contact-card-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow: hidden;
        }

        .contact-card-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .contact-card-val {
          font-size: 0.98rem;
          font-weight: 600;
          color: #ffffff;
          word-break: break-word;
        }

        .contact-social-section {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
        }

        .social-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: #94a3b8;
        }

        .contact-social-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .social-circle-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #cbd5e1;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-decoration: none;
        }

        .social-circle-btn:hover {
          background: rgba(249, 115, 22, 0.18);
          border-color: rgba(249, 115, 22, 0.4);
          color: #fb923c;
          transform: translateY(-2px);
        }

        /* Right Column Form */
        .form-glass-container {
          background: rgba(14, 21, 37, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 36px 32px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }

        .contact-inquiry-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-row-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
        }

        .field-label {
          font-size: 0.85rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        .form-underline-input,
        .form-underline-textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          padding: 8px 0;
          color: #ffffff;
          font-size: 0.98rem;
          font-family: inherit;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .form-underline-textarea {
          resize: vertical;
          min-height: 70px;
        }

        .form-underline-input:focus,
        .form-underline-textarea:focus {
          border-bottom-color: #f97316;
          box-shadow: 0 1px 0 #f97316;
        }

        .form-underline-input::placeholder,
        .form-underline-textarea::placeholder {
          color: #64748b;
          font-size: 0.9rem;
        }

        .custom-dropdown-trigger {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          padding: 8px 0;
          cursor: pointer;
          user-select: none;
          transition: border-color var(--transition-fast);
        }

        .custom-dropdown-trigger:hover {
          border-bottom-color: rgba(255, 255, 255, 0.3);
        }

        .dropdown-double-arrows {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #94a3b8;
        }

        .dropdown-double-arrows .arrow-1 {
          margin-bottom: -6px;
        }

        .dropdown-double-arrows .rotate {
          transform: rotate(180deg);
        }

        .placeholder-text {
          color: #94a3b8;
          font-size: 0.92rem;
        }

        .selected-text {
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 500;
        }

        .custom-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin-top: 6px;
          background: rgba(15, 23, 42, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border-radius: var(--radius-md);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
          z-index: 50;
          max-height: 220px;
          overflow-y: auto;
        }

        .dropdown-menu-item {
          padding: 11px 16px;
          font-size: 0.9rem;
          color: #e2e8f0;
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .dropdown-menu-item:hover,
        .dropdown-menu-item.active {
          background: rgba(249, 115, 22, 0.18);
          color: #fb923c;
        }

        .form-status-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .form-status-alert.success {
          background: rgba(34, 197, 94, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #4ade80;
        }

        .form-status-alert.error {
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #f87171;
        }

        .form-action-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 6px;
        }

        [dir="rtl"] .form-action-row {
          justify-content: flex-start;
        }

        .submit-inquiry-btn {
          padding: 13px 30px;
          font-size: 0.96rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          gap: 10px;
        }

        .double-arrows {
          display: flex;
          align-items: center;
        }

        @media (max-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .form-glass-container {
            padding: 28px 20px;
          }
        }

        @media (max-width: 600px) {
          .contact-section {
            padding: 40px 0 70px;
          }
          .form-row-two-col {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .submit-inquiry-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
