import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Languages as LanguagesIcon, Check, Minus } from 'lucide-react';

export const Languages: React.FC = () => {
  const { languages } = PORTFOLIO_DATA;

  const capabilities = ['Read', 'Write', 'Speak'] as const;

  return (
    <section id="languages" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            07. Communication & Linguistics
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Languages
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Linguistic abilities for cross-functional collaboration and global teams.
          </p>
        </div>

        {/* 3-in-a-row Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {languages.map((item) => (
            <div
              key={item.language}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900">{item.language}</h3>
                  <span className="text-xs font-medium text-slate-500">{item.proficiencyLevel}</span>
                </div>

                <div className="pt-4 space-y-2.5">
                  {capabilities.map((cap) => {
                    const hasSkill = item.skills.includes(cap);
                    return (
                      <div
                        key={cap}
                        className="flex items-center justify-between text-xs py-1.5 px-3 rounded-md bg-slate-50 border border-slate-100"
                      >
                        <span className="font-medium text-slate-700">{cap}</span>
                        {hasSkill ? (
                          <span className="flex items-center gap-1 font-semibold text-emerald-700">
                            <Check className="w-3.5 h-3.5" />
                            <span>Proficient</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-slate-400">
                            <Minus className="w-3.5 h-3.5" />
                            <span>Not active</span>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 text-center">
                Verified candidate language competency
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
