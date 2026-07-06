import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starborn — 당신이 태어난 날, 우주는 이런 모습이었어요",
  description: "생년월일을 입력하면 NASA가 촬영한 그날의 우주 사진과 함께 별자리 운세, 타로 카드 운세를 받아보세요.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Starborn",
    description: "당신이 태어난 날, 우주는 이런 모습이었어요",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
