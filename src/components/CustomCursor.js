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

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .gl, .dock-item, [onClick]')) {
        if (cursorRef.current) cursorRef.current.classList.add('hovered');
        if (dotRef.current) dotRef.current.classList.add('hovered');
      }
    };

    const onMouseOut = (e) => {
      const leavingTo = e.relatedTarget;
      if (!leavingTo || !leavingTo.closest('a, button, [role="button"], .gl, .dock-item, [onClick]')) {
        if (cursorRef.current) cursorRef.current.classList.remove('hovered');
        if (dotRef.current) dotRef.current.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

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
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div 
        ref={cursorRef}
        className="cursor-outer"
        style={{
          position: "fixed", top: -20, left: -20, width: 40, height: 40,
          border: `1px solid var(--cyan)`, borderRadius: "50%",
          pointerEvents: "none", zIndex: 10000, 
          mixBlendMode: dark ? "difference" : "normal",
          transition: "width 0.3s, height 0.3s, top 0.3s, left 0.3s, background-color 0.3s, border-color 0.3s",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: dark ? "transparent" : "rgba(0, 122, 255, 0.05)"
        }}
      >
        <div style={{ width: 4, height: 4, background: "var(--cyan)", borderRadius: "50%", opacity: 0.5 }} />
      </div>

      {/* Inner Dot */}
      <div 
        ref={dotRef}
        className="cursor-dot"
        style={{
          position: "fixed", top: -3, left: -3, width: 6, height: 6,
          background: "var(--cyan)", borderRadius: "50%",
          pointerEvents: "none", zIndex: 10001,
          boxShadow: `0 0 15px ${dark ? 'var(--cyan)' : 'rgba(0, 122, 255, 0.5)'}`,
          transition: "width 0.2s, height 0.2s, top 0.2s, left 0.2s, background-color 0.2s"
        }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        body { cursor: none !important; }
        a, button, [role="button"], .gl, .dock-item { cursor: none !important; }
        
        .cursor-outer.hovered {
          width: 60px !important;
          height: 60px !important;
          top: -30px !important;
          left: -30px !important;
          background: ${dark ? 'rgba(0, 212, 255, 0.15)' : 'rgba(0, 122, 255, 0.12)'} !important;
          border-color: var(--purple) !important;
        }

        .cursor-dot.hovered {
          width: 12px !important;
          height: 12px !important;
          top: -6px !important;
          left: -6px !important;
          background-color: var(--purple) !important;
        }
      `}} />
    </>
  );
}
