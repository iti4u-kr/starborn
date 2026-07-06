"use client";
import { useEffect, useState } from "react";

const messages = [
  "우주를 가로질러 그날의 빛을 찾고 있어요...",
  "NASA의 기록 보관소를 탐색하는 중...",
  "별자리가 이야기를 준비하고 있어요...",
  "우주의 시간을 되감는 중...",
  "당신의 탄생일을 우주에 새기는 중...",
];

export default function LoadingCosmos() {
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIdx(i => (i + 1) % messages.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      minHeight: "60vh", gap: "2rem", padding: "2rem",
    }}>
      {/* Animated orbit */}
      <div style={{ position: "relative", width: "100px", height: "100px" }}>
        {/* Outer orbit ring */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          border: "1px solid rgba(139,92,246,0.3)",
          animation: "orbitSpin 3s linear infinite",
        }}>
          <div style={{
            position: "absolute", top: "-4px", left: "50%", transform: "translateX(-50%)",
            width: "8px", height: "8px", borderRadius: "50%",
            background: "var(--cosmos-purple)", boxShadow: "0 0 8px var(--cosmos-purple)",
          }} />
        </div>
        {/* Inner orbit ring */}
        <div style={{
          position: "absolute", inset: "20px", borderRadius: "50%",
          border: "1px solid rgba(236,72,153,0.3)",
          animation: "orbitSpin 1.8s linear infinite reverse",
        }}>
          <div style={{
            position: "absolute", top: "-3px", left: "50%", transform: "translateX(-50%)",
            width: "6px", height: "6px", borderRadius: "50%",
            background: "var(--cosmos-pink)", boxShadow: "0 0 6px var(--cosmos-pink)",
          }} />
        </div>
        {/* Center star */}
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontSize: "1.5rem", animation: "twinkle 1.5s ease-in-out infinite" }}>✦</span>
        </div>
      </div>

      {/* Loading text */}
      <div style={{ textAlign: "center" }}>
        <p style={{
          color: "var(--cosmos-muted)", fontSize: "0.9375rem", letterSpacing: "0.02em",
          transition: "opacity 0.5s",
          minHeight: "1.5rem",
        }}>
          {messages[msgIdx]}
        </p>
      </div>

      {/* Progress bar */}
      <div style={{
        width: "200px", height: "2px", background: "rgba(139,92,246,0.15)", borderRadius: "1px", overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          background: "linear-gradient(90deg, var(--cosmos-violet), var(--cosmos-pink))",
          animation: "loadBar 2.2s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes orbitSpin { to { transform: rotate(360deg); } }
        @keyframes loadBar {
          0% { width: 0%; margin-left: 0%; }
          50% { width: 60%; margin-left: 20%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}
