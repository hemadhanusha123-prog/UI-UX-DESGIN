import React from 'react';
import { Download, ArrowDown, Mail, Phone, Linkedin, ExternalLink, Sparkles, GraduationCap, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
  customGithub: string;
  onEditGithub: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResumeModal,
  customGithub,
  onEditGithub
}) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Intent */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status kicker without pill styling */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-800 font-semibold">{personal.status}</span>
              <span aria-hidden="true">·</span>
              <span>Batch {personal.batch}</span>
            </div>

            {/* Candidate Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                {personal.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-slate-700">
                {personal.role}
              </p>
            </div>

            {/* Placement Brief */}
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              Artificial Intelligence and Data Science undergraduate at Dhanalakshmi Srinivasan University (CGPA 7.93).
              Passionate about applying machine learning concepts, computer vision, and structured software development
              to build real-world systems.
            </p>

            {/* Quick Placement Highlights (Unboxed metadata) */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600">
              <span className="flex items-center gap-1.5 font-medium text-slate-900">
                <GraduationCap className="w-4 h-4 text-slate-500" />
                B.Tech AI & DS · CGPA 7.93
              </span>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <span className="flex items-center gap-1.5 font-medium text-slate-900">
                <Award className="w-4 h-4 text-slate-500" />
                AI Intern @ Jyesta (NSDC) · Outstanding
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 active:bg-slate-950 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
              
              <a
                href="#project"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <span>View Featured Project</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Unboxed Metadata Footer with Links */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personal.email}</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-slate-900 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{personal.phoneDisplay}</span>
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 transition-colors font-medium text-slate-700"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <span aria-hidden="true">·</span>
              <button
                onClick={onEditGithub}
                className="flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors underline underline-offset-2"
                title="Click to add or edit GitHub URL"
              >
                {customGithub ? 'GitHub Profile' : '+ Add GitHub link'}
              </button>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Verified Credentials Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer clean frame */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/90 shadow-sm aspect-4/5 sm:aspect-square flex items-center justify-center">
                <img
                  src={personal.avatarImage}
                  alt="Gummireddy Hema Dhanusha"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Styled CSS fallback container
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Fallback container if image cannot load */}
                <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-100 to-slate-200">
                  <div className="w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl font-bold mb-3">
                    GHD
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{personal.name}</h3>
                  <p className="text-xs text-slate-600 mt-1">{personal.role}</p>
                </div>

                {/* Quiet bottom overlay highlight for credential proof */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 sm:p-5 text-white">
                  <div className="text-xs font-semibold tracking-wide uppercase text-slate-300">
                    B.Tech AI & Data Science
                  </div>
                  <div className="text-sm font-medium text-slate-100 mt-0.5">
                    Dhanalakshmi Srinivasan University
                  </div>
                  <div className="mt-1 flex items-center gap-3 text-xs text-slate-300">
                    <span>CGPA: 7.93</span>
                    <span aria-hidden="true">·</span>
                    <span>Tiruchirapalli, TN</span>
                  </div>
                </div>
              </div>

              {/* Floating Verified Tag */}
              <div className="absolute -bottom-3 right-4 bg-white border border-slate-200 shadow-md rounded-lg py-1.5 px-3 flex items-center gap-2 text-xs font-medium text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Placement Ready</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
