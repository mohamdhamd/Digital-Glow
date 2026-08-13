import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal } from './components/LegalModal';

function AppContent() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState(null);

  return (
    <div className="app-layout">
      {/* Background Ambient Glows */}
      <div className="ambient-glow-wrapper" aria-hidden="true">
        <div className="ambient-glow ambient-glow-top"></div>
        <div className="ambient-glow ambient-glow-middle"></div>
        <div className="ambient-glow ambient-glow-bottom"></div>
      </div>

      {/* Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Sections */}
      <main className="app-container">
        <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />
        <StatsCounter />
        <Services />
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />
        <Process />
        <Contact />
      </main>

      {/* Footer */}
      <div className="app-container">
        <Footer onOpenLegal={(type) => setLegalModalType(type)} />
      </div>

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      )}

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
