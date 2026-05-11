import React from 'react';

export default function Stats({ statsRef, statsData, counters }) {
  return (
    <section id="stats" ref={statsRef} className="section-pad">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 24 }}>
          {statsData.map((s, i) => (
            <div key={i} className={`rv gl d${i + 1}`}
              style={{ padding: "32px 24px", textAlign: "center", position: "relative" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
              <div className="sn" style={{ color: "var(--head)", fontSize: 48 }}>
                {counters[i]}{s.s}
              </div>
              <div style={{
                fontSize: 12, color: "var(--muted)", marginTop: 10, fontWeight: 700,
                letterSpacing: ".08em", textTransform: "uppercase"
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
