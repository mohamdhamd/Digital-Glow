import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { ar } from '../translations/ar';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('dg_lang') || 'en';
  });

  const t = lang === 'ar' ? ar : en;

  useEffect(() => {
    localStorage.setItem('dg_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (lang === 'ar') {
      document.title = "ديجيتال جلو — وكالة الخيمياء الرقمية | هندسة برمجية وتسويق متقدم";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'ندمج بين دقة الهندسة البرمجية والتسويق عالي التأثير لابتكار تجارب رقمية متوهجة ومبنية على البيانات للعلامات التجارية الرائدة.');
      }
    } else {
      document.title = "DigitalGlow — Digital Alchemy Agency | High-Impact Web & Marketing";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'DigitalGlow bridges software engineering precision with high-impact marketing, custom web development, SEO, and AI data systems for forward-thinking brands.');
      }
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
