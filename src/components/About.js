import React from 'react';
import { User, FileText, MapPin, GraduationCap, Lightbulb } from "lucide-react";

export default function About({ onPlayTick }) {
  return (
    <section id="about" className="section-pad">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="rv" style={{ textAlign: "center" }}>
          <div className="st" style={{ marginBottom: 18 }}><User size={14} /> Engineering Identity</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16, textAlign: "center" }}>
            Building at the intersection of AI & Engineering
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.9, color: "var(--muted)", marginBottom: 40, textAlign: "center", maxWidth: "780px", margin: "0 auto 40px" }}>
            I'm a <strong style={{ color: "var(--head)" }}>final-year Computer Science and Business Systems student</strong> at <strong style={{ color: "var(--head)" }}>KIT's College of Engineering (Autonomous)</strong> with a focus on <strong style={{ color: "var(--cyan)" }}>AI Engineering</strong>. 
            I enjoy building practical applications using Python, especially around <strong style={{ color: "var(--head)" }}>Generative AI, LLMs, and RAG</strong>. 
            My passion lies in bridging the gap between theoretical research and <strong style={{ color: "var(--text)" }}>production-ready intelligence</strong>. 
            Currently exploring the frontiers of <strong style={{ color: "var(--cyan)" }}>Large Language Models</strong> and seeking high-impact opportunities in AI engineering.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 40 }}>
            <a href="resume.pdf" download="Pandurang_Khavale_Resume.pdf" className="bp" onClick={onPlayTick} style={{ padding: "18px 36px" }}>
              <FileText size={20} />Access Professional CV
            </a>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", width: "100%", maxWidth: "600px", margin: "0 auto" }}>
            {[[<MapPin size={14} />, "Kolhapur, India"], [<GraduationCap size={14} />, "B.Tech in CSBS"], [<Lightbulb size={14} />, "GenAI Specialist"]].map(([e, t], i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 8, fontSize: "clamp(11px, 2vw, 13px)",
                color: "var(--muted)", background: "var(--bg2)", border: "1px solid var(--bdr)",
                borderRadius: 100, padding: "8px 16px", whiteSpace: "nowrap"
              }}>
                <span style={{ color: "var(--cyan)" }}>{e}</span><span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
