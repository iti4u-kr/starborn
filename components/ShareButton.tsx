"use client";
import { useState } from "react";

interface ShareButtonProps {
  targetId: string;
  filename?: string;
}

export default function ShareButton({ targetId, filename = "starborn-result" }: ShareButtonProps) {
  const [isCapturing, setIsCapturing] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleCapture() {
    setIsCapturing(true);
    try {
      const { default: html2canvas } = await import("html2canvas");
      const element = document.getElementById(targetId);
      if (!element) return;

      const canvas = await html2canvas(element, {
        backgroundColor: "#050510",
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      canvas.toBlob(blob => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);

        if (navigator.share && navigator.canShare) {
          const file = new File([blob], `${filename}.png`, { type: "image/png" });
          if (navigator.canShare({ files: [file] })) {
            navigator.share({
              title: "Starborn — 내 탄생일의 우주",
              text: "내가 태어난 날, 우주는 이런 모습이었어요 ✦",
              files: [file],
            }).catch(() => {
              downloadImage(url, filename);
            });
            return;
          }
        }
        downloadImage(url, filename);
        URL.revokeObjectURL(url);
      }, "image/png");
    } catch (err) {
      console.error("Capture error:", err);
    } finally {
      setIsCapturing(false);
    }
  }

  function downloadImage(url: string, name: string) {
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name}.png`;
    a.click();
  }

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
      <button
        className="btn-cosmos"
        onClick={handleCapture}
        disabled={isCapturing}
        style={{ flex: 1, minWidth: "160px", opacity: isCapturing ? 0.7 : 1 }}
      >
        {isCapturing ? "📸 저장 중..." : "📸 이미지 저장"}
      </button>
      <button
        onClick={handleCopyLink}
        style={{
          flex: 1, minWidth: "140px",
          padding: "0.875rem 1.25rem",
          borderRadius: "0.75rem",
          border: "1px solid var(--cosmos-border)",
          background: "rgba(139,92,246,0.1)",
          color: copied ? "#86efac" : "var(--cosmos-text)",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: "0.9375rem",
          transition: "all 0.2s",
        }}
      >
        {copied ? "✓ 링크 복사됨" : "🔗 링크 공유"}
      </button>
    </div>
  );
}
