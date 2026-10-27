import React, { useState } from 'react';
import { 
  User, Code, Target, Heart, Compass, Cpu, 
  Sparkles, CheckCircle2 
} from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section id="about" className="py-20 relative bg-dark-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-blue">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Bridging analytical business thinking with modern full-stack web engineering.
          </p>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {profileData.highlights.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card p-5 rounded-2xl border border-slate-800/80 hover:border-sky-500/30 transition-all text-center group"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-1">
                {item.label}
              </div>
              <div className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                {item.value}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Profile Highlight */}
        <div className="mb-10">
          <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800/80">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden border border-sky-500/30 bg-slate-900 shadow-lg">
                {!avatarError && profileData.avatarUrl ? (
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top"
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-500/20 via-indigo-500/20 to-violet-500/20 text-2xl font-black tracking-wider text-sky-300">
                    FA
                  </div>
                )}
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-3">
                  <User className="w-3.5 h-3.5" />
                  <span>My Story</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Building thoughtful digital experiences with clarity and purpose.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  I combine business insight, product thinking, and modern web engineering to create applications that are practical, polished, and people-focused.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Card 1: Journey & Passion */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 relative overflow-hidden space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Journey into Programming</h3>
                <span className="text-xs text-slate-400 font-mono">From Business Logic to Code</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {profileData.about.journey}
            </p>

            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-sky-400 text-sm font-semibold mb-2">
                <Cpu className="w-4 h-4" /> Passion for Full-Stack Development
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {profileData.about.passion}
              </p>
            </div>
          </div>

          {/* Card 2: Projects & Problem Solving */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 relative overflow-hidden space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">What I Enjoy Building</h3>
                <span className="text-xs text-slate-400 font-mono">User-Centric Applications</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {profileData.about.projectsEnjoyed}
            </p>

            <div className="pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-violet-400 text-sm font-semibold mb-2">
                <Sparkles className="w-4 h-4" /> Problem Solving Philosophy
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {profileData.about.problemSolving}
              </p>
            </div>
          </div>

          {/* Card 3: Career Goals */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 relative overflow-hidden space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Career Goals & Ambitions</h3>
                <span className="text-xs text-slate-400 font-mono">Growth & Professional Focus</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {profileData.about.careerGoals}
            </p>

            <ul className="space-y-2 pt-2">
              <li className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Deliver clean, maintainable, production-ready full-stack applications.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Collaborate closely with cross-functional product and engineering teams.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Continuous adaptation to emerging architectural patterns and performance optimizations.</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Interests Outside Programming */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 relative overflow-hidden space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Interests Outside Code</h3>
                <span className="text-xs text-slate-400 font-mono">Personal Balance & Perspectives</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {profileData.about.hobbies}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-slate-300">
              <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <span className="font-semibold text-white block">UI/UX Exploration</span>
                <span className="text-[11px] text-slate-400">Design systems & typography</span>
              </div>
              <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <span className="font-semibold text-white block">Financial Tech</span>
                <span className="text-[11px] text-slate-400">Banking & market dynamics</span>
              </div>
              <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <span className="font-semibold text-white block">Tech Reading</span>
                <span className="text-[11px] text-slate-400">Web standards & tooling</span>
              </div>
              <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                <span className="font-semibold text-white block">Continuous Learning</span>
                <span className="text-[11px] text-slate-400">Sharpening dev craft</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
