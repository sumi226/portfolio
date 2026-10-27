import React, { useState } from 'react';
import { 
  FileText, Download, ExternalLink, AlertCircle 
} from 'lucide-react';
import { profileData } from '../data/profile';
import { educationData } from '../data/education';
import { projectsData } from '../data/projects';

export const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'summary' | 'education' | 'skills' | 'projects'>('summary');

  return (
    <section id="resume" className="py-20 relative bg-dark-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text-blue">Resume</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Detailed overview of technical proficiencies, educational timeline, and software engineering capabilities.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href={profileData.resumePath}
              download={profileData.resumeFileName}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-glow-primary transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>

            <a
              href={profileData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-xs sm:text-sm font-medium bg-dark-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 flex items-center gap-2 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-sky-400" />
              <span>View in Browser</span>
            </a>
          </div>
        </div>

        {/* Interactive In-Page Resume Card */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl border border-slate-800/90 overflow-hidden shadow-2xl">
          <div className="bg-dark-900/90 px-6 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400">
                {profileData.resumeFileName}
              </span>
            </div>

            {/* Quick Resume Nav Tabs */}
            <div className="flex items-center gap-1">
              {[
                { id: 'summary' as const, label: 'Summary' },
                { id: 'education' as const, label: 'Education' },
                { id: 'skills' as const, label: 'Skills' },
                { id: 'projects' as const, label: 'Projects' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-slate-800 text-sky-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-10 bg-dark-950/40">
            {/* Header info with thumbnail */}
            <div className="border-b border-slate-800/90 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                {profileData.avatarUrl && (
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    className="w-14 h-14 rounded-full object-cover object-top border-2 border-sky-500/40 shadow-sm"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {profileData.name}
                  </h3>
                  <p className="text-sm font-semibold text-sky-400 mt-0.5">
                    {profileData.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Chittagong, Bangladesh • fsumi226@gmail.com • +880167971447
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right text-xs font-mono text-slate-400 space-y-1">
                <div>github.com/sumi226</div>
                <div>linkedin.com/in/fatema226</div>
              </div>
            </div>

            {/* Tab: Summary */}
            {activeTab === 'summary' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                    Professional Summary
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {profileData.shortIntro} Analytical Full Stack Developer combining an advanced academic background in MBA Finance & Banking and Management with modern web development proficiency in the MERN stack (React.js, Node.js, Express.js, MongoDB). Dedicated to writing clean, maintainable code, building responsive interfaces, and continuously mastering full-stack architectures.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-3">
                    Core Competencies
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-300">
                    <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                      • Single Page Apps (React.js)
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                      • Responsive UI (Tailwind CSS)
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                      • RESTful API Development
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                      • Node.js & Express.js
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                      • MongoDB & NoSQL Schemas
                    </div>
                    <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                      • Version Control (Git & GitHub)
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Education */}
            {activeTab === 'education' && (
              <div className="space-y-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-3">
                  Academic Timeline
                </h4>
                {educationData.map((edu) => (
                  <div key={edu.id} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="text-sm font-bold text-white">{edu.degree} - {edu.major}</span>
                      <span className="text-xs font-mono text-emerald-400 font-semibold">{edu.result}</span>
                    </div>
                    <div className="text-xs text-sky-400 mt-1">{edu.institution}</div>
                    <div className="text-xs text-slate-400 mt-1 font-mono">Passing Year: {edu.passingYear}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Skills */}
            {activeTab === 'skills' && (
              <div className="space-y-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-3">
                  Technical Stack Directory
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                    <div className="text-xs font-bold text-cyan-400 mb-2">Frontend Development</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Responsive Web Design, Component Architecture, State Management.
                    </p>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                    <div className="text-xs font-bold text-emerald-400 mb-2">Backend & APIs</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Node.js, Express.js, REST APIs, JSON Middleware, Endpoint Routing, Error Handling, Server-side Integration.
                    </p>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                    <div className="text-xs font-bold text-violet-400 mb-2">Database Systems</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      MongoDB, MySQL, NoSQL data structures, Schema modeling with Mongoose, Document storage.
                    </p>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                    <div className="text-xs font-bold text-sky-400 mb-2">Tools & Environments</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Git, GitHub, VS Code, Postman, npm, Vite, Modern DevTools.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Projects */}
            {activeTab === 'projects' && (
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                  Featured Project Implementations
                </h4>
                {projectsData.map((p) => (
                  <div key={p.id} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="text-sm font-bold text-white">{p.title}</span>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                        {p.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-2">{p.shortDescription}</p>
                    <div className="text-[11px] text-slate-400 font-mono mt-2">
                      Stack: {p.technologies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Developer Guide Box */}
        <div className="max-w-4xl mx-auto mt-8 p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-200 font-semibold block">Resume Replacement Instructions:</span>
            A valid, high-resolution resume PDF is provided at <code className="text-sky-300 bg-slate-950 px-1.5 py-0.5 rounded">public/resume.pdf</code>. To update with your newest resume anytime, simply drop your replacement PDF into the <code className="text-sky-300 bg-slate-950 px-1.5 py-0.5 rounded">public/</code> directory named <code className="text-sky-300 bg-slate-950 px-1.5 py-0.5 rounded">resume.pdf</code>.
          </div>
        </div>

      </div>
    </section>
  );
};
