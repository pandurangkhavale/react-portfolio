import React from 'react';
import { Briefcase } from "lucide-react";

export default function Experience({ work }) {
  return (
    <section id="experience" className="section-pad">
      <div className="container">
        <div className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="st sta" style={{ marginBottom: 16 }}><Briefcase size={14} /> Professional Experience</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800 }}>Internships & Roles</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          {work.map((w, i) => (
            <div key={i} className="gl rv d1" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--head)" }}>{w.role}</h3>
                  <div style={{ fontSize: 14, color: w.c, fontWeight: 600, marginTop: 4 }}>{w.org}</div>
                </div>
                <span style={{ fontSize: "12px", color: "var(--head)", background: "var(--bg2)", padding: "6px 14px", borderRadius: 100, border: "1px solid var(--bdr)", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>{w.yr}</span>
              </div>
              <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.6, opacity: 0.9 }}>{w.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {w.tags.map(t => (
                  <span key={t} style={{ fontSize: 10, fontWeight: 700, color: "var(--head)", background: "var(--bg2)", padding: "4px 10px", borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
