import React, { useState } from 'react';
import { 
  Cpu, Layout, Server, Database, Wrench, Sparkles 
} from 'lucide-react';
import { skillCategories, skillsData } from '../data/skills';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills: Skill[] = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Layout className="w-4 h-4" />;
      case 'backend':
        return <Server className="w-4 h-4" />;
      case 'database':
        return <Database className="w-4 h-4" />;
      case 'tools':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text-cyan">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Modern full-stack technologies and developer tools organized by domain.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-glow-primary font-semibold'
                    : 'bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.id === 'all' 
                    ? skillsData.length 
                    : skillsData.filter((s) => s.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className={`glass-card p-5 rounded-2xl border border-slate-800/90 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group shadow-card-subtle`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="text-base font-bold text-white group-hover:text-primary-light transition-colors">
                    {skill.name}
                  </h3>
                  <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full ${skill.badgeBg}`}>
                    {skill.category}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs text-slate-400 mb-4">
                  {skill.tagline}
                </p>

                {/* Focus / Core capabilities */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/70">
                  {skill.focus.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Domain: {skill.category}</span>
                <span className="text-primary group-hover:translate-x-1 transition-transform">
                  &lt;ready /&gt;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Sample Data */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-mono">
            * Technologies are configurable via <code className="text-sky-300 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">src/data/skills.ts</code>. Skill evaluation is based on clean code standards without arbitrary percentage metrics.
          </p>
        </div>

      </div>
    </section>
  );
};
