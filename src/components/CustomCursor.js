import React, { useEffect, useRef } from 'react';

export default function CustomCursor({ dark }) {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const requestRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div 
        ref={cursorRef}
        style={{
          position: "fixed", top: -20, left: -20, width: 40, height: 40,
          border: `1px solid ${dark ? 'var(--cyan)' : 'var(--cyan)'}`, borderRadius: "50%",
          pointerEvents: "none", zIndex: 10000, 
          mixBlendMode: dark ? "difference" : "normal", // Fixed for light mode
          transition: "width 0.3s, height 0.3s, top 0.3s, left 0.3s",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: dark ? "transparent" : "rgba(0, 122, 255, 0.05)"
        }}
      >
        <div style={{ width: 4, height: 4, background: "var(--cyan)", borderRadius: "50%", opacity: 0.5 }} />
      </div>

      {/* Inner Dot */}
      <div 
        ref={dotRef}
        style={{
          position: "fixed", top: -3, left: -3, width: 6, height: 6,
          background: "var(--cyan)", borderRadius: "50%",
          pointerEvents: "none", zIndex: 10001,
          boxShadow: `0 0 15px ${dark ? 'var(--cyan)' : 'rgba(0, 122, 255, 0.5)'}`
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        body { cursor: none; }
        a, button, [role="button"] { cursor: none; }
        a:hover ~ #cursor, button:hover ~ #cursor {
          width: 60px; height: 60px; top: -30px; left: -30px;
          background: rgba(0, 122, 255, 0.1);
        }
      `}} />
    </>
  );
}
