import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  customGithub: string;
  onEditGithub: () => void;
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  customGithub,
  onEditGithub,
  onOpenResumeModal
}) => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="text-base font-bold text-white tracking-tight">
              {personal.name}
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              {personal.role} · Dhanalakshmi Srinivasan University
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#project" className="hover:text-white transition-colors">Project</a>
            <a href="#internship" className="hover:text-white transition-colors">Internship</a>
            <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button
              onClick={onOpenResumeModal}
              className="text-white hover:underline transition-colors font-semibold"
            >
              Resume
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

        {/* Bottom Metadata & Unboxed Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Gummireddy Hema Dhanusha. Crafted for Campus Placements.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-slate-300 transition-colors"
            >
              {personal.email}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="hover:text-slate-300 transition-colors tabular-nums"
            >
              {personal.phoneDisplay}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={onEditGithub}
              className="hover:text-slate-300 transition-colors underline underline-offset-2"
            >
              {customGithub ? 'GitHub' : 'Add GitHub'}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
