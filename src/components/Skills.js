import React from 'react';
import { Cpu } from "lucide-react";

const SkillCircle = ({ pct, color, size = 60 }) => {
  const radius = size / 2 - 5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div style={{ position: "relative", width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="transparent"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="4"
        />
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 2s ease-out" }}
        />
      </svg>
      <span style={{ position: "absolute", fontSize: "12px", fontWeight: "700", color: "var(--head)", fontFamily: "'JetBrains Mono', monospace" }}>
        {pct}%
      </span>
    </div>
  );
};

export default function Skills({ skills, tech, onPlayTick }) {
  return (
    <section id="skills" className="section-pad">
      <div className="container">
        <div className="rv" style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="st sta" style={{ marginBottom: 16 }}><Cpu size={14} /> Core Competencies</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, marginBottom: 12 }}>
            Crafted with care & curiosity
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
            Hands-on experience with modern technologies and engineering principles.
          </p>
        </div>

        <div className="rv d1" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24, marginBottom: 60
        }}>
          {skills.map((sk, i) => (
            <div key={i} className="gl" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }} onMouseEnter={onPlayTick}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ color: i % 2 === 0 ? "var(--cyan)" : "var(--amber)" }}>{sk.ic}</span>
                  <span style={{ fontSize: "16px", fontWeight: "700", color: "var(--head)" }}>{sk.name}</span>
                </div>
                <SkillCircle pct={sk.pct} color={i % 2 === 0 ? "var(--cyan)" : "var(--amber)"} />
              </div>
              <div style={{ fontSize: "14px", color: "var(--text)", lineHeight: "1.7", opacity: 0.9 }}>
                {sk.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Marquee */}
        <div className="rv d2" style={{ overflow: "hidden", borderRadius: 12, border: "1px solid var(--bdr)", padding: "16px 0", background: "var(--bg2)" }}>
          <div style={{ display: "flex", overflow: "hidden" }}>
            <div className="mqt">
              {[...tech, ...tech].map((t, i) => (
                <div key={i} style={{
                  whiteSpace: "nowrap", padding: "0 24px",
                  fontSize: 12, fontWeight: 600, color: "var(--muted)", display: "flex", alignItems: "center", gap: 8
                }}>
                  <span style={{ color: "var(--cyan)", opacity: .45 }}>◆</span>{t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
