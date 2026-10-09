import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            02. Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Formal engineering and higher secondary academic credentials.
          </p>
        </div>

        {/* Education Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, idx) => (
            <div
              key={item.institution}
              className="relative bg-slate-50/70 p-6 sm:p-8 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Top Level Unboxed Metadata */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.duration}</span>
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {item.institution}
                </p>

                {/* Highlights / Coursework */}
                {item.details && (
                  <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-600">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">▪</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Score Highlight with Tabular Numerals */}
              <div className="mt-8 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <span className="text-xs uppercase font-medium tracking-wider text-slate-500">
                  Academic Performance
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs font-medium text-slate-500">{item.scoreLabel}:</span>
                  <span className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
                    {item.scoreValue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Notes for Placement Drives */}
        <div className="mt-8 p-4 rounded-lg bg-slate-100/70 border border-slate-200/80 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            <span>All academic transcripts and mark sheets verified for campus placement rounds.</span>
          </div>
          <span className="font-medium text-slate-800">Department of AI & Data Science</span>
        </div>

      </div>
    </section>
  );
};
