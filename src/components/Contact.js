import React from 'react';
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

export default function Contact({ form, setForm, fSt, onSubmit, onPlayTick }) {
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
              {[
                { i: <Mail size={18} />, l: "pandurangkhavale@outlook.com", h: "mailto:pandurangkhavale@outlook.com" },
                { i: <Phone size={18} />, l: "+91 7709900758", h: "tel:+917709900758" },
                { i: <Github size={18} />, l: "github.com/PandurangKhavale", h: "https://github.com/PandurangKhavale" },
                { i: <Linkedin size={18} />, l: "linkedin.com/in/pandurangkhavale", h: "https://www.linkedin.com/in/pandurangkhavale/" },
              ].map((item, i) => (
                <a key={i} href={item.h} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "var(--muted)", fontSize: 14, transition: "all .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--head)"; onPlayTick(); }}
                  onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; }}>
                  <span style={{ color: "var(--cyan)" }}>{item.i}</span>{item.l}
                </a>
              ))}
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
              <button className="bp" type="submit" style={{ justifyContent: "center", padding: 22, width: "100%", marginTop: 12, fontSize: 18 }}
                disabled={fSt !== "idle"}>
                {fSt === "idle" ? (<><Send size={20} />Establish Connection</>) : fSt === "loading" ? "Processing..." : "Message Delivered! 🚀"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
