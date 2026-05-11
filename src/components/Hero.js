import React from 'react';
import { Sparkles } from "lucide-react";
import { HERO } from "../data";

export default function Hero({ typeStr }) {
  return (
    <section id="hero" style={{ position: "relative", minHeight: "65vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", paddingTop: "20px" }}>
      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        
        {/* Status Badge */}
        <div className="rv in d1" style={{ marginBottom: 24 }}>
          <div className="st"><Sparkles size={14} /> {HERO.status}</div>
        </div>

        {/* Name Title */}
        <h1 className="rv in d1" style={{
          fontSize: "clamp(48px,10vw,100px)",
          fontWeight: 800, lineHeight: 0.9, marginBottom: 28, letterSpacing: "-0.05em"
        }}>
          {HERO.name} <span style={{ color: "var(--cyan)", textShadow: "0 0 30px var(--cyan-glow)" }}>{HERO.surname}</span>
        </h1>

        {/* Dynamic Tagline Row */}
        <div className="rv in d2" style={{
          fontSize: "clamp(20px,3vw,28px)",
          marginBottom: 36, color: "var(--head)", fontWeight: 600, fontFamily: "'Outfit', sans-serif",
          display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px"
        }}>
          <span style={{ borderRight: "2px solid var(--bdr)", paddingRight: 20, whiteSpace: "nowrap", minWidth: "fit-content" }}>{typeStr}</span>
          <span style={{ color: "var(--text)", opacity: 1 }}>AI Systems Architect</span>
        </div>

        {/* Description */}
        <p className="rv in d3" style={{
          fontSize: "clamp(18px,2.2vw,21px)", lineHeight: 1.7, color: "var(--text)",
          maxWidth: 720, margin: "0 auto 56px", textShadow: "0 2px 10px rgba(0,0,0,0.5)"
        }}>
          {HERO.description}
        </p>

      </div>
    </section>
  );
}
