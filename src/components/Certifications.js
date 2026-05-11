import React from 'react';
import { Trophy, ExternalLink } from "lucide-react";

export default function Certifications({ certs, onPlayTick }) {
  return (
    <section id="certs" className="section-pad">
      <div className="container">
        <div className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="st sta" style={{ marginBottom: 16 }}><Trophy size={14} /> Professional Validation</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800 }}>Certifications & Achievements</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {certs.map((c, i) => (
            <div key={i} className="gl rv d1" style={{ padding: 32, display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "var(--bg2)", border: "1px solid var(--bdr)", display: "flex", alignItems: "center", justifyContent: "center", color: c.c, flexShrink: 0 }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.yr}</div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: "var(--head)", marginBottom: 4 }}>{c.role}</h3>
                <div style={{ fontSize: 13, color: "var(--muted)", fontWeight: 600, marginBottom: 10 }}>{c.org}</div>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5, marginBottom: 16 }}>{c.desc}</p>
                <a href={c.l} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, padding: "8px 12px", border: "1px solid var(--bdr)", borderRadius: 8, display: "inline-flex", gap: 8, color: "var(--head)", textDecoration: "none" }} onMouseEnter={onPlayTick}>
                  <ExternalLink size={14} /> Verify Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
