import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, ExternalLink, Edit3, MessageSquare } from 'lucide-react';

interface ContactProps {
  customGithub: string;
  onEditGithub: () => void;
}

export const Contact: React.FC<ContactProps> = ({ customGithub, onEditGithub }) => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Recruiter quick compose state
  const [recruiterName, setRecruiterName] = useState('');
  const [recruiterCompany, setRecruiterCompany] = useState('');
  const [recruiterPurpose, setRecruiterPurpose] = useState('Placement Interview Inquiry');
  const [recruiterMessage, setRecruiterMessage] = useState(
    'Hi Hema, we reviewed your AI & Data Science portfolio and would like to connect regarding upcoming engineering opportunities.'
  );
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${recruiterPurpose} - ${recruiterCompany || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Name: ${recruiterName}\nCompany: ${recruiterCompany}\n\nMessage:\n${recruiterMessage}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyMessage = () => {
    const fullText = `To: ${personal.email}\nSubject: ${recruiterPurpose} - ${recruiterCompany}\nFrom: ${recruiterName}\n\n${recruiterMessage}`;
    navigator.clipboard.writeText(fullText);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            08. Direct Channels
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Reach out directly for placement opportunities, technical evaluations, or project discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-900 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">Email Address</div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm font-semibold text-slate-900 hover:underline"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 text-slate-500 hover:text-slate-900 rounded-md hover:bg-slate-200/60 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-900 text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">Phone & WhatsApp</div>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-slate-900 hover:underline tabular-nums"
                  >
                    {personal.phoneDisplay}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2 text-slate-500 hover:text-slate-900 rounded-md hover:bg-slate-200/60 transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-50/70 p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/20 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-600 text-white">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                    g-hema-dhanusha
                  </div>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>

            {/* GitHub Card (Editable / Add link) */}
            <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-800 text-white">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">GitHub Repository Profile</div>
                  {customGithub ? (
                    <a
                      href={customGithub.startsWith('http') ? customGithub : `https://${customGithub}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-slate-900 hover:underline flex items-center gap-1"
                    >
                      <span>{customGithub.replace(/^https?:\/\/(www\.)?github\.com\/?/, '') || 'GitHub Profile'}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  ) : (
                    <button
                      onClick={onEditGithub}
                      className="text-sm font-semibold text-blue-600 hover:underline text-left"
                    >
                      Add GitHub link
                    </button>
                  )}
                </div>
              </div>

              <button
                onClick={onEditGithub}
                className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-100 transition-colors flex items-center gap-1"
                title="Edit GitHub link"
              >
                <Edit3 className="w-3 h-3" />
                <span>{customGithub ? 'Edit' : 'Add'}</span>
              </button>
            </div>

            {/* Note on availability */}
            <div className="p-4 rounded-lg bg-slate-100 text-xs text-slate-600 space-y-1">
              <div className="font-semibold text-slate-900">Placement Availability</div>
              <div>Available for on-campus interviews, remote evaluations, and assessments.</div>
            </div>

          </div>

          {/* Quick Recruiter Dispatch / Direct Message Box */}
          <div className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-8 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 pb-4 border-b border-slate-200">
              <MessageSquare className="w-4 h-4 text-slate-700" />
              <h3 className="text-base font-bold text-slate-900">
                Send a Direct Message / Placement Inquiry
              </h3>
            </div>

            <form onSubmit={handleSendMail} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Name / Recruiter Title
                  </label>
                  <input
                    type="text"
                    required
                    value={recruiterName}
                    onChange={(e) => setRecruiterName(e.target.value)}
                    placeholder="e.g. John Doe, HR Manager"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={recruiterCompany}
                    onChange={(e) => setRecruiterCompany(e.target.value)}
                    placeholder="e.g. Tech Solutions Corp"
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Inquiry Purpose
                </label>
                <select
                  value={recruiterPurpose}
                  onChange={(e) => setRecruiterPurpose(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900"
                >
                  <option value="Placement Interview Inquiry">Placement Interview Inquiry</option>
                  <option value="Internship / Graduate Engineering Role">Internship / Graduate Engineering Role</option>
                  <option value="Detailed Resume & Transcript Request">Detailed Resume & Transcript Request</option>
                  <option value="Project Demonstration Request">Project Demonstration Request</option>
                  <option value="General Technical Query">General Technical Query</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={recruiterMessage}
                  onChange={(e) => setRecruiterMessage(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900 resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-2xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  {copiedTemplate ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Template Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Template</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
