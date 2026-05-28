import React from 'react';
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact({ form, setForm, fSt, onSubmit, onPlayTick }) {
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate3d(${x * 0.35}px, ${y * 0.35}px, 0) scale(1.03)`;
  };

  const handleMouseLeave = (e) => {
    const el = e.currentTarget;
    el.style.transform = `translate3d(0, 0, 0) scale(1)`;
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const user = "pandurangkhavale";
    const domain = "outlook.com";
    window.location.href = `mailto:${user}@${domain}`;
  };

  const contactLinks = [
    { type: "email", i: <Mail size={18} />, l: "pandurangkhavale [at] outlook.com" },
    { type: "link", i: <Github size={18} />, l: "github.com/PandurangKhavale", h: "https://github.com/PandurangKhavale" },
    { type: "link", i: <Linkedin size={18} />, l: "linkedin.com/in/pandurangkhavale", h: "https://www.linkedin.com/in/pandurangkhavale/" },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="container">
        <div className="two-col">
          <div className="rv">
            <div className="st" style={{ marginBottom: 18 }}><Mail size={14} /> Direct Engagement</div>
            <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
              Let's build something amazing together
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", marginBottom: 32 }}>
              Whether you have a question, want to collaborate, or just want to say hi — my inbox is always open.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactLinks.map((item, i) => {
                if (item.type === "email") {
                  return (
                    <button key={i} onClick={handleEmailClick}
                      style={{ 
                        display: "flex", alignItems: "center", gap: 12, border: "none", background: "none", 
                        cursor: "none", color: "var(--muted)", fontSize: 14, transition: "all .2s", padding: 0,
                        textAlign: "left"
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = "var(--head)"; onPlayTick(); }}
                      onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; }}>
                      <span style={{ color: "var(--cyan)", display: "flex" }}>{item.i}</span>{item.l}
                    </button>
                  );
                }
                return (
                  <a key={i} href={item.h} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "var(--muted)", fontSize: 14, transition: "all .2s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--head)"; onPlayTick(); }}
                    onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; }}>
                    <span style={{ color: "var(--cyan)", display: "flex" }}>{item.i}</span>{item.l}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rv d2">
            <form className="gl" style={{ padding: 48, display: "flex", flexDirection: "column", gap: 24, background: "rgba(255,255,255,0.01)" }} onSubmit={onSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: "var(--head)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Full Name</label>
                <input className="inp" type="text" placeholder="Pandurang Khavale" required
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: "var(--head)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Email Address</label>
                <input className="inp" type="email" placeholder="hello@pk.dev" required
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: "var(--head)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Your Message</label>
                <textarea className="inp" placeholder="Tell me about your project..." required rows={4}
                  value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} />
              </div>
              <button 
                className="bp" 
                type="submit" 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ justifyContent: "center", padding: 22, width: "100%", marginTop: 12, fontSize: 18 }}
                disabled={fSt !== "idle"}
              >
                {fSt === "idle" ? (<><Send size={20} />Establish Connection</>) : fSt === "loading" ? "Processing..." : "Message Delivered! 🚀"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
