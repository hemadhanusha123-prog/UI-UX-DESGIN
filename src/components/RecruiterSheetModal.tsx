import React from 'react';
import { X, Printer, Download, Mail, Phone, Linkedin, CheckCircle2, GraduationCap, Award, Briefcase, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface RecruiterSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterSheetModal: React.FC<RecruiterSheetModalProps> = ({ isOpen, onClose }) => {
  const { personal, education, internship, featuredProject, certifications, languages, technicalSkills } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-10 my-8 space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Header Controls (Hidden during print) */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 no-print">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-slate-900 text-white px-2 py-0.5 rounded">
              Placement Drive Profile
            </span>
            <span className="text-xs text-slate-500">Official Candidate Summary</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Official Printable Resume / Placement Document Area */}
        <div className="print-content space-y-6 text-slate-900 font-sans">
          
          {/* Header Block */}
          <div className="border-b-2 border-slate-900 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {personal.name}
            </h1>
            <p className="text-sm font-semibold text-slate-700 mt-1">
              B.Tech in Artificial Intelligence & Data Science | UI/UX Designer
            </p>
            
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
              <span className="font-semibold text-slate-900">{personal.phone}</span>
              <span aria-hidden="true">·</span>
              <span>{personal.email}</span>
              <span aria-hidden="true">·</span>
              <span>{personal.linkedin}</span>
              <span aria-hidden="true">·</span>
              <span>Tiruchirapalli / Tirupati, India</span>
            </div>
          </div>

          {/* Education Block */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Education
            </h2>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-slate-900">Dhanalakshmi Srinivasan University</span>, Tiruchirapalli
                  <div className="text-slate-600">B.Tech – Artificial Intelligence and Data Science</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-900 tabular-nums">CGPA: 7.93 / 10</div>
                  <div className="text-slate-500">2023 – 2027</div>
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-1">
                <div>
                  <span className="font-bold text-slate-900">Sri Chaitanya Junior College</span>, Tirupati
                  <div className="text-slate-600">Intermediate (MPC)</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-900 tabular-nums">Score: 73%</div>
                  <div className="text-slate-500">2021 – 2023</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Block */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-bold text-slate-800">Programming:</span>{' '}
                <span className="text-slate-700">Java, Python (Basics), Data Structures (Basics), Fundamentals</span>
              </div>
              <div>
                <span className="font-bold text-slate-800">Web & Markup:</span>{' '}
                <span className="text-slate-700">HTML, CSS, JavaScript</span>
              </div>
              <div>
                <span className="font-bold text-slate-800">Databases:</span>{' '}
                <span className="text-slate-700">SQL, DBMS, MySQL, MongoDB</span>
              </div>
              <div>
                <span className="font-bold text-slate-800">Developer Tools:</span>{' '}
                <span className="text-slate-700">Git, VS Code, Microsoft PowerPoint</span>
              </div>
            </div>
          </div>

          {/* Work / Internship Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Internship Experience
            </h2>
            <div className="text-xs space-y-1.5">
              <div className="flex justify-between font-bold text-slate-900">
                <span>{internship.role} – {internship.company}</span>
                <span className="tabular-nums">{internship.period} (1 Month)</span>
              </div>
              <div className="text-slate-600">
                Accredited under: {internship.affiliation} · <strong className="text-emerald-800">Remarks: {internship.remarks}</strong>
              </div>
              <p className="text-slate-700 leading-normal">
                {internship.description}
              </p>
            </div>
          </div>

          {/* Featured Project Block */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Featured Engineering Project
            </h2>
            <div className="text-xs space-y-1.5">
              <div className="flex justify-between font-bold text-slate-900">
                <span>{featuredProject.title}</span>
                <span className="text-slate-600 font-mono text-[11px]">{featuredProject.technologies.slice(0, 4).join(', ')}</span>
              </div>
              <p className="text-slate-700 leading-normal">
                An AI-powered online exam proctoring system using computer vision to detect:
                Multiple faces, Absence from screen, Mobile phone usage, and Abnormal head movements.
              </p>
              <div className="text-slate-600">
                <strong>Stack:</strong> {featuredProject.technologies.join(', ')}
              </div>
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Certifications
              </h2>
              <ul className="text-xs space-y-1 text-slate-700">
                <li>• <strong>SEO and SEM Basics</strong> — Naukri (July 2026)</li>
                <li>• <strong>Introduction to Data Analytics</strong> — Simplilearn (July 2026)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                Languages
              </h2>
              <ul className="text-xs space-y-1 text-slate-700">
                <li>• <strong>English:</strong> Read, Write, Speak</li>
                <li>• <strong>Telugu:</strong> Read, Write, Speak (Native)</li>
                <li>• <strong>Hindi:</strong> Read, Write</li>
              </ul>
            </div>
          </div>

          {/* Placement Notice */}
          <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between">
            <span>Verified for Campus Placement Drive 2026–2027</span>
            <span>Candidate: Gummireddy Hema Dhanusha</span>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 no-print">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Sheet</span>
          </button>
        </div>

      </div>
    </div>
  );
};
