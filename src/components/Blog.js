import React from 'react';
import { BookOpen, Clock } from "lucide-react";

export default function Blog({ blog, onPlayTick }) {
  return (
    <section id="blog" className="section-pad">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="rv" style={{ textAlign: "center", marginBottom: 32 }}>
          <div className="st" style={{ marginBottom: 16 }}><BookOpen size={14} /> Technical Insights</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800 }}>
            Thoughts on code & craft
          </h2>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(310px,1fr))", gap: 20
        }}>
          {blog.map((b, i) => (
            <div key={i} className={`rv gl bc d${i + 1}`}
              style={{ padding: "26px 24px", cursor: "pointer" }}
              onMouseEnter={onPlayTick}>
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", marginBottom: 14
              }}>
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  color: i % 2 ? "var(--amber)" : "var(--cyan)",
                  background: i % 2 ? "rgba(255,184,0,.12)" : "rgba(0,212,255,.12)",
                  padding: "4px 11px", borderRadius: 50
                }}>{b.cat}</span>
                <span style={{
                  display: "flex", alignItems: "center", gap: 5,
                  fontSize: 11, color: "var(--muted)"
                }}>
                  <Clock size={11} />{b.min} read
                </span>
              </div>
              <h3 style={{
                fontSize: 16, fontWeight: 700,
                color: "var(--head)", marginBottom: 10, lineHeight: 1.4
              }}>{b.t}</h3>
              <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.65, marginBottom: 18 }}>{b.sub}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: "var(--muted)" }}>
                <div style={{
                  width: 26, height: 26, borderRadius: "50%",
                  background: "linear-gradient(135deg,var(--cyan),var(--amber))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700, color: "#000"
                }}>P</div>
                <span>Pandurang Khavale</span>
                <span style={{ marginLeft: "auto" }}>{b.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="rv" style={{ textAlign: "center", marginTop: 40 }}>
          <button className="bo" onClick={onPlayTick}
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <BookOpen size={16} />Explore Research & Archive
          </button>
        </div>
      </div>
    </section>
  );
}
