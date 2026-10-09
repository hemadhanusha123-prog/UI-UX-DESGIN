import React, { useState, useEffect } from 'react';
import { X, Github, Check, ExternalLink } from 'lucide-react';

interface GithubModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentGithub: string;
  onSaveGithub: (url: string) => void;
}

export const GithubModal: React.FC<GithubModalProps> = ({
  isOpen,
  onClose,
  currentGithub,
  onSaveGithub,
}) => {
  const [urlInput, setUrlInput] = useState(currentGithub);

  useEffect(() => {
    setUrlInput(currentGithub);
  }, [currentGithub, isOpen]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    let formatted = urlInput.trim();
    if (formatted && !formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      if (!formatted.includes('github.com')) {
        formatted = `https://github.com/${formatted}`;
      } else {
        formatted = `https://${formatted}`;
      }
    }
    onSaveGithub(formatted);
    onClose();
  };

  const handleClear = () => {
    onSaveGithub('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-xl p-6 space-y-5">
        
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-slate-900 text-white">
              <Github className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Configure GitHub Link</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              GitHub Profile URL or Username:
            </label>
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="e.g. https://github.com/username or your username"
              className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-slate-900"
              autoFocus
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Until set, the portfolio displays "Add GitHub link".
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            {currentGithub ? (
              <button
                type="button"
                onClick={handleClear}
                className="text-xs text-red-600 hover:text-red-700 font-medium"
              >
                Clear URL
              </button>
            ) : <div></div>}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Save URL
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
