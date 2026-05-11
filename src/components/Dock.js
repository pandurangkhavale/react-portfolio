import React from 'react';
import { Sun, Moon, Volume2, VolumeX, Menu, X } from "lucide-react";

export default function Dock({ 
  navLinks, actSec, muted, setMuted, dark, setDark, menuOpen, setMenuOpen, onPlayTick 
}) {
  return (
    <div className="dock-container">
      <a href="#hero" className="dock-item" style={{ width: "auto", padding: "0 14px", background: "var(--bg2)" }} aria-label="Home" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); onPlayTick(); }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "var(--head)", letterSpacing: "-0.05em", fontFamily: "'Outfit', sans-serif" }}>pk</div>
        <span className="dock-label">Home</span>
      </a>

      <div className="dlinks">
        {navLinks.map(({ id, l, ic }) => (
          <a key={id} href={`#${id}`} className={`dock-item${actSec === id ? " act" : ""}`} 
            style={{ color: actSec === id ? "var(--cyan)" : "var(--text)", opacity: actSec === id ? 1 : 0.7 }}
            onClick={onPlayTick}
            onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = "var(--head)"; }}
            onMouseLeave={e => { if (actSec !== id) { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.color = "var(--text)"; } }}
          >
            {ic}
            <span className="dock-label">{l}</span>
          </a>
        ))}
      </div>

      <div className="ctrl-grp">
        <button className="dock-item" onClick={() => { setMuted(v => !v); }} aria-label="Toggle sound">
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          <span className="dock-label">{muted ? "Unmute" : "Mute"}</span>
        </button>
        <button className="dock-item" onClick={() => { setDark(v => !v); onPlayTick(); }} aria-label="Toggle theme">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
          <span className="dock-label">{dark ? "Light Mode" : "Dark Mode"}</span>
        </button>
        <button className="mbtn dock-item" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          position: "absolute", bottom: "80px", left: "50%", transform: "translateX(-50%)",
          background: "var(--card)", border: "1px solid var(--bdr)", borderRadius: 24,
          padding: "20px", display: "flex", flexDirection: "column", gap: 16, width: "90vw", maxWidth: "300px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)", backdropFilter: "blur(24px)"
        }}>
          <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", textAlign: "center", marginBottom: 8 }}>Menu</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {navLinks.map(({ id, l, ic }) => (
              <a key={id} href={`#${id}`} className={`dock-item${actSec === id ? " act" : ""}`}
                style={{ width: "100%", height: 56, flexDirection: "column", gap: 6 }}
                onClick={() => { setMenuOpen(false); onPlayTick(); }}>
                {ic}
                <span style={{ fontSize: 11, fontFamily: "'Inter',sans-serif", fontWeight: 600 }}>{l}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
