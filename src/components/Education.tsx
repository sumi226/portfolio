import React from 'react';
import { 
  GraduationCap, Calendar, Award, Building, CheckCircle2 
} from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-dark-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educational <span className="gradient-text-blue">Qualifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Formal business, management, and financial foundations fostering strong analytical problem-solving in software development.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-slate-800" />

          <div className="space-y-10 md:space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Dot (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-950 border-2 border-primary items-center justify-center z-10 shadow-glow-primary">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-1/2">
                    <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 shadow-card-subtle group">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          <Award className="w-3.5 h-3.5" />
                          <span>{item.result}</span>
                        </span>
                        
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                          <Calendar className="w-3 h-3 text-sky-400" />
                          <span>{item.passingYear}</span>
                        </span>
                      </div>

                      {/* Degree & Major */}
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {item.degree}
                      </h3>
                      <div className="text-sm font-semibold text-sky-400 mt-0.5">
                        Major: {item.major}
                      </div>

                      {/* Institution */}
                      <div className="flex items-center gap-2 text-xs text-slate-300 mt-2 font-medium">
                        <Building className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-400 leading-relaxed mt-4 pt-3 border-t border-slate-800/70">
                        {item.description}
                      </p>

                      {/* Academic Highlights */}
                      <div className="mt-4 space-y-1.5">
                        {item.highlights.map((point, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Note on Academic Data */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-mono">
            * Passing years and institutions are configured in <code className="text-sky-300 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">src/data/education.ts</code> with editable placeholders.
          </p>
        </div>

      </div>
    </section>
  );
};
