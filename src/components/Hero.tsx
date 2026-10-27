import React from 'react';
import { 
  ArrowDown, Download, Sparkles, Github, Linkedin,
  Mail, MessageSquare, Terminal, Layers, Database, Code
} from 'lucide-react';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/socialLinks';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-emerald-300 font-semibold text-[11px]">
                {profileData.status}
              </span>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              Hi, I'm <span className="gradient-text-blue">{profileData.name}</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2.5 mb-5">
              <span className="text-xl sm:text-2xl font-semibold text-slate-200">
                {profileData.title}
              </span>
              <span className="hidden sm:inline-block text-slate-500">|</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 bg-sky-950/50 border border-sky-800/40 px-2.5 py-0.5 rounded-md">
                <Code className="w-3.5 h-3.5" /> MERN Stack
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-lg sm:text-xl font-medium text-slate-300 mb-5 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              "{profileData.headline}"
            </h2>

            {/* Short Intro */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {profileData.shortIntro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10">
              {/* Primary: View My Projects */}
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-glow-primary transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Download Resume (Configurable PDF) */}
              <a
                href={profileData.resumePath}
                download={profileData.resumeFileName}
                className="px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800/90 text-white border border-slate-700/80 hover:border-sky-500/50 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>

              {/* Secondary: Contact Me */}
              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all duration-200 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 border-t border-slate-800/70">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">
                Connect:
              </span>
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
             
              <a
                href={socialLinks.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800 transition-colors"
                aria-label="WhatsApp Chat"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              {socialLinks.email.mailto && (
                <a
                  href={socialLinks.email.mailto}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 hover:bg-slate-800 transition-colors"
                  aria-label="Email Direct"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Developer Avatar with Profile Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Outer decorative spinning ring */}
              <div className="absolute inset-0 rounded-full border border-sky-500/20 animate-spin" style={{ animationDuration: '40s' }} />
              <div className="absolute -inset-3 rounded-full border border-dashed border-indigo-500/20 animate-spin" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />

              {/* Avatar Center Card */}
              <div className="w-full h-full rounded-3xl bg-gradient-to-tr from-slate-900 via-dark-900 to-slate-900 border border-slate-800/90 p-3 shadow-2xl relative flex items-center justify-center overflow-hidden group">
                
                {/* Background Tech Glow */}
                <div className="absolute inset-0 bg-hero-glow opacity-80" />
                
                {profileData.avatarUrl ? (
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner group">
                    <img
                      src={profileData.avatarUrl}
                      alt={profileData.name}
                      className="w-full h-full object-cover object-top rounded-2xl transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Bottom floating badge inside image */}
                    <div className="absolute bottom-3 inset-x-3 text-center py-1.5 px-3 rounded-xl bg-dark-950/80 backdrop-blur-md border border-slate-800/80 text-xs font-mono text-slate-200">
                      <span className="text-sky-400 font-bold">{profileData.name}</span> • Full Stack
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col items-center text-center p-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-600 p-[2px] shadow-glow-primary mb-4">
                      <div className="w-full h-full bg-dark-950 rounded-[14px] flex flex-col items-center justify-center">
                        <Terminal className="w-8 h-8 text-sky-400 mb-1" />
                        <span className="font-mono font-black text-2xl gradient-text-cyan tracking-wider">
                          FA
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {profileData.name}
                    </h3>
                    <p className="text-xs font-mono text-sky-400 mt-1">
                      &lt;FullStackEngineer /&gt;
                    </p>
                    <p className="text-[11px] text-slate-400 mt-2 font-mono bg-slate-950/70 px-3 py-1 rounded-full border border-slate-800">
                      Chittagong, Bangladesh
                    </p>
                  </div>
                )}

                {/* Floating Tech Badges */}
                <div className="absolute top-4 right-4 bg-dark-950/90 border border-cyan-500/40 px-2.5 py-1 rounded-lg shadow-lg flex items-center gap-1.5 backdrop-blur-md animate-float">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-cyan-300 font-semibold">React.js</span>
                </div>

                <div className="absolute bottom-14 left-3 bg-dark-950/90 border border-emerald-500/40 px-2.5 py-1 rounded-lg shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                  <Layers className="w-3 h-3 text-emerald-400" />
                  <span className="text-[11px] font-mono text-emerald-300 font-semibold">Node + Express</span>
                </div>

                <div className="absolute top-4 left-3 bg-dark-950/90 border border-green-500/40 px-2.5 py-1 rounded-lg shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                  <Database className="w-3 h-3 text-green-400" />
                  <span className="text-[11px] font-mono text-green-300 font-semibold">MongoDB</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
