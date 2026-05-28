import React from 'react';
import { Github, ExternalLink, Maximize2 } from "lucide-react";

function ProjectCard({ p, i, playHum, playTick, onOpenQuickView }) {
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = x - xc;
    const dy = y - yc;
    
    const maxRot = 12;
    const rx = -(dy / yc) * maxRot;
    const ry = (dx / xc) * maxRot;
    
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
    
    const glare = el.querySelector('.card-glare');
    if (glare) {
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      glare.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255, 255, 255, 0.12) 0%, transparent 60%)`;
    }
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    const glare = el.querySelector('.card-glare');
    if (glare) {
      glare.style.background = `transparent`;
    }
  };

  return (
    <div className={`rv gl d${i + 1}`}
      style={{ 
        overflow: "hidden", display: "flex", flexDirection: "column", height: "100%",
        transformStyle: "preserve-3d",
        transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: "transform 0.4s cubic-bezier(0.2, 1, 0.2, 1), border-color 0.3s, box-shadow 0.3s"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={playHum}>
      
      {/* Dynamic 3D Glare Light Reflection */}
      <div className="card-glare" style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 3,
        background: "transparent", transition: "background 0.1s ease"
      }} />

      <div style={{ height: 4, background: `linear-gradient(90deg,${p.accent},var(--purple))` }} />
      <div style={{ padding: "32px", display: "flex", flexDirection: "column", flexGrow: 1, transformStyle: "preserve-3d" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, transformStyle: "preserve-3d" }}>
          <div style={{ color: p.accent, transform: "translateZ(30px)" }}>{p.icon}</div>
          <button 
            onClick={() => onOpenQuickView(p)}
            style={{ 
              background: "rgba(255,255,255,0.05)", border: "1px solid var(--bdr)", 
              color: "var(--muted)", padding: "8px", borderRadius: "12px", 
              cursor: "pointer", transition: "all 0.3s",
              transform: "translateZ(25px)"
            }}
            onMouseEnter={playTick}
            aria-label="Quick View"
          >
            <Maximize2 size={18} />
          </button>
        </div>
        
        <div style={{ 
          fontSize: 11, color: p.accent, fontWeight: 700, letterSpacing: ".08em", 
          textTransform: "uppercase", marginBottom: 12, fontFamily: "'JetBrains Mono', monospace",
          transform: "translateZ(15px)" 
        }}>{p.sub}</div>
        
        <h3 style={{ 
          fontSize: 24, fontWeight: 800, color: "var(--head)", marginBottom: 16, lineHeight: 1.2,
          transform: "translateZ(20px)" 
        }}>{p.title}</h3>
        
        <p style={{ 
          fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 24,
          transform: "translateZ(10px)" 
        }}>{p.desc}</p>
        
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32, transform: "translateZ(12px)" }}>
          {p.tags.map(t => (
            <span key={t} style={{ fontSize: 11, fontWeight: 600, color: p.accent, background: `${p.accent}15`, padding: "6px 14px", borderRadius: 100 }}>{t}</span>
          ))}
        </div>
        
        <div style={{ display: "flex", gap: 12, marginTop: "auto", transform: "translateZ(15px)" }}>
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
