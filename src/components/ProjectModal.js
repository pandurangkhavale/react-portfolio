import React from 'react';
import { X, Github, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose, onPlayTick }) {
  if (!project) return null;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 2000,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "20px", backdropFilter: "blur(12px)", background: "rgba(0,0,0,0.4)"
    }} onClick={onClose}>
      
      <div 
        className="gl"
        style={{
          width: "100%", maxWidth: "800px", background: "var(--card)",
          border: "1px solid var(--bdr)", borderRadius: 32, overflow: "hidden",
          position: "relative", animation: "modal-in 0.4s cubic-bezier(0.2, 1, 0.2, 1)",
          boxShadow: "0 50px 100px rgba(0,0,0,0.3)"
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header / Accent Bar */}
        <div style={{ height: 6, background: `linear-gradient(90deg, ${project.accent}, var(--purple))` }} />
        
        <button 
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute", top: 20, right: 20, background: "var(--bg2)",
            border: "1px solid var(--bdr)", color: "var(--head)", padding: 10, borderRadius: "50%",
            cursor: "pointer", transition: "all 0.3s", zIndex: 10
          }}
          onMouseEnter={onPlayTick}
        >
          <X size={20} />
        </button>

        <div style={{ padding: "40px" }}>
          <div style={{ color: project.accent, marginBottom: 20 }}>{project.icon}</div>
          <div style={{ fontSize: 12, color: project.accent, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 12 }}>{project.sub}</div>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, color: "var(--head)", marginBottom: 24 }}>{project.title}</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, marginBottom: 40 }}>
            <div>
              <h4 style={{ fontSize: 13, color: "var(--muted)", textTransform: "uppercase", marginBottom: 12 }}>Technical Summary</h4>
              <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.8 }}>{project.desc}</p>
            </div>
            <div>
              <h4 style={{ fontSize: 13, color: "var(--muted)", textTransform: "uppercase", marginBottom: 12 }}>Key Technologies</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {project.tags.map(t => (
                  <span key={t} style={{ fontSize: 11, fontWeight: 600, color: project.accent, background: `${project.accent}15`, padding: "6px 14px", borderRadius: 100 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            <a href={project.gh} target="_blank" rel="noopener noreferrer" className="bo" onClick={onPlayTick} style={{ flex: 1, justifyContent: "center" }}>
              <Github size={18} /> View Repository
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="bp" onClick={onPlayTick} style={{ flex: 1, justifyContent: "center" }}>
                <ExternalLink size={18} /> Live Demonstration
              </a>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}} />
    </div>
  );
}
