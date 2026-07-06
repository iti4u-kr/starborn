"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getZodiac } from "@/lib/zodiac";
import LoadingCosmos from "@/components/LoadingCosmos";
import ShareButton from "@/components/ShareButton";

interface ApodData {
  url: string;
  hdurl?: string;
  title: string;
  explanation: string;
  date: string;
  media_type: string;
  isFallback?: boolean;
}

interface StoryData {
  story: string;
  translated: { title: string; explanation: string };
}

interface HoroscopeData {
  overall: string;
  love: string;
  career: string;
  health: string;
  money?: string;
  luckyNumber: number;
  luckyColor: string;
  luckyItem?: string;
  advice?: string;
}

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const date = searchParams.get("date") || "";

  const [apod, setApod] = useState<ApodData | null>(null);
  const [story, setStory] = useState<StoryData | null>(null);
  const [horoscope, setHoroscope] = useState<HoroscopeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"cosmos" | "horoscope">("cosmos");

  const zodiac = date ? (() => {
    const [, m, d] = date.split("-").map(Number);
    return getZodiac(m, d);
  })() : null;

  const formattedDate = date ? (() => {
    const [y, m, d] = date.split("-").map(Number);
    return `${y}년 ${m}월 ${d}일`;
  })() : "";

  useEffect(() => {
    if (!date) { router.push("/"); return; }
    loadAll();
  }, [date]);

  async function loadAll() {
    setLoading(true);
    setLoadingStep(0);

    try {
      // Step 1: Fetch APOD
      setLoadingStep(1);
      const apodRes = await fetch(`/api/apod?date=${date}`);
      const apodData = await apodRes.json();
      if (apodData.error) throw new Error(apodData.error);
      setApod(apodData);

      // Step 2: Generate story + translation
      setLoadingStep(2);
      const storyRes = await fetch("/api/story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: apodData.title, explanation: apodData.explanation, date }),
      });
      const storyData = await storyRes.json();
      setStory(storyData);

      // Step 3: Generate horoscope
      setLoadingStep(3);
      if (zodiac) {
        const horoRes = await fetch("/api/horoscope", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ zodiac: zodiac.name, birthDate: date }),
        });
        const horoData = await horoRes.json();
        setHoroscope(horoData);
      }
    } catch (err) {
      setError("데이터를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <LoadingCosmos />;

  if (error) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", zIndex: 1, position: "relative" }}>
        <div className="cosmos-card" style={{ padding: "2.5rem", maxWidth: "440px", textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🌌</div>
          <p style={{ color: "#f87171", marginBottom: "1.5rem" }}>{error}</p>
          <button className="btn-cosmos" onClick={() => router.push("/")} style={{ width: "100%" }}>
            ← 다시 시도하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <main style={{ minHeight: "100vh", padding: "1.5rem 1rem 3rem", position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <Link href="/" style={{ color: "var(--cosmos-muted)", textDecoration: "none", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.375rem" }}>
          ← 돌아가기
        </Link>
        <span style={{ fontSize: "0.8125rem", color: "var(--cosmos-muted)" }}>{formattedDate}</span>
      </div>

      {/* Main result card (for screenshot) */}
      <div id="result-card">
        {/* APOD Section */}
        {apod && (
          <div className="cosmos-card fade-in-up" style={{ overflow: "hidden", marginBottom: "1rem" }}>
            {/* Image or Video */}
            {apod.media_type === "image" ? (
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "var(--cosmos-card2)" }}>
                <img
                  src={apod.url}
                  alt={apod.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  crossOrigin="anonymous"
                />
                {apod.isFallback && (
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    background: "rgba(0,0,0,0.6)", padding: "0.5rem 1rem",
                    fontSize: "0.75rem", color: "var(--cosmos-muted)",
                  }}>
                    💡 해당 날짜 사진이 없어 비슷한 시기의 우주 사진을 보여드려요
                  </div>
                )}
              </div>
            ) : (
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "var(--cosmos-card2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <a href={apod.url} target="_blank" rel="noopener noreferrer" style={{ color: "#c4b5fd", textDecoration: "none", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🎬</div>
                  <div style={{ fontSize: "0.875rem" }}>영상 보러가기 →</div>
                </a>
              </div>
            )}

            <div style={{ padding: "1.5rem" }}>
              {/* Date & Zodiac badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--cosmos-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {apod.date}
                </span>
                {zodiac && (
                  <span className="zodiac-badge">
                    {zodiac.symbol} {zodiac.name}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 style={{
                fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.375rem",
                background: "linear-gradient(90deg, #e2e8f0, #c4b5fd)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                {story?.translated?.title || apod.title}
              </h2>
              {story?.translated?.title && story.translated.title !== apod.title && (
                <p style={{ fontSize: "0.8125rem", color: "rgba(148,163,184,0.5)", marginBottom: "1rem" }}>{apod.title}</p>
              )}

              {/* Story */}
              {story?.story && (
                <div style={{
                  background: "rgba(139,92,246,0.07)",
                  border: "1px solid rgba(139,92,246,0.15)",
                  borderRadius: "0.75rem",
                  padding: "1rem 1.125rem",
                  marginBottom: "1rem",
                }}>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#c4b5fd", fontStyle: "italic" }}>
                    {story.story}
                  </p>
                </div>
              )}

              {/* Translated explanation */}
              {story?.translated?.explanation && (
                <p style={{ fontSize: "0.875rem", color: "var(--cosmos-muted)", lineHeight: 1.7 }}>
                  {story.translated.explanation}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          {[
            { key: "cosmos", label: "🔭 우주 정보" },
            { key: "horoscope", label: `${zodiac?.symbol || "✨"} 별자리 운세` },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as "cosmos" | "horoscope")}
              className={`toggle-btn ${activeTab === tab.key ? "active" : "inactive"}`}
              style={{ flex: 1 }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cosmos tab */}
        {activeTab === "cosmos" && apod && (
          <div className="cosmos-card fade-in-up" style={{ padding: "1.5rem" }}>
            <h3 className="section-title">🔭 NASA 원문 설명</h3>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "var(--cosmos-muted)" }}>
              {apod.explanation}
            </p>
          </div>
        )}

        {/* Horoscope tab */}
        {activeTab === "horoscope" && zodiac && horoscope && (
          <div className="cosmos-card fade-in-up" style={{ padding: "1.5rem" }}>
            {/* Zodiac header */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(236,72,153,0.2))",
                border: "1px solid rgba(139,92,246,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem",
              }}>
                {zodiac.symbol}
              </div>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.25rem" }}>{zodiac.name}</h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--cosmos-muted)" }}>{zodiac.dateRange} · {zodiac.elementEmoji} {zodiac.element}</p>
              </div>
            </div>

            {/* Overall */}
            <div style={{ background: "rgba(139,92,246,0.07)", borderRadius: "0.75rem", padding: "1rem", marginBottom: "1rem", border: "1px solid rgba(139,92,246,0.12)" }}>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#c4b5fd" }}>{horoscope.overall}</p>
            </div>

            {/* Fortune details */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
              {[
                { label: "💕 사랑운", content: horoscope.love },
                { label: "💼 직업운", content: horoscope.career },
                { label: "🌿 건강운", content: horoscope.health },
                { label: "🍀 행운 정보", content: `행운의 숫자: ${horoscope.luckyNumber}\n행운의 색: ${horoscope.luckyColor}` },
              ].map(item => (
                <div key={item.label} style={{
                  background: "rgba(13,13,43,0.6)",
                  border: "1px solid var(--cosmos-border)",
                  borderRadius: "0.75rem",
                  padding: "0.875rem",
                }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--cosmos-purple)", marginBottom: "0.5rem" }}>{item.label}</p>
                  <p style={{ fontSize: "0.8125rem", lineHeight: 1.65, color: "var(--cosmos-muted)", whiteSpace: "pre-line" }}>{item.content}</p>
                </div>
              ))}
            </div>

            {/* Tarot CTA */}
            <Link href={`/tarot?date=${date}`} style={{ textDecoration: "none", display: "block" }}>
              <div style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(236,72,153,0.1))",
                border: "1px solid rgba(139,92,246,0.25)",
                borderRadius: "0.875rem",
                padding: "1rem 1.25rem",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                cursor: "pointer", transition: "all 0.2s",
              }}>
                <div>
                  <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>🔮 타로 카드 운세 보기</p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--cosmos-muted)" }}>78장의 카드 중 하나를 선택해보세요</p>
                </div>
                <span style={{ color: "var(--cosmos-purple)", fontSize: "1.25rem" }}>→</span>
              </div>
            </Link>
          </div>
        )}
      </div>

      {/* Share */}
      <div style={{ marginTop: "1.5rem" }}>
        <ShareButton targetId="result-card" filename={`starborn-${date}`} />
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<LoadingCosmos />}>
      <ResultContent />
    </Suspense>
  );
}
