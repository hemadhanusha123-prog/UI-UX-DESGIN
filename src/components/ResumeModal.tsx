import React, { useState, useEffect } from 'react';
import { X, Download, Link as LinkIcon, FileText, Check, ExternalLink, Printer, Upload, RotateCcw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrintPlacementSheet: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onPrintPlacementSheet
}) => {
  const [customUrl, setCustomUrl] = useState<string>(() => {
    try {
      return localStorage.getItem('hema_resume_url') || '';
    } catch {
      return '';
    }
  });

  const [inputUrl, setInputUrl] = useState(customUrl);
  const [isEditing, setIsEditing] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>(() => {
    try {
      return localStorage.getItem('hema_resume_filename') || '';
    } catch {
      return '';
    }
  });

  useEffect(() => {
    setInputUrl(customUrl);
  }, [customUrl]);

  if (!isOpen) return null;

  const handleSaveUrl = () => {
    const trimmed = inputUrl.trim();
    setCustomUrl(trimmed);
    try {
      localStorage.setItem('hema_resume_url', trimmed);
    } catch (e) {
      console.error(e);
    }
    setIsEditing(false);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2000);
  };

  const handleClearUrl = () => {
    setCustomUrl('');
    setInputUrl('');
    setUploadedFileName('');
    try {
      localStorage.removeItem('hema_resume_url');
      localStorage.removeItem('hema_resume_filename');
    } catch (e) {
      console.error(e);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please upload a PDF file (.pdf)');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        try {
          localStorage.setItem('hema_resume_url', base64);
          localStorage.setItem('hema_resume_filename', file.name);
          setCustomUrl(base64);
          setUploadedFileName(file.name);
          setSavedFeedback(true);
          setTimeout(() => setSavedFeedback(false), 2000);
        } catch (err) {
          alert('File is too large for local browser storage. Please paste a Google Drive or Cloud link instead.');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const isBase64 = customUrl.startsWith('data:application/pdf');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-slate-900 text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Resume & Placement Profile</h3>
              <p className="text-xs text-slate-500">Download or link candidate placement resume</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action 1: Print / Quick PDF Placement Sheet */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Official Placement Summary Sheet
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Standardized 1-page college placement format containing B.Tech scores, skills, internship, and project.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onPrintPlacementSheet();
            }}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors shadow-2xs"
          >
            <Printer className="w-4 h-4 text-slate-700" />
            <span>Open & Print Placement Profile (PDF Ready)</span>
          </button>
        </div>

        {/* Action 2: Custom Resume Link / Upload (Editable feature) */}
        <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                <span>Personal PDF Resume Link</span>
                <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                  Editable
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Hema can connect a Google Drive link, OneDrive link, or upload a PDF.
              </p>
            </div>

            {savedFeedback && (
              <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Saved!
              </span>
            )}
          </div>

          {/* Current Status */}
          {customUrl ? (
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                <div className="flex items-center gap-2 truncate">
                  <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate font-medium">
                    {uploadedFileName || (isBase64 ? 'Uploaded PDF Resume' : customUrl)}
                  </span>
                </div>
                <button
                  onClick={handleClearUrl}
                  className="text-slate-400 hover:text-red-600 text-xs ml-2 shrink-0"
                  title="Remove"
                >
                  Clear
                </button>
              </div>

              <div className="flex gap-2">
                <a
                  href={customUrl}
                  target="_blank"
                  rel="noreferrer"
                  download={isBase64 ? (uploadedFileName || 'Gummireddy_Hema_Dhanusha_Resume.pdf') : undefined}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Attached Resume</span>
                </a>

                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  Edit
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
                No external resume PDF URL currently configured. You can add your Google Drive/Dropbox PDF link below or upload a file.
              </div>

              {!isEditing && (
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex-1 py-2 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <LinkIcon className="w-3.5 h-3.5" />
                    <span>Enter Resume Link</span>
                  </button>

                  <label className="flex-1 py-2 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload PDF File</span>
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              )}
            </div>
          )}

          {/* Edit URL Form */}
          {isEditing && (
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <label className="block text-xs font-medium text-slate-700">
                Resume URL (Google Drive / Cloud Link):
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="https://drive.google.com/file/d/..."
                  className="flex-1 px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900"
                />
                <button
                  onClick={handleSaveUrl}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Save
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                Tip: If using Google Drive, make sure link sharing is set to "Anyone with the link can view".
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
          <span>Gummireddy Hema Dhanusha</span>
          <button
            onClick={onClose}
            className="text-slate-700 hover:text-slate-900 font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
