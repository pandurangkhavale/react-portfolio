import React from 'react';

export default function Background({ dark }) {
  const bgImage = dark ? "/bg-dark-pro.png" : "/bg-light-pro.png";
  const overlayGradient = dark 
    ? "radial-gradient(circle at center, rgba(2, 2, 4, 0.1) 0%, rgba(2, 2, 4, 0.7) 100%)"
    : "radial-gradient(circle at center, rgba(253, 253, 253, 0.0) 0%, rgba(253, 253, 253, 0.3) 100%)";
  const bgColor = dark ? "#020204" : "#fdfdfd";

  return (
    <div style={{ 
      position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none", 
      backgroundColor: bgColor, transition: "background-color 0.8s ease" 
    }}>
      
      {/* High-Quality Professional Background Image */}
      <div style={{
        position: "absolute",
        inset: -20, // slightly larger to allow subtle parallax or animation
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: dark ? 0.65 : 1.0,
        filter: dark ? "brightness(0.9) contrast(1.15)" : "brightness(1.0) contrast(1.05)",
        transition: "all 0.8s ease",
        animation: "subtle-zoom 30s infinite alternate ease-in-out"
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

