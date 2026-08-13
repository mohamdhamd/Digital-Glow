import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, Award, DollarSign, Clock, Sparkles } from 'lucide-react';

const statsData = [
  {
    id: 'stat1',
    target: 99.8,
    decimals: 1,
    suffix: '%',
    icon: TrendingUp,
    en: { label: 'Client Satisfaction', desc: 'Across 120+ enterprise deployments' },
    ar: { label: 'نسبة رضا العملاء', desc: 'عبر أكثر من 120 تطبيق مؤسسي' }
  },
  {
    id: 'stat2',
    target: 150,
    decimals: 0,
    prefix: '$',
    suffix: 'M+',
    icon: DollarSign,
    en: { label: 'Capital Generated', desc: 'Direct client revenue & valuation growth' },
    ar: { label: 'عوائد محققة للعملاء', desc: 'نمو مباشر في المبيعات والقيمة السوقية' }
  },
  {
    id: 'stat3',
    target: 45,
    decimals: 0,
    prefix: '+',
    suffix: '',
    icon: Award,
    en: { label: 'Global Industry Awards', desc: 'Recognized for engineering & UI excellence' },
    ar: { label: 'جوائز تميز عالمية', desc: 'في الهندسة البرمجية وتصميم الواجهات' }
  },
  {
    id: 'stat4',
    target: 24,
    decimals: 0,
    suffix: '/7',
    icon: Clock,
    en: { label: 'Telemetry & Strategy', desc: 'Continuous optimization and uptime' },
    ar: { label: 'مراقبة واستراتيجية حية', desc: 'تحسين مستمر وأداء متواصل على مدار الساعة' }
  }
];

export const StatsCounter = () => {
  const { lang } = useLanguage();
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCountAnimation();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCountAnimation = () => {
    const duration = 2000; // ms
    const startTime = performance.now();

    const updateCounts = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      const newCounts = statsData.map((stat) => {
        return parseFloat((stat.target * easeProgress).toFixed(stat.decimals));
      });

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        setCounts(statsData.map((stat) => stat.target));
      }
    };

    requestAnimationFrame(updateCounts);
  };

  return (
    <section className="stats-section" ref={containerRef}>
      <div className="stats-grid">
        {statsData.map((stat, idx) => {
          const IconComp = stat.icon;
          const content = lang === 'ar' ? stat.ar : stat.en;

          return (
            <div 
              key={stat.id} 
              className={`stat-card glass-card ${hasAnimated ? 'animated-in' : ''}`}
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <div className="stat-card-glow"></div>
              
              <div className="stat-top-row">
                <div className="stat-icon-badge">
                  <IconComp size={20} className="stat-icon" />
                </div>
                <div className="stat-live-indicator">
                  <span className="live-dot"></span>
                  <span className="live-text">{lang === 'ar' ? 'مباشر' : 'LIVE'}</span>
                </div>
              </div>

              <div className="stat-value-container" dir="ltr">
                {stat.prefix && <span className="stat-prefix">{stat.prefix}</span>}
                <span className="stat-number">
                  {stat.decimals > 0 
                    ? counts[idx].toFixed(stat.decimals) 
                    : Math.round(counts[idx])}
                </span>
                {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
              </div>

              <h4 className="stat-title">{content.label}</h4>
              <p className="stat-desc">{content.desc}</p>
            </div>
          );
        })}
      </div>

      <style>{`
        .stats-section {
          padding: 20px 0 60px;
          position: relative;
          width: 100%;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
        }

        .stat-card {
          padding: 26px 22px;
          background: rgba(14, 21, 37, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: all var(--transition-smooth);
          opacity: 0;
          transform: translateY(20px);
        }

        .stat-card.animated-in {
          animation: fadeInUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .stat-card-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: rgba(249, 115, 22, 0.4);
          background: rgba(22, 32, 56, 0.85);
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.6), 0 0 25px rgba(249, 115, 22, 0.15);
        }

        .stat-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .stat-icon-badge {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(249, 115, 22, 0.1);
          border: 1px solid rgba(249, 115, 22, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon {
          color: #fb923c;
        }

        .stat-live-indicator {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 8px;
          border-radius: var(--radius-full);
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.25);
        }

        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
          animation: pulse 2s infinite;
        }

        .live-text {
          font-size: 0.68rem;
          font-weight: 700;
          color: #4ade80;
          letter-spacing: 0.5px;
        }

        .stat-value-container {
          display: flex;
          align-items: baseline;
          gap: 2px;
          margin-bottom: 8px;
          direction: ltr !important;
          unicode-bidi: isolate;
        }

        .stat-prefix, .stat-suffix {
          font-size: 1.5rem;
          font-weight: 800;
          color: #fb923c;
        }

        .stat-number {
          font-size: 2.35rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -0.03em;
          text-shadow: 0 0 20px rgba(249, 115, 22, 0.25);
        }

        .stat-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .stat-desc {
          font-size: 0.82rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        @media (max-width: 1080px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 580px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .stat-card {
            padding: 20px 18px;
          }
          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};
