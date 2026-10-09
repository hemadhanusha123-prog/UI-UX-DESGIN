import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Award, Building2, Sparkles, ShieldCheck } from 'lucide-react';

export const Internship: React.FC = () => {
  const { internship } = PORTFOLIO_DATA;

  return (
    <section id="internship" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            04. Practical Training & Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Internship
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Corporate industry internship and applied artificial intelligence training.
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-slate-50/70 rounded-xl border border-slate-200 p-6 sm:p-8 hover:border-slate-300 transition-colors">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-200">
            
            {/* Role & Company */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="flex items-center gap-1 font-medium text-slate-700">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{internship.company}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>{internship.affiliation}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {internship.role}
              </h3>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{internship.period}</span>
                <span aria-hidden="true">·</span>
                <span>Duration: {internship.duration}</span>
              </div>
            </div>

            {/* Performance Remarks Badge */}
            <div className="flex flex-col sm:items-end justify-start">
              <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-1">
                Performance Evaluation
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Remarks: {internship.remarks}</span>
              </div>
            </div>
          </div>

          {/* Description & Concrete Learnings */}
          <div className="mt-6 space-y-4">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {internship.description}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Key Contributions & Practical Takeaways
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {internship.keyLearnings.map((learning, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{learning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Verification note */}
          <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
            <span>Corporate training accredited under NSDC skill frameworks</span>
            <span className="font-mono text-[11px] text-slate-600">Internship Completion: Feb 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
};
