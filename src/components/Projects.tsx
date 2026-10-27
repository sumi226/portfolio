import React, { useState } from 'react';
import { Briefcase, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface FilterCategory {
  id: string;
  label: string;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories: FilterCategory[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'Developer Tools & Productivity', label: 'Developer Tools' },
    { id: 'Health & Fitness Application', label: 'Fitness & Health' },
    { id: 'E-Commerce & Market Intelligence', label: 'Market & E-Commerce' },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Real-world full-stack architectures, interactive UI designs, and analytical applications.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-glow-primary font-semibold'
                  : 'bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Note on Data Architecture */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Each project has its own dedicated details page with architecture notes and interactive preview.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
