import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Check, Copy, UserCheck, Compass, Lightbulb, Target } from 'lucide-react';

export const About: React.FC = () => {
  const { personal, about } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyBio = () => {
    navigator.clipboard.writeText(about.bio);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            01. Background & Aspirations
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            About Me
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Undergraduate focus, problem-solving orientation, and professional drive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Statement Box */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Professional Profile
              </span>
              <blockquote className="mt-3 text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                "{about.bio}"
              </blockquote>
            </div>

            {/* Core Values & Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                  <Target className="w-3.5 h-3.5 text-slate-700" />
                  <span>Problem Solver</span>
                </div>
                <p className="text-xs text-slate-500 leading-normal">
                  Focused on translating theoretical concepts into robust software logic.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                  <Lightbulb className="w-3.5 h-3.5 text-slate-700" />
                  <span>Applied AI</span>
                </div>
                <p className="text-xs text-slate-500 leading-normal">
                  Hands-on computer vision modeling and intelligent proctoring systems.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                  <Compass className="w-3.5 h-3.5 text-slate-700" />
                  <span>Growth Mindset</span>
                </div>
                <p className="text-xs text-slate-500 leading-normal">
                  Continuous development across Java, databases, and modern UI engineering.
                </p>
              </div>
            </div>

            {/* Quick Action for Placement Evaluators */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <span>Ready for software developer & analyst roles</span>
              <button
                onClick={handleCopyBio}
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 font-medium px-2.5 py-1 rounded-md hover:bg-slate-100 transition-colors"
                title="Copy bio summary"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Summary</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Academic & Profile Overview Table */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-semibold text-slate-900">Placement Key Facts</h3>
              <span className="text-xs text-slate-500">2027 Passing Out</span>
            </div>

            <dl className="divide-y divide-slate-100 text-xs sm:text-sm">
              <div className="py-2.5 flex items-baseline justify-between gap-4">
                <dt className="text-slate-500 font-medium">Full Name</dt>
                <dd className="text-slate-900 font-semibold text-right">{personal.name}</dd>
              </div>
              
              <div className="py-2.5 flex items-baseline justify-between gap-4">
                <dt className="text-slate-500 font-medium">Degree</dt>
                <dd className="text-slate-900 text-right">B.Tech – AI & Data Science</dd>
              </div>

              <div className="py-2.5 flex items-baseline justify-between gap-4">
                <dt className="text-slate-500 font-medium">Institution</dt>
                <dd className="text-slate-900 text-right">Dhanalakshmi Srinivasan University</dd>
              </div>

              <div className="py-2.5 flex items-baseline justify-between gap-4">
                <dt className="text-slate-500 font-medium">Current CGPA</dt>
                <dd className="text-slate-900 font-bold tabular-nums text-right">7.93 / 10</dd>
              </div>

              <div className="py-2.5 flex items-baseline justify-between gap-4">
                <dt className="text-slate-500 font-medium">Intermediate %</dt>
                <dd className="text-slate-900 font-medium tabular-nums text-right">73% (Sri Chaitanya)</dd>
              </div>

              <div className="py-2.5 flex items-baseline justify-between gap-4">
                <dt className="text-slate-500 font-medium">Internship</dt>
                <dd className="text-slate-900 text-right">Jyesta Corporate (NSDC) · Outstanding</dd>
              </div>

              <div className="py-2.5 flex items-baseline justify-between gap-4">
                <dt className="text-slate-500 font-medium">Primary Focus</dt>
                <dd className="text-slate-900 text-right">Software Development & Applied AI</dd>
              </div>
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
};
