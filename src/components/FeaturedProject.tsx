import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Shield, Eye, Users, Smartphone, UserX, Compass, Terminal, Cpu, Play, CheckCircle, AlertTriangle } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  const { featuredProject, personal } = PORTFOLIO_DATA;
  const [selectedModule, setSelectedModule] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'architecture' | 'simulator'>('architecture');

  // Interactive proctoring simulation state
  const [simulatedViolation, setSimulatedViolation] = useState<'normal' | 'multiple_faces' | 'absence' | 'phone' | 'head_movement'>('normal');

  const getModuleIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-4 h-4" />;
      case 1:
        return <UserX className="w-4 h-4" />;
      case 2:
        return <Smartphone className="w-4 h-4" />;
      case 3:
        return <Compass className="w-4 h-4" />;
      default:
        return <Shield className="w-4 h-4" />;
    }
  };

  return (
    <section id="project" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            05. Core Capstone Project
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Featured Project
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Computer vision-powered academic proctoring and real-time exam integrity platform.
          </p>
        </div>

        {/* Main Project Card Container */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          
          {/* Top Banner & Overview */}
          <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="font-semibold text-slate-900">{featuredProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>AI & Computer Vision</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {featuredProject.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {featuredProject.overview}
                </p>

                {/* Technologies (Clean unboxed tags) */}
                <div className="pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Technologies & Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Visual Container */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-16/10 shadow-xs group">
                  <img
                    src={personal.projectImage}
                    alt={featuredProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback container */}
                  <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-white">
                    <Shield className="w-10 h-10 text-slate-400 mb-2" />
                    <span className="font-bold text-sm">{featuredProject.title}</span>
                    <span className="text-xs text-slate-400 mt-1">Computer Vision Engine</span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-4 text-white text-xs">
                    <div className="font-semibold text-slate-200">Real-Time Webcam Analysis Feed</div>
                    <div className="text-[11px] text-slate-300">Continuous video stream processing via OpenCV & Flask</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Inspection Workspace */}
          <div className="p-6 sm:p-8 bg-slate-50/50">
            
            {/* Tab navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Violation Detection Architecture & Testing
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Inspect the 4 required automated verification mechanisms.
                </p>
              </div>

              {/* Segmented Control */}
              <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start sm:self-auto">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'architecture'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Module Architecture
                </button>
                <button
                  onClick={() => setActiveTab('simulator')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'simulator'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Interactive Simulator
                </button>
              </div>
            </div>

            {/* Tab 1: Module Architecture */}
            {activeTab === 'architecture' && (
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Module selection buttons */}
                <div className="lg:col-span-5 space-y-2">
                  {featuredProject.modules.map((mod, idx) => {
                    const isSelected = selectedModule === idx;
                    return (
                      <button
                        key={mod.title}
                        onClick={() => setSelectedModule(idx)}
                        className={`w-full text-left p-3.5 rounded-lg border text-xs font-medium transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-white border-slate-900 text-slate-900 shadow-xs ring-1 ring-slate-900'
                            : 'bg-white/80 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`p-1.5 rounded-md ${isSelected ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}>
                            {getModuleIcon(idx)}
                          </span>
                          <span className="font-semibold">{mod.title}</span>
                        </div>
                        <span className="text-[11px] text-slate-400">Inspect</span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Module Detail Inspector */}
                <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="p-1 rounded-md bg-slate-900 text-white">
                        {getModuleIcon(selectedModule)}
                      </span>
                      <h5 className="text-base font-bold text-slate-900">
                        {featuredProject.modules[selectedModule].title}
                      </h5>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">Module 0{selectedModule + 1}</span>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Problem Context & Behavior
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {featuredProject.modules[selectedModule].description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Detection Logic & Computer Vision Pipeline
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 leading-relaxed">
                      {featuredProject.modules[selectedModule].detectionMethod}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Implementation: Python / OpenCV backend with Flask endpoint</span>
                    <span className="text-emerald-700 font-medium">Flagged to MySQL Audit Log</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Interactive Simulator */}
            {activeTab === 'simulator' && (
              <div className="mt-6 space-y-6">
                <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>SIMULATED PROCTORING PIPELINE INSPECTOR</span>
                      </div>
                      <h5 className="text-base font-bold mt-1 text-slate-100">
                        Live Frame Evaluation Mock Feed
                      </h5>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => setSimulatedViolation('normal')}
                        className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                          simulatedViolation === 'normal'
                            ? 'bg-emerald-500 text-slate-950 font-bold'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        Normal State
                      </button>
                      <button
                        onClick={() => setSimulatedViolation('multiple_faces')}
                        className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                          simulatedViolation === 'multiple_faces'
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        Multiple Faces
                      </button>
                      <button
                        onClick={() => setSimulatedViolation('absence')}
                        className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                          simulatedViolation === 'absence'
                            ? 'bg-red-500 text-white font-bold'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        Screen Absence
                      </button>
                      <button
                        onClick={() => setSimulatedViolation('phone')}
                        className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                          simulatedViolation === 'phone'
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        Phone Usage
                      </button>
                      <button
                        onClick={() => setSimulatedViolation('head_movement')}
                        className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                          simulatedViolation === 'head_movement'
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        Head Turn
                      </button>
                    </div>
                  </div>

                  {/* Simulator Screen Visual */}
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-7 bg-slate-950 p-4 rounded-lg border border-slate-800 relative aspect-16/10 flex flex-col justify-between">
                      {/* Top HUD */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>CAMERA: WEBCAM_01</span>
                        <span>TIMESTAMP: 00:14:22</span>
                      </div>

                      {/* Center Simulated Bounding Box */}
                      <div className="flex flex-col items-center justify-center py-4">
                        {simulatedViolation === 'normal' && (
                          <div className="border-2 border-emerald-500/80 rounded-lg p-6 text-center bg-emerald-950/20 max-w-xs">
                            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                            <div className="text-xs font-semibold text-emerald-300">Test-Taker Verified</div>
                            <div className="text-[11px] text-slate-400 mt-1">Single Face · Looking Forward · Clear Perimeter</div>
                          </div>
                        )}

                        {simulatedViolation === 'multiple_faces' && (
                          <div className="border-2 border-amber-500 rounded-lg p-6 text-center bg-amber-950/30 max-w-xs animate-pulse">
                            <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                            <div className="text-xs font-bold text-amber-300">VIOLATION: Multiple Faces</div>
                            <div className="text-[11px] text-slate-300 mt-1">Secondary face detected in upper right quadrant</div>
                          </div>
                        )}

                        {simulatedViolation === 'absence' && (
                          <div className="border-2 border-red-500 rounded-lg p-6 text-center bg-red-950/30 max-w-xs animate-pulse">
                            <UserX className="w-8 h-8 text-red-400 mx-auto mb-2" />
                            <div className="text-xs font-bold text-red-300">VIOLATION: Candidate Absent</div>
                            <div className="text-[11px] text-slate-300 mt-1">No human face registered in active examination bounds</div>
                          </div>
                        )}

                        {simulatedViolation === 'phone' && (
                          <div className="border-2 border-amber-500 rounded-lg p-6 text-center bg-amber-950/30 max-w-xs animate-pulse">
                            <Smartphone className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                            <div className="text-xs font-bold text-amber-300">VIOLATION: Mobile Device</div>
                            <div className="text-[11px] text-slate-300 mt-1">Rectangular mobile device identified in lower hand field</div>
                          </div>
                        )}

                        {simulatedViolation === 'head_movement' && (
                          <div className="border-2 border-amber-500 rounded-lg p-6 text-center bg-amber-950/30 max-w-xs animate-pulse">
                            <Compass className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                            <div className="text-xs font-bold text-amber-300">VIOLATION: Abnormal Head Pose</div>
                            <div className="text-[11px] text-slate-300 mt-1">Yaw rotation exceeded threshold (Persistent leftward gaze)</div>
                          </div>
                        )}
                      </div>

                      {/* Bottom Status Feed */}
                      <div className="text-[11px] font-mono flex items-center justify-between text-slate-400 border-t border-slate-800/80 pt-2">
                        <span>CV ENGINE: OpenCV / ML Pipeline</span>
                        <span className={simulatedViolation === 'normal' ? 'text-emerald-400' : 'text-amber-400'}>
                          STATUS: {simulatedViolation.toUpperCase().replace('_', ' ')}
                        </span>
                      </div>
                    </div>

                    {/* Explanatory notes */}
                    <div className="md:col-span-5 space-y-3 text-xs text-slate-300">
                      <div className="font-semibold text-white">How this works in actual deployment:</div>
                      <p className="leading-relaxed text-slate-400">
                        The Flask server receives video frames captured by the HTML/JavaScript client.
                        The Python machine learning pipeline applies facial recognition landmarks and object bounding boxes.
                      </p>
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5 font-mono text-[11px]">
                        <div className="text-slate-400">// Database Incident Record:</div>
                        <div className="text-emerald-400 font-sans">
                          {simulatedViolation === 'normal' ? (
                            'Session stable — zero infractions logged.'
                          ) : (
                            `Incident logged: Type = ${simulatedViolation.replace('_', ' ')}, Timestamp = CURRENT_TIMESTAMP, Action = Warning Flagged.`
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
