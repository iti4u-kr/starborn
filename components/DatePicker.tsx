"use client";
import { useState } from "react";

interface DatePickerProps {
  onSubmit: (date: string) => void;
  isLoading: boolean;
}

export default function DatePicker({ onSubmit, isLoading }: DatePickerProps) {
  const [calType, setCalType] = useState<"solar" | "lunar">("solar");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [error, setError] = useState("");

  const today = new Date();
  const maxYear = today.getFullYear();

  async function handleSubmit() {
    setError("");
    const y = parseInt(year), m = parseInt(month), d = parseInt(day);
    if (!y || !m || !d || y < 1900 || y > maxYear || m < 1 || m > 12 || d < 1 || d > 31) {
      setError("올바른 날짜를 입력해주세요.");
      return;
    }

    if (calType === "solar") {
      const dateStr = `${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
      onSubmit(dateStr);
    } else {
      // Convert lunar to solar via API
      try {
        const res = await fetch(`/api/lunar?year=${y}&month=${m}&day=${d}`);
        const data = await res.json();
        if (data.error) { setError("음력 변환에 실패했습니다."); return; }
        const dateStr = `${data.solarYear}-${String(data.solarMonth).padStart(2,"0")}-${String(data.solarDay).padStart(2,"0")}`;
        onSubmit(dateStr);
      } catch {
        setError("음력 변환 중 오류가 발생했습니다.");
      }
    }
  }

  return (
    <div style={{ width: "100%" }}>
      {/* Calendar type toggle */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <button
          onClick={() => setCalType("solar")}
          className={`toggle-btn ${calType === "solar" ? "active" : "inactive"}`}
          style={{ flex: 1 }}
        >
          ☀️ 양력
        </button>
        <button
          onClick={() => setCalType("lunar")}
          className={`toggle-btn ${calType === "lunar" ? "active" : "inactive"}`}
          style={{ flex: 1 }}
        >
          🌙 음력
        </button>
      </div>

      {/* Date inputs */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
        <div>
          <label style={{ display: "block", fontSize: "0.75rem", color: "var(--cosmos-muted)", marginBottom: "0.375rem", letterSpacing: "0.05em" }}>
            년도
          </label>
          <input
            className="cosmos-input"
            type="number"
            placeholder="1990"
            min="1900"
            max={maxYear}
            value={year}
            onChange={e => setYear(e.target.value)}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.75rem", color: "var(--cosmos-muted)", marginBottom: "0.375rem", letterSpacing: "0.05em" }}>
            월
          </label>
          <input
            className="cosmos-input"
            type="number"
            placeholder="7"
            min="1"
            max="12"
            value={month}
            onChange={e => setMonth(e.target.value)}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.75rem", color: "var(--cosmos-muted)", marginBottom: "0.375rem", letterSpacing: "0.05em" }}>
            일
          </label>
          <input
            className="cosmos-input"
            type="number"
            placeholder="15"
            min="1"
            max="31"
            value={day}
            onChange={e => setDay(e.target.value)}
          />
        </div>
      </div>

      {calType === "lunar" && (
        <p style={{ fontSize: "0.75rem", color: "var(--cosmos-muted)", marginBottom: "1rem", padding: "0.5rem 0.75rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.5rem", border: "1px solid rgba(139,92,246,0.15)" }}>
          🌙 음력 날짜를 입력하면 자동으로 양력으로 변환됩니다
        </p>
      )}

      {error && (
        <p style={{ color: "#f87171", fontSize: "0.875rem", marginBottom: "1rem" }}>⚠️ {error}</p>
      )}

      <button
        className="btn-cosmos"
        onClick={handleSubmit}
        disabled={isLoading || !year || !month || !day}
        style={{ width: "100%", opacity: isLoading || !year || !month || !day ? 0.6 : 1, cursor: isLoading || !year || !month || !day ? "not-allowed" : "pointer" }}
      >
        {isLoading ? (
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
            <span style={{ display: "inline-block", width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
            우주를 탐색 중...
          </span>
        ) : "✦ 내 별을 찾아줘"}
      </button>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
