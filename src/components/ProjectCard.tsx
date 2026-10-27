import React from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';
import { Project } from '../types';
import { ProjectThumbnail } from './ProjectThumbnails';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="glass-card rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-card-subtle">
      <div>
        {/* Visual Thumbnail */}
        <div className="p-3 bg-dark-900/60 border-b border-slate-800/80">
          <ProjectThumbnail type={project.thumbnailType} />
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Category & Status */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Interactive Demo
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>

          {/* Subtitle / Short Description */}
          <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.techBadges.map((badge, idx) => (
              <span
                key={idx}
                className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border ${badge.color}`}
              >
                {badge.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-6 pt-0 mt-2">
        <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
          {/* View Details Button */}
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-sm flex items-center justify-center gap-1.5 transition-all"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Live Preview Button */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View live demo or sample preview"
              className="py-2.5 px-3 rounded-xl text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center gap-1 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live</span>
            </a>
          )}

          {/* Client Repository */}
          {project.clientRepoUrl && (
            <a
              href={project.clientRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub Repository"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
