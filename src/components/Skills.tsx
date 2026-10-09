import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Database, Globe, Wrench, Plus, Trash2, Edit3, Check, RotateCcw, AlertCircle, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const { technicalSkills } = PORTFOLIO_DATA;

  // Editable UI/UX skills state persisted in localStorage
  const [uiuxSkills, setUiuxSkills] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('hema_uiux_skills');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isAdding, setIsAdding] = useState(false);
  const [newSkillInput, setNewSkillInput] = useState('');
  const [saveFeedback, setSaveFeedback] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('hema_uiux_skills', JSON.stringify(uiuxSkills));
    } catch (e) {
      console.error(e);
    }
  }, [uiuxSkills]);

  const handleAddSkill = (skillName: string) => {
    const trimmed = skillName.trim();
    if (!trimmed) return;
    if (uiuxSkills.includes(trimmed)) return;
    setUiuxSkills([...uiuxSkills, trimmed]);
    setNewSkillInput('');
    setIsAdding(false);
    triggerSaveFeedback();
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setUiuxSkills(uiuxSkills.filter((s) => s !== skillToRemove));
    triggerSaveFeedback();
  };

  const handleResetUiUx = () => {
    if (window.confirm('Reset UI/UX skills list?')) {
      setUiuxSkills([]);
      triggerSaveFeedback();
    }
  };

  const triggerSaveFeedback = () => {
    setSaveFeedback(true);
    setTimeout(() => setSaveFeedback(false), 2000);
  };

  // Quick suggestions for Hema when she starts learning
  const suggestions = [
    'Figma',
    'Adobe XD',
    'Framer',
    'Wireframing',
    'Interactive Prototyping',
    'User Research',
    'Information Architecture',
    'Design Systems'
  ];

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-slate-700" />;
      case 1:
        return <Globe className="w-4 h-4 text-slate-700" />;
      case 2:
        return <Database className="w-4 h-4 text-slate-700" />;
      case 3:
        return <Wrench className="w-4 h-4 text-slate-700" />;
      default:
        return <Code2 className="w-4 h-4 text-slate-700" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            03. Competencies & Tools
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Technical & Design Skills
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Programming languages, databases, computer science fundamentals, and an editable UI/UX design skillset.
          </p>
        </div>

        {/* Technical Skills Categorized Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkills.map((category, catIdx) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  {getCategoryIcon(catIdx)}
                  <h3 className="text-sm font-bold text-slate-900">{category.title}</h3>
                </div>
                <p className="text-xs text-slate-500 mt-2 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between py-1.5 px-2.5 rounded-md bg-slate-50 text-xs border border-slate-150"
                    >
                      <span className="font-semibold text-slate-800">{skill.name}</span>
                      {skill.level && (
                        <span className="text-[11px] text-slate-500 font-medium">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editable UI/UX Skills Section */}
        <div className="mt-10 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900">
                  UI/UX & Design Skills
                </h3>
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded px-2 py-0.5">
                  Editable Section
                </span>
                {saveFeedback && (
                  <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                    <Check className="w-3 h-3" /> Saved
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
                Notice: Software like Figma, Adobe XD, Photoshop, Illustrator, and Framer are not claimed by default.
                As you learn and practice UI/UX tools, use the controls below to add them to your portfolio.
              </p>
            </div>

            <div className="flex items-center gap-2">
              {uiuxSkills.length > 0 && (
                <button
                  onClick={handleResetUiUx}
                  className="text-xs text-slate-500 hover:text-red-600 px-2.5 py-1.5 rounded transition-colors flex items-center gap-1"
                  title="Reset UI/UX skills"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
              <button
                onClick={() => setIsAdding(!isAdding)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{isAdding ? 'Close Input' : 'Add Design Skill'}</span>
              </button>
            </div>
          </div>

          {/* Add Skill Input Form */}
          {isAdding && (
            <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-xs font-semibold text-slate-700">Add a new UI/UX Tool or Skill:</div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkillInput}
                  onChange={(e) => setNewSkillInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSkill(newSkillInput);
                    }
                  }}
                  placeholder="e.g. Figma, Framer, Wireframing, Adobe XD..."
                  className="flex-1 px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-md focus:outline-hidden focus:ring-1 focus:ring-slate-900"
                />
                <button
                  onClick={() => handleAddSkill(newSkillInput)}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition-colors"
                >
                  Save Skill
                </button>
              </div>

              {/* Suggestions */}
              <div>
                <span className="text-[11px] font-medium text-slate-500 mr-2">Quick Add Suggestions:</span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {suggestions.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleAddSkill(item)}
                      disabled={uiuxSkills.includes(item)}
                      className={`text-[11px] px-2 py-0.5 rounded border transition-colors ${
                        uiuxSkills.includes(item)
                          ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-400'
                      }`}
                    >
                      + {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Render Active UI/UX Skills */}
          <div className="mt-6">
            {uiuxSkills.length === 0 ? (
              <div className="p-6 rounded-lg border border-dashed border-slate-300 text-center space-y-2 bg-slate-50/50">
                <div className="text-xs font-medium text-slate-600">
                  No UI/UX tools currently listed
                </div>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Per portfolio guidelines, external tools are not assumed without training.
                  Hema can click <strong>"Add Design Skill"</strong> above or select quick suggestions to showcase newly mastered design software.
                </p>
                <div className="pt-2 flex justify-center gap-2 flex-wrap">
                  {suggestions.slice(0, 4).map((item) => (
                    <button
                      key={item}
                      onClick={() => handleAddSkill(item)}
                      className="text-xs px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 hover:border-slate-400"
                    >
                      Add {item}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2.5">
                {uiuxSkills.map((skill) => (
                  <div
                    key={skill}
                    className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <span>{skill}</span>
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-slate-400 hover:text-red-600 transition-colors p-0.5"
                      title={`Remove ${skill}`}
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
