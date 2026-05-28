import React from 'react';
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer({ onPlayTick }) {
  const handleEmailClick = (e) => {
    e.preventDefault();
    const user = "pandurangkhavale";
    const domain = "outlook.com";
    window.location.href = `mailto:${user}@${domain}`;
  };

  const socialLinks = [
    { n: "GitHub", i: <Github size={18} />, h: "https://github.com/PandurangKhavale", type: "link" },
    { n: "LinkedIn", i: <Linkedin size={18} />, h: "https://www.linkedin.com/in/pandurangkhavale/", type: "link" },
    { n: "X (Twitter)", i: <Twitter size={18} />, h: "https://x.com/pandurangkhavale", type: "link" },
    { n: "Email", i: <Mail size={18} />, type: "email" },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--bdr)", padding: "60px 0 40px", background: "var(--bg)", position: "relative" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "80px", marginBottom: "80px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: "var(--head)", letterSpacing: "-0.05em", fontFamily: "'Outfit', sans-serif" }}>pk</div>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, maxWidth: "360px" }}>
              An engineering-first approach to building intelligent web systems and high-performance software architectures.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, fontWeight: 700, color: "#10b981", letterSpacing: "0.05em" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 15px rgba(16,185,129,0.5)" }} />
              AVAILABLE FOR INTERNSHIPS
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div className="st">Social Connectivity</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {socialLinks.map((item, i) => {
                const styleObj = {
                  display: "flex", alignItems: "center", gap: 12, fontSize: 14, 
                  color: "var(--muted)", textDecoration: "none", transition: "all 0.4s",
                  padding: "12px 16px", borderRadius: "14px", border: "1px solid var(--bdr)", 
                  background: "var(--bg2)", cursor: "pointer", width: "100%", textAlign: "left"
                };
                
                const onMouseEnter = e => { e.currentTarget.style.color = "var(--head)"; e.currentTarget.style.borderColor = "var(--cyan)"; e.currentTarget.style.transform = "translateY(-4px)"; onPlayTick(); };
                const onMouseLeave = e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.transform = "translateY(0)"; };

                if (item.type === "email") {
                  return (
                    <button key={i} onClick={handleEmailClick} style={{...styleObj, background: "none", cursor: "pointer"}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                      <span style={{ color: "var(--cyan)", display: "flex" }}>{item.i}</span> {item.n}
                    </button>
                  );
                }
                return (
                  <a key={i} href={item.h} target="_blank" rel="noopener noreferrer" style={styleObj} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <span style={{ color: "var(--cyan)", display: "flex" }}>{item.i}</span> {item.n}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ width: "100%", height: 1, background: "var(--bdr)", marginBottom: "40px" }} />
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          <p style={{ fontSize: 13, color: "var(--muted)" }}>
            &copy; {new Date().getFullYear()} <strong style={{ color: "var(--head)" }}>Pandurang Khavale</strong>. Built with precision.
          </p>
          <div style={{ display: "flex", gap: "32px" }}>
            <span style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s", cursor: "pointer" }} onMouseEnter={e => e.currentTarget.style.color = "var(--head)"} onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>Privacy</span>
            <span style={{ fontSize: 12, color: "var(--muted)", textDecoration: "none", transition: "color 0.2s", cursor: "pointer" }} onMouseEnter={e => e.currentTarget.style.color = "var(--head)"} onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
