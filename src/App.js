import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUp, User, Cpu, LayoutTemplate, Briefcase, GraduationCap, Trophy, BookOpen, Mail } from "lucide-react";

// Data
import { 
  WORDS, STATS, SKILLS, TECH, PROJECTS, WORK, EDUCATION, CERTS, BLOG, SHOW_TIMELINE 
} from "./data";

// Components
import Background from "./components/Background";
import CustomCursor from "./components/CustomCursor";
import Dock from "./components/Dock";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [muted, setMuted] = useState(true);
  const [typeStr, setTypeStr] = useState("");
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [fSt, setFSt] = useState("idle");
  const [actSec, setActSec] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [selectedProject, setSelectedProject] = useState(null);

  const progEl = useRef(null);
  const bttEl = useRef(null);
  const statsEl = useRef(null);
  const counted = useRef(false);
  const acx = useRef(null);

  useEffect(() => {
    if (dark) {
      document.body.classList.remove("LM");
    } else {
      document.body.classList.add("LM");
    }
  }, [dark]);

  useEffect(() => {
    let wi = 0, ci = 0, del = false, tid;
    const go = () => {
      const w = WORDS[wi];
      if (!del) {
        ci++; setTypeStr(w.slice(0, ci));
        if (ci === w.length) { del = true; tid = setTimeout(go, 2000); return; }
        tid = setTimeout(go, 60);
      } else {
        ci--; setTypeStr(w.slice(0, ci));
        if (ci === 0) { del = false; wi = (wi + 1) % WORDS.length; tid = setTimeout(go, 500); return; }
        tid = setTimeout(go, 30);
      }
    };
    tid = setTimeout(go, 1000);
    return () => clearTimeout(tid);
  }, []);

  /* ── Scroll progress + BTT ── */
  useEffect(() => {
    const bar = progEl.current; const btt = bttEl.current;
    const onScroll = () => {
      const sc = window.scrollY;
      const mxS = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (sc / mxS * 100) + "%";
      if (btt) { sc > 300 ? btt.classList.add("show") : btt.classList.remove("show"); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── IntersectionObserver: reveal elements ── */
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.02, rootMargin: "0px 0px -50px 0px" });
    document.querySelectorAll(".rv").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── Active nav section ── */
  useEffect(() => {
    const ids = ["hero", "stats", "about", "skills", "projects", "experience", "education", "certs", "blog", "contact"];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActSec(e.target.id); });
    }, { threshold: .3, rootMargin: "-10% 0px -60% 0px" });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  /* ── Counter animation ── */
  useEffect(() => {
    const el = statsEl.current; if (!el) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !counted.current) {
        counted.current = true;
        STATS.forEach((s, i) => {
          let n = 0;
            const inc = () => {
            n = Math.min(n + Math.max(1, Math.ceil(s.n / 15)), s.n);
            setCounters(c => { const x = [...c]; x[i] = n; return x; });
            if (n < s.n) setTimeout(inc, 16 + i * 4);
          };
          setTimeout(inc, i * 60);
        });
      }
    }, { threshold: .3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── Audio user-gesture activation listener ── */
  useEffect(() => {
    const resumeAudio = () => {
      if (acx.current && acx.current.state === "suspended") {
        acx.current.resume().catch(() => {});
      }
    };
    window.addEventListener("click", resumeAudio, { once: true });
    window.addEventListener("touchstart", resumeAudio, { once: true });
    return () => {
      window.removeEventListener("click", resumeAudio);
      window.removeEventListener("touchstart", resumeAudio);
    };
  }, []);

  /* ── Audio helpers ── */
  const getAcx = () => {
    if (!acx.current) {
      acx.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return acx.current;
  };
  const playTick = useCallback(() => {
    if (muted) return;
    try {
      const ctx = getAcx();
      if (ctx.state === "suspended") return;
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.frequency.value = 1800; o.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0.04, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + .02);
      o.start(); o.stop(ctx.currentTime + .02);
    } catch (e) { }
  }, [muted]);
  const playHum = useCallback(() => {
    if (muted) return;
    try {
      const ctx = getAcx();
      if (ctx.state === "suspended") return;
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.type = "sine"; o.frequency.value = 80; o.connect(g); g.connect(ctx.destination);
      g.gain.setValueAtTime(0.025, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + .15);
      o.start(); o.stop(ctx.currentTime + .15);
    } catch (e) { }
  }, [muted]);
  const playChime = useCallback(() => {
    if (muted) return;
    try {
      const ctx = getAcx();
      if (ctx.state === "suspended") return;
      [261.63, 329.63, 392].forEach((f, i) => {
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type = "sine"; o.frequency.value = f; o.connect(g); g.connect(ctx.destination);
        const t = ctx.currentTime + i * .12;
        g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.1, t + .04);
        g.gain.exponentialRampToValueAtTime(0.0001, t + .4);
        o.start(t); o.stop(t + .4);
      });
    } catch (e) { }
  }, [muted]);

  /* ── Form submit ── */
  const handleSubmit = async e => {
    e.preventDefault(); 
    setFSt("loading"); 
    playChime();

    const key = process.env.REACT_APP_WEB3FORMS_KEY;

    if (!key) {
      // Mock submit for local development if access key is not set
      await new Promise(r => setTimeout(r, 1600));
      setFSt("done");
      setTimeout(() => { 
        setFSt("idle"); 
        setForm({ name: "", email: "", msg: "" }); 
      }, 2800);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: key,
          name: form.name,
          email: form.email,
          message: form.msg,
          subject: `Portfolio Contact from ${form.name}`
        })
      });

      const data = await response.json();
      if (data.success) {
        setFSt("done");
        setTimeout(() => { 
          setFSt("idle"); 
          setForm({ name: "", email: "", msg: "" }); 
        }, 2800);
      } else {
        setFSt("idle");
        alert(data.message || "Form submission failed. Please try again.");
      }
    } catch (err) {
      setFSt("idle");
      alert("A network error occurred. Please try again.");
    }
  };

  const navLinks = [
    { id: "about", l: "About", ic: <User size={20} /> },
    { id: "skills", l: "Skills", ic: <Cpu size={20} /> },
    { id: "projects", l: "Projects", ic: <LayoutTemplate size={20} /> },
    { id: "experience", l: "Experience", ic: <Briefcase size={20} /> },
    { id: "education", l: "Education", ic: <GraduationCap size={20} /> },
    { id: "certs", l: "Certs", ic: <Trophy size={20} /> },
    { id: "blog", l: "Blog", ic: <BookOpen size={20} /> },
    { id: "contact", l: "Contact", ic: <Mail size={20} /> }
  ];

  return (
    <div style={{ minHeight: "100vh", position: "relative", paddingBottom: "120px" }}>
      <Background dark={dark} />
      <CustomCursor dark={dark} />

      {/* Scroll progress bar */}
      <div ref={progEl} className="pb" style={{ width: "0%" }} />

      <Dock 
        navLinks={navLinks} actSec={actSec} 
        muted={muted} setMuted={setMuted} 
        dark={dark} setDark={setDark} 
        menuOpen={menuOpen} setMenuOpen={setMenuOpen} 
        onPlayTick={playTick} 
      />

      <main>
        <Hero typeStr={typeStr} />
        <Stats statsRef={statsEl} statsData={STATS} counters={counters} />
        <About onPlayTick={playTick} />
        <Skills skills={SKILLS} tech={TECH} onPlayTick={playTick} />
        
        <section id="projects" className="section-pad">
          <div className="container">
            <div className="rv" style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="st" style={{ marginBottom: 16 }}><LayoutTemplate size={14} /> Engineering Impact</div>
              <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800 }}>Projects that ship</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}>
              {PROJECTS.map((p, i) => (
                <ProjectCard 
                  key={i} p={p} i={i} 
                  playHum={playHum} playTick={playTick} 
                  onOpenQuickView={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </section>

        {SHOW_TIMELINE && <Experience work={WORK} />}
        <Education education={EDUCATION} />
        <Certifications certs={CERTS} onPlayTick={playTick} />
        <Blog blog={BLOG} onPlayTick={playTick} />
        <Contact form={form} setForm={setForm} fSt={fSt} onSubmit={handleSubmit} onPlayTick={playTick} />
      </main>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onPlayTick={playTick} 
      />

      <Footer onPlayTick={playTick} />

      {/* Back to top */}
      <button ref={bttEl} className="btt bp"
        onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); playTick(); }}
        aria-label="Back to top"
        style={{ border: "none", padding: "12px 14px", boxShadow: "0 8px 30px rgba(0,212,255,.35)" }}>
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
