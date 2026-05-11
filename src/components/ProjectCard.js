import React from 'react';
import { Github, ExternalLink, Maximize2 } from "lucide-react";

function ProjectCard({ p, i, playHum, playTick, onOpenQuickView }) {
  return (
    <div className={`rv gl d${i + 1}`}
      style={{ overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}
      onMouseEnter={playHum}>
      <div style={{ height: 4, background: `linear-gradient(90deg,${p.accent},var(--purple))` }} />
      <div style={{ padding: "32px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div style={{ color: p.accent }}>{p.icon}</div>
          <button 
            onClick={() => onOpenQuickView(p)}
            style={{ 
              background: "rgba(255,255,255,0.05)", border: "1px solid var(--bdr)", 
              color: "var(--muted)", padding: "8px", borderRadius: "12px", 
              cursor: "pointer", transition: "all 0.3s" 
            }}
            onMouseEnter={playTick}
            aria-label="Quick View"
          >
            <Maximize2 size={18} />
          </button>
        </div>
        
        <div style={{ fontSize: 11, color: p.accent, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>{p.sub}</div>
        <h3 style={{ fontSize: 24, fontWeight: 800, color: "var(--head)", marginBottom: 16, lineHeight: 1.2 }}>{p.title}</h3>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>{p.desc}</p>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
          {p.tags.map(t => (
            <span key={t} style={{ fontSize: 11, fontWeight: 600, color: p.accent, background: `${p.accent}15`, padding: "6px 14px", borderRadius: 100 }}>{t}</span>
          ))}
        </div>
        
        <div style={{ display: "flex", gap: 12, marginTop: "auto" }}>
          <a href={p.gh} target="_blank" rel="noopener noreferrer" className="bo" onClick={playTick} style={{ padding: "12px 20px", fontSize: 14, flex: 1, justifyContent: "center" }}>
            <Github size={16} />Code
          </a>
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="bp" onClick={playTick} style={{ padding: "12px 20px", fontSize: 14, flex: 1, justifyContent: "center" }}>
              <ExternalLink size={16} />Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
