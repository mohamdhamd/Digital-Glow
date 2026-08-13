import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, Shield, FileText } from 'lucide-react';

export const LegalModal = ({ type, onClose }) => {
  const { lang } = useLanguage();
  const isRtl = lang === 'ar';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="legal-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="legal-header">
          <div className="legal-icon-badge">
            {isPrivacy ? <Shield size={22} className="text-amber" /> : <FileText size={22} className="text-amber" />}
          </div>
          <h3 className="legal-title">
            {isPrivacy 
              ? (isRtl ? 'سياسة الخصوصية' : 'Privacy Policy') 
              : (isRtl ? 'شروط الخدمة' : 'Terms of Service')}
          </h3>
          <span className="legal-date">
            {isRtl ? 'آخر تحديث: يناير 2024' : 'Last Updated: January 2024'}
          </span>
        </div>

        <div className="legal-body">
          {isPrivacy ? (
            isRtl ? (
              <>
                <h4>1. جمع المعلومات</h4>
                <p>نحن في DigitalGlow نلتزم بحماية خصوصيتك وبياناتك الرقمية. نجمع المعلومات الضرورية فقط لتقديم وتطوير حلولنا البرمجية والتسويقية.</p>
                <h4>2. استخدام البيانات</h4>
                <p>تُستخدم بياناتك للتواصل معك بشأن الاستشارات والمشاريع البرمجية والحملات التسويقية التي تطلبها، ولا نشارك بياناتك مع أي طرف ثالث تجاري إطلاقاً.</p>
                <h4>3. أمن البيانات</h4>
                <p>نطبق أعلى معايير التشفير والحماية المصرفية لضمان سلامة بياناتك وسريتها الكاملة وفق الأنظمة والقوانين المعمول بها.</p>
              </>
            ) : (
              <>
                <h4>1. Information Collection</h4>
                <p>At DigitalGlow, we are dedicated to protecting your digital privacy. We collect only necessary details required to deliver and optimize our engineering and marketing solutions.</p>
                <h4>2. Data Utilization</h4>
                <p>Your information is used strictly to consult, coordinate, and execute project deliverables. We never sell or share data with non-affiliated third parties.</p>
                <h4>3. Enterprise Security</h4>
                <p>We deploy bank-grade encryption protocols and modern access controls to ensure your project telemetry and personal data remains strictly confidential.</p>
              </>
            )
          ) : (
            isRtl ? (
              <>
                <h4>1. شروط الاستخدام والاتفاقية</h4>
                <p>باستخدامك لموقع وخدمات DigitalGlow، فإنك توافق على الالتزام بكافة الشروط والأحكام الموضحة هنا وتقديم المعلومات الصحيحة لإنجاز مشاريعك.</p>
                <h4>2. الملكية الفكرية</h4>
                <p>جميع حقوق التصاميم والأنظمة البرمجية والمحتوى المعروض تعود ملكيتها لـ DigitalGlow أو شركائها وفق العقود المبرمة.</p>
                <h4>3. الالتزام بجودة التنفيذ</h4>
                <p>نحن نلتزم بتقديم أعلى معايير الجودة الهندسية والإبداعية المتفق عليها في مذكرات التفاهم ونطاقات العمل المعتمدة.</p>
              </>
            ) : (
              <>
                <h4>1. Acceptance of Terms</h4>
                <p>By engaging DigitalGlow and accessing our digital properties, you agree to comply with our professional engagement guidelines and transparent collaboration frameworks.</p>
                <h4>2. Intellectual Property</h4>
                <p>All bespoke codebases, branding elements, and engineered systems developed remain protected under respective contractual master services agreements.</p>
                <h4>3. Service Level Commitments</h4>
                <p>We deliver mission-critical architectures aligned with industry benchmarks and client-approved scopes of work.</p>
              </>
            )
          )}
        </div>

        <div className="legal-footer">
          <button onClick={onClose} className="btn btn-secondary w-full">
            <span>{isRtl ? 'إغلاق' : 'Close'}</span>
          </button>
        </div>
      </div>

      <style>{`
        .legal-modal-card {
          background: rgba(14, 21, 37, 0.96);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          max-width: 600px;
          width: 100%;
          padding: 36px;
          position: relative;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .legal-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 24px;
        }

        .legal-icon-badge {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .legal-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .legal-date {
          font-size: 0.82rem;
          color: #64748b;
        }

        .legal-body {
          max-height: 320px;
          overflow-y: auto;
          padding: 10px 4px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }

        .legal-body h4 {
          font-size: 1rem;
          font-weight: 700;
          color: #f1f5f9;
        }

        .legal-body p {
          font-size: 0.92rem;
          color: #94a3b8;
          line-height: 1.65;
        }
      `}</style>
    </div>
  );
};
