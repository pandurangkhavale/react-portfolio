import React, { useEffect, useRef } from 'react';

export default function Background({ dark }) {
  const bgImage = dark ? "/bg-dark-pro.png" : "/bg-light-pro.png";
  const overlayGradient = dark 
    ? "radial-gradient(circle at center, rgba(2, 2, 4, 0.1) 0%, rgba(2, 2, 4, 0.7) 100%)"
    : "radial-gradient(circle at center, rgba(253, 253, 253, 0.0) 0%, rgba(253, 253, 253, 0.3) 100%)";
  const bgColor = dark ? "#020204" : "#fdfdfd";

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    const connectionDistance = 140;
    const mouse = { x: null, y: null, radius: 180 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
        this.colorIndex = Math.random() > 0.5 ? 1 : 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 0.5;
            this.y += (dy / dist) * force * 0.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        let pColor;
        if (dark) {
          pColor = this.colorIndex === 1 ? 'rgba(0, 212, 255, 0.4)' : 'rgba(175, 82, 222, 0.4)';
        } else {
          pColor = this.colorIndex === 1 ? 'rgba(0, 122, 255, 0.3)' : 'rgba(175, 82, 222, 0.3)';
        }
        
        ctx.fillStyle = pColor;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);

            const alpha = (connectionDistance - dist) / connectionDistance * (dark ? 0.08 : 0.06);
            let strokeColor = dark ? `rgba(0, 212, 255, ${alpha})` : `rgba(0, 122, 255, ${alpha})`;
            
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dark]);

  return (
    <div style={{ 
      position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none", 
      backgroundColor: bgColor, transition: "background-color 0.8s ease" 
    }}>
      
      {/* High-Quality Professional Background Image */}
      <div style={{
        position: "absolute",
        inset: -20,
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: dark ? 0.65 : 1.0,
        filter: dark ? "brightness(0.9) contrast(1.15)" : "brightness(1.0) contrast(1.05)",
        transition: "all 0.8s ease",
        animation: "subtle-zoom 30s infinite alternate ease-in-out"
      }} />

      {/* Interactive 3D Particle Canvas */}
      <canvas 
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          opacity: dark ? 0.85 : 0.6,
          pointerEvents: "none",
          transition: "opacity 0.8s ease"
        }}
      />

      {/* Ambient Floating Blobs for Glassmorphism Depth */}
      <div className="blob" style={{
        top: "-15%",
        left: "-15%",
        background: dark 
          ? "radial-gradient(circle, var(--cyan-glow) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(0, 122, 255, 0.15) 0%, transparent 70%)",
      }} />
      <div className="blob" style={{
        bottom: "-15%",
        right: "-15%",
        background: dark 
          ? "radial-gradient(circle, hsla(270, 100%, 65%, 0.12) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(175, 82, 222, 0.15) 0%, transparent 70%)",
        animationDelay: "-10s"
      }} />

      {/* Visibility Overlay (Ensures Text Legibility) */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: overlayGradient,
        transition: "background 0.8s ease"
      }} />

      {/* Subtle Noise Texture for Premium Feel */}
      <div style={{
        position: "absolute", inset: 0,
        opacity: dark ? 0.03 : 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        mixBlendMode: dark ? "overlay" : "multiply",
      }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
      `}} />
    </div>
  );
}

