"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "@/components/DatePicker";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDateSubmit(date: string) {
    setIsLoading(true);
    router.push(`/result?date=${date}`);
  }

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 1rem",
      position: "relative",
      zIndex: 1,
    }}>
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "3rem", maxWidth: "600px" }}>
        {/* Logo / Icon */}
        <div style={{
          width: "80px", height: "80px", margin: "0 auto 1.5rem",
          background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "2.5rem", position: "relative",
        }}>
          <span style={{ animation: "twinkle 2s ease-in-out infinite" }}>✦</span>
          <div style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            border: "1px solid rgba(139,92,246,0.2)",
            animation: "pulseRing 2s ease-out infinite",
          }} />
        </div>

        <h1 style={{
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 800,
          background: "linear-gradient(135deg, #e2e8f0 0%, #c4b5fd 50%, #f9a8d4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: "1rem",
        }}>
          STARBORN
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "var(--cosmos-muted)",
          lineHeight: 1.6,
          marginBottom: "0.5rem",
        }}>
          당신이 태어난 날,
        </p>
        <p style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "#c4b5fd",
          lineHeight: 1.6,
          fontWeight: 500,
        }}>
          우주는 이런 모습이었어요 ✦
        </p>
      </div>

      {/* Input Card */}
      <div className="cosmos-card fade-in-up-2" style={{
        width: "100%", maxWidth: "440px",
        padding: "2rem",
        marginBottom: "2rem",
      }}>
        <h2 style={{
          fontSize: "1rem",
          fontWeight: 600,
          color: "var(--cosmos-muted)",
          marginBottom: "1.5rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          textAlign: "center",
        }}>
          생년월일을 입력하세요
        </h2>
        <DatePicker onSubmit={handleDateSubmit} isLoading={isLoading} />
      </div>

      {/* Features preview */}
      <div className="fade-in-up-3" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "0.75rem",
        maxWidth: "440px",
        width: "100%",
      }}>
        {[
          { icon: "🔭", label: "NASA 우주 사진" },
          { icon: "✨", label: "별자리 운세" },
          { icon: "🔮", label: "타로 카드" },
        ].map(f => (
          <div key={f.label} style={{
            background: "rgba(13,13,43,0.6)",
            border: "1px solid rgba(139,92,246,0.12)",
            borderRadius: "0.875rem",
            padding: "0.875rem 0.5rem",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "1.375rem", marginBottom: "0.375rem" }}>{f.icon}</div>
            <div style={{ fontSize: "0.75rem", color: "var(--cosmos-muted)", fontWeight: 500 }}>{f.label}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p style={{
        marginTop: "3rem",
        fontSize: "0.75rem",
        color: "rgba(148,163,184,0.4)",
        letterSpacing: "0.05em",
      }}>
        Powered by NASA APOD · Claude AI
      </p>

      <style>{`
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }
      `}</style>
    </main>
  );
}
