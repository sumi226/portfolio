'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, ExternalLink, Github, CheckCircle2, AlertTriangle, 
  Lightbulb, Rocket, Code2, Layers, Cpu, ChevronRight, Info, Sparkles 
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { 
  EcommerceLiveDemo, 
  TaskManagementLiveDemo, 
  FinanceDashboardLiveDemo 
} from '../components/ProjectLiveDemos';
import { Project } from '../types';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const projectIndex = projectsData.findIndex(
    (p) => p.id === id || p.slug === id
  );

  const project: Project | undefined = projectIndex !== -1 ? projectsData[projectIndex] : undefined;

  const prevProject: Project | null = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject: Project | null = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4">
        <div className="max-w-md w-full glass-card p-8 rounded-2xl border border-slate-800 text-center">
          <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Project Not Found</h2>
          <p className="text-xs text-slate-400 mb-6">
            The project "{id}" could not be located in the portfolio registry.
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-primary hover:bg-primary-hover text-dark-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const renderLiveInteractiveDemo = () => {
    switch (project.id) {
      case 'ecommerce':
        return <EcommerceLiveDemo />;
      case 'task-management':
        return <TaskManagementLiveDemo />;
      case 'finance-dashboard':
        return <FinanceDashboardLiveDemo />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative bg-dark-950">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-hero-glow pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Navigation & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-slate-200">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/#projects" className="hover:text-slate-200">Projects</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-primary truncate max-w-[160px] sm:max-w-none">{project.title}</span>
          </div>
        </div>

        {/* Project Header Banner */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-800/90 mb-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-xs uppercase font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
              {project.category}
            </span>
            {project.isPlaceholderLink && (
              <span className="text-xs font-mono text-amber-300 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800/40 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> Sample Portfolio Architecture
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-3xl leading-relaxed mb-6">
            {project.subtitle}
          </p>

          {project.stats && (
            <div className="grid grid-cols-3 gap-3 max-w-lg mb-8">
              {project.stats.map((s, idx) => (
                <div key={idx} className="bg-dark-900/80 p-2.5 rounded-xl border border-slate-800 text-center">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">{s.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800/80">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-glow-primary transition-all flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Live Deployment</span>
              </a>
            )}

            {project.clientRepoUrl && (
              <a
                href={project.clientRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Frontend Repository</span>
              </a>
            )}

            {project.serverRepoUrl && (
              <a
                href={project.serverRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>Backend API Repository</span>
              </a>
            )}
          </div>
        </div>

        {/* Live Interactive Playground / Demo Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Interactive Live Showcase
            </h3>
          </div>
          {renderLiveInteractiveDemo()}
        </div>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-sky-400" /> Project Overview
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 space-y-5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Key Features & Capabilities
              </h2>
              <div className="space-y-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="bg-dark-900/60 p-4 rounded-xl border border-slate-800/80">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {feat.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 space-y-5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Lightbulb className="w-5 h-5 text-amber-400" /> Technical Challenges & Solutions
              </h2>
              <div className="space-y-4">
                {project.challenges.map((item, idx) => (
                  <div key={idx} className="bg-dark-900/60 p-4 rounded-xl border border-slate-800/80 space-y-2">
                    <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Challenge: {item.challenge}</span>
                    </div>
                    <p className="text-xs text-slate-300 pl-5 border-l border-emerald-500/40 leading-relaxed">
                      <strong className="text-emerald-400 font-mono">Solution:</strong> {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/90 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Rocket className="w-5 h-5 text-violet-400" /> Future Roadmap & Enhancements
              </h2>
              <ul className="space-y-2.5">
                {project.improvements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <div className="w-5 h-5 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="leading-relaxed">{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="glass-card p-6 rounded-2xl border border-slate-800/90 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-sky-400" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-dark-900 border border-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800/90 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-indigo-400" /> Role & Architectural Contribution
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.myRole}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <Info className="w-4 h-4 text-sky-400" /> Configurable Project Data
              </div>
              <p className="text-[11px] leading-relaxed">
                To link your actual deployed project URLs, edit <code className="text-sky-300 bg-slate-950 px-1 py-0.5 rounded">src/data/projects.ts</code> and update <code className="text-sky-300 bg-slate-950 px-1 py-0.5 rounded">liveUrl</code> and <code className="text-sky-300 bg-slate-950 px-1 py-0.5 rounded">clientRepoUrl</code>.
              </p>
            </div>

          </div>

        </div>

        {/* Next / Previous Project Pagination Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors w-full sm:w-auto text-left group"
            >
              <ArrowLeft className="w-4 h-4 text-sky-400 group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Previous Project</span>
                <span className="text-xs font-bold text-white">{prevProject.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors w-full sm:w-auto text-right justify-end group"
            >
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Next Project</span>
                <span className="text-xs font-bold text-white">{nextProject.title}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>

      </div>
    </div>
  );
};
