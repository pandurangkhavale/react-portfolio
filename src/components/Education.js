import React from 'react';
import { GraduationCap } from "lucide-react";

export default function Education({ education }) {
  return (
    <section id="education" className="section-pad">
      <div className="container" style={{ maxWidth: 900 }}>
        <div className="rv" style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="st sta" style={{ marginBottom: 16 }}><GraduationCap size={14} /> Academic Foundation</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800 }}>Education</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {education.map((e, i) => (
            <div key={i} className="gl rv d1" style={{ padding: "32px 40px", display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ flex: "0 0 100px", fontSize: 14, fontWeight: 800, color: "var(--head)", fontFamily: "'JetBrains Mono', monospace" }}>{e.yr}</div>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 12 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "var(--head)" }}>{e.role}</h3>
                  <span style={{ fontSize: 13, fontWeight: 700, color: e.c, background: `${e.c}15`, padding: "6px 16px", borderRadius: 100 }}>{e.stats}</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>{e.org}</div>
                <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.7, maxWidth: 700, opacity: 0.9 }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
