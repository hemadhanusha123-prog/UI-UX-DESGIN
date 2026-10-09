import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Internship } from './components/Internship';
import { FeaturedProject } from './components/FeaturedProject';
import { Certifications } from './components/Certifications';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { RecruiterSheetModal } from './components/RecruiterSheetModal';
import { GithubModal } from './components/GithubModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [isGithubModalOpen, setIsGithubModalOpen] = useState(false);

  // GitHub URL state stored in localStorage
  const [customGithub, setCustomGithub] = useState<string>(() => {
    try {
      return localStorage.getItem('hema_github_url') || '';
    } catch {
      return '';
    }
  });

  const handleSaveGithub = (url: string) => {
    setCustomGithub(url);
    try {
      localStorage.setItem('hema_github_url', url);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenRecruiterModal={() => setIsRecruiterModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          customGithub={customGithub}
          onEditGithub={() => setIsGithubModalOpen(true)}
        />

        {/* 1. About Me */}
        <About />

        {/* 2. Education */}
        <Education />

        {/* 3. Technical Skills + Editable UI/UX Section */}
        <Skills />

        {/* 4. Internship */}
        <Internship />

        {/* 5. Featured Project */}
        <FeaturedProject />

        {/* 6. Certifications */}
        <Certifications />

        {/* 7. Languages */}
        <Languages />

        {/* 8. Contact */}
        <Contact
          customGithub={customGithub}
          onEditGithub={() => setIsGithubModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        customGithub={customGithub}
        onEditGithub={() => setIsGithubModalOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onPrintPlacementSheet={() => setIsRecruiterModalOpen(true)}
      />

      <RecruiterSheetModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />

      <GithubModal
        isOpen={isGithubModalOpen}
        onClose={() => setIsGithubModalOpen(false)}
        currentGithub={customGithub}
        onSaveGithub={handleSaveGithub}
      />
    </div>
  );
}
