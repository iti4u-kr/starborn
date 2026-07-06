"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { tarotDeck, TarotCard } from "@/lib/tarotDeck";
import LoadingCosmos from "@/components/LoadingCosmos";

interface Interpretation {
  symbolism: string;
  mainMessage: string;
  love: string;
  career: string;
  advice: string;
  warning: string;
  reflection: string;
  affirmation: string;
}

function TarotPageContent() {
  const searchParams = useSearchParams();
  const date = searchParams.get("date") || "";

  const [cards] = useState(() =>
    [...tarotDeck].sort(() => Math.random() - 0.5).map(c => ({ ...c, isReversed: Math.random() < 0.5 }))
  );
  const [selectedCard, setSelectedCard] = useState<(TarotCard & { isReversed: boolean }) | null>(null);
  const [interpretation, setInterpretation] = useState<Interpretation | null>(null);
  const [interpreting, setInterpreting] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  async function handleCardSelect(card: TarotCard & { isReversed: boolean }) {
    if (selectedCard) return;
    setSelectedCard(card);
    setInterpreting(true);
    try {
      const res = await fetch("/api/tarot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cardName: card.name,
          cardNameKo: card.nameKo,
          isReversed: card.isReversed,
          keywords: card.isReversed ? card.keywordsReversed : card.keywords,
        }),
      });
      const data = await res.json();
      setInterpretation(data);
    } catch {
      setInterpretation(null);
    } finally {
      setInterpreting(false);
    }
  }

  function getSuitColor(arcana: string, suit?: string) {
    if (arcana === "major") return { bg: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.5)", text: "#c4b5fd", glow: "rgba(139,92,246,0.4)" };
    const m: Record<string, { bg: string; border: string; text: string; glow: string }> = {
      "완드":   { bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.5)", text: "#fcd34d", glow: "rgba(245,158,11,0.3)" },
      "컵":    { bg: "rgba(59,130,246,0.12)",  border: "rgba(59,130,246,0.5)",  text: "#93c5fd", glow: "rgba(59,130,246,0.3)"  },
      "소드":  { bg: "rgba(148,163,184,0.12)", border: "rgba(148,163,184,0.5)", text: "#cbd5e1", glow: "rgba(148,163,184,0.3)" },
      "펜타클":{ bg: "rgba(52,211,153,0.12)",  border: "rgba(52,211,153,0.5)",  text: "#6ee7b7", glow: "rgba(52,211,153,0.3)"  },
    };
    return m[suit || ""] || m["완드"];
  }

  return (
    <main style={{ minHeight: "100vh", padding: "1.5rem 1rem 4rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <Link href={date ? "/result?date=" + date : "/"} style={{ color: "var(--cosmos-muted)", textDecoration: "none", fontSize: "0.875rem" }}>
            ← 결과로 돌아가기
          </Link>
        </div>

        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, background: "linear-gradient(135deg, #c4b5fd, #f9a8d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "0.5rem" }}>
            🔮 타로 카드 운세
          </h1>
          {!selectedCard && (
            <p style={{ color: "var(--cosmos-muted)", fontSize: "0.9375rem" }}>
              78장의 카드가 펼쳐져 있어요. 직관을 따라 하나를 선택해보세요.
            </p>
          )}
        </div>

        {/* Card Grid */}
        {!selectedCard ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(78px, 1fr))", gap: "0.5rem", marginBottom: "2rem" }}>
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardSelect(card)}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  aspectRatio: "2/3.46",
                  borderRadius: "0.625rem",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: hoveredId === card.id ? "1px solid rgba(139,92,246,0.7)" : "1px solid rgba(139,92,246,0.2)",
                  transform: hoveredId === card.id ? "translateY(-6px) scale(1.05)" : "none",
                  boxShadow: hoveredId === card.id ? "0 12px 28px rgba(139,92,246,0.35)" : "none",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                  position: "relative",
                  background: "#0d0d2b",
                }}
              >
                {/* Card back */}
                <svg width="100%" height="100%" viewBox="0 0 60 104" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
                  <rect width="60" height="104" fill="#0a0a1f"/>
                  <rect x="2" y="2" width="56" height="100" rx="3" fill="none" stroke="rgba(139,92,246,0.25)" strokeWidth="1"/>
                  <rect x="5" y="5" width="50" height="94" rx="2" fill="none" stroke="rgba(139,92,246,0.12)" strokeWidth="0.5"/>
                  <circle cx="30" cy="52" r="16" fill="none" stroke="rgba(139,92,246,0.2)" strokeWidth="0.5"/>
                  <circle cx="30" cy="52" r="10" fill="none" stroke="rgba(236,72,153,0.15)" strokeWidth="0.5"/>
                  <text x="30" y="57" textAnchor="middle" fontSize="13" fill="rgba(139,92,246,0.5)">✦</text>
                  <text x="10" y="18" fontSize="7" fill="rgba(139,92,246,0.2)">★</text>
                  <text x="46" y="18" fontSize="7" fill="rgba(139,92,246,0.2)">★</text>
                  <text x="10" y="98" fontSize="7" fill="rgba(139,92,246,0.2)">★</text>
                  <text x="46" y="98" fontSize="7" fill="rgba(139,92,246,0.2)">★</text>
                </svg>
              </div>
            ))}
          </div>
        ) : (
          <div className="fade-in-up">
            {/* Selected card display */}
            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
              {/* Card image */}
              <div style={{ flexShrink: 0, width: "150px" }}>
                <div style={{
                  width: "150px", aspectRatio: "2/3.46",
                  borderRadius: "0.875rem", overflow: "hidden",
                  border: "2px solid " + getSuitColor(selectedCard.arcana, selectedCard.suit).border,
                  boxShadow: "0 0 30px " + getSuitColor(selectedCard.arcana, selectedCard.suit).glow,
                  position: "relative",
                  transform: selectedCard.isReversed ? "rotate(180deg)" : "none",
                }}>
                  <Image
                    src={selectedCard.image}
                    alt={selectedCard.nameKo}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
                <div style={{ marginTop: "0.75rem", textAlign: "center" }}>
                  <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: getSuitColor(selectedCard.arcana, selectedCard.suit).text, marginBottom: "0.25rem" }}>
                    {selectedCard.nameKo}
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--cosmos-muted)", marginBottom: "0.375rem" }}>{selectedCard.name}</p>
                  <span style={{
                    fontSize: "0.6875rem", padding: "0.2rem 0.75rem",
                    borderRadius: "2rem", display: "inline-block",
                    background: getSuitColor(selectedCard.arcana, selectedCard.suit).bg,
                    color: getSuitColor(selectedCard.arcana, selectedCard.suit).text,
                    border: "1px solid " + getSuitColor(selectedCard.arcana, selectedCard.suit).border,
                  }}>
                    {selectedCard.isReversed ? "🔃 역방향" : "⬆️ 정방향"}
                  </span>
                </div>
              </div>

              {/* Card basic info */}
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h2 style={{
                  fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem",
                  color: getSuitColor(selectedCard.arcana, selectedCard.suit).text,
                }}>
                  {selectedCard.arcana === "major" ? "🌟 메이저 아르카나" :
                    selectedCard.suit === "완드" ? "🔥 완드" :
                    selectedCard.suit === "컵" ? "💧 컵" :
                    selectedCard.suit === "소드" ? "⚔️ 소드" : "🌿 펜타클"}
                </h2>

                {/* Keywords */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1rem" }}>
                  {(selectedCard.isReversed ? selectedCard.keywordsReversed : selectedCard.keywords).map(kw => (
                    <span key={kw} style={{
                      fontSize: "0.75rem", padding: "0.25rem 0.625rem",
                      borderRadius: "2rem",
                      background: getSuitColor(selectedCard.arcana, selectedCard.suit).bg,
                      color: getSuitColor(selectedCard.arcana, selectedCard.suit).text,
                      border: "1px solid " + getSuitColor(selectedCard.arcana, selectedCard.suit).border,
                    }}>{kw}</span>
                  ))}
                </div>

                {/* Card built-in description */}
                <div style={{
                  background: "rgba(139,92,246,0.07)", borderRadius: "0.75rem",
                  padding: "0.875rem 1rem", border: "1px solid rgba(139,92,246,0.12)",
                }}>
                  <p style={{ fontSize: "0.8125rem", color: "#c4b5fd", lineHeight: 1.75, fontStyle: "italic" }}>
                    {selectedCard.isReversed ? selectedCard.descriptionReversed : selectedCard.description}
                  </p>
                </div>
              </div>
            </div>

            {/* AI Interpretation */}
            {interpreting ? (
              <div style={{ textAlign: "center", padding: "2.5rem", background: "rgba(13,13,43,0.5)", borderRadius: "1rem", border: "1px solid var(--cosmos-border)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem", animation: "twinkle 1.5s infinite" }}>🔮</div>
                <p style={{ color: "var(--cosmos-muted)" }}>카드의 메시지를 읽는 중...</p>
              </div>
            ) : interpretation ? (
              <div className="cosmos-card" style={{ padding: "1.5rem" }}>
                <h3 className="section-title">✨ AI 타로 해석</h3>

                {/* Symbolism */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a78bfa", marginBottom: "0.5rem" }}>🎴 카드 상징</p>
                  <p style={{ color: "var(--cosmos-muted)", lineHeight: 1.75, fontSize: "0.9rem" }}>{interpretation.symbolism}</p>
                </div>

                {/* Main Message */}
                <div style={{ background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", padding: "1rem", marginBottom: "1.25rem", border: "1px solid rgba(139,92,246,0.15)" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#c4b5fd", marginBottom: "0.5rem" }}>💫 핵심 메시지</p>
                  <p style={{ color: "#e2e8f0", lineHeight: 1.8, fontSize: "0.9375rem" }}>{interpretation.mainMessage}</p>
                </div>

                {/* Love & Career */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div style={{ background: "rgba(236,72,153,0.07)", borderRadius: "0.75rem", padding: "0.875rem", border: "1px solid rgba(236,72,153,0.15)" }}>
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#f9a8d4", marginBottom: "0.5rem" }}>💕 사랑/관계</p>
                    <p style={{ color: "var(--cosmos-muted)", lineHeight: 1.7, fontSize: "0.8125rem" }}>{interpretation.love}</p>
                  </div>
                  <div style={{ background: "rgba(59,130,246,0.07)", borderRadius: "0.75rem", padding: "0.875rem", border: "1px solid rgba(59,130,246,0.15)" }}>
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#93c5fd", marginBottom: "0.5rem" }}>💼 직업/목표</p>
                    <p style={{ color: "var(--cosmos-muted)", lineHeight: 1.7, fontSize: "0.8125rem" }}>{interpretation.career}</p>
                  </div>
                </div>

                {/* Advice */}
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#86efac", marginBottom: "0.5rem" }}>💡 실용적 조언</p>
                  <p style={{ color: "var(--cosmos-muted)", lineHeight: 1.75, fontSize: "0.9rem" }}>{interpretation.advice}</p>
                </div>

                {/* Warning */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fcd34d", marginBottom: "0.5rem" }}>⚠️ 주의할 점</p>
                  <p style={{ color: "var(--cosmos-muted)", lineHeight: 1.75, fontSize: "0.9rem" }}>{interpretation.warning}</p>
                </div>

                {/* Reflection & Affirmation */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <div style={{ background: "rgba(236,72,153,0.06)", borderRadius: "0.75rem", padding: "0.875rem", border: "1px solid rgba(236,72,153,0.12)" }}>
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#f9a8d4", marginBottom: "0.375rem" }}>🌙 성찰의 질문</p>
                    <p style={{ color: "var(--cosmos-muted)", fontStyle: "italic", fontSize: "0.8125rem", lineHeight: 1.65 }}>{interpretation.reflection}</p>
                  </div>
                  <div style={{ background: "rgba(139,92,246,0.06)", borderRadius: "0.75rem", padding: "0.875rem", border: "1px solid rgba(139,92,246,0.12)" }}>
                    <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#c4b5fd", marginBottom: "0.375rem" }}>✨ 오늘의 확언</p>
                    <p style={{ color: "var(--cosmos-muted)", fontStyle: "italic", fontSize: "0.8125rem", lineHeight: 1.65 }}>{interpretation.affirmation}</p>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Actions */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
              <button className="btn-cosmos" onClick={() => { setSelectedCard(null); setInterpretation(null); }} style={{ flex: 1, minWidth: "140px" }}>
                🔄 다시 뽑기
              </button>
              <Link href={date ? "/result?date=" + date : "/"} style={{ flex: 1, minWidth: "140px", textDecoration: "none" }}>
                <button style={{ width: "100%", padding: "0.875rem", borderRadius: "0.75rem", border: "1px solid var(--cosmos-border)", background: "rgba(139,92,246,0.1)", color: "var(--cosmos-text)", cursor: "pointer", fontWeight: 600, fontSize: "0.9375rem" }}>
                  ← 결과 보기
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes twinkle { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </main>
  );
}

export default function TarotPage() {
  return (
    <Suspense fallback={<LoadingCosmos />}>
      <TarotPageContent />
    </Suspense>
  );
}
