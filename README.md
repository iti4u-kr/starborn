# ✦ STARBORN

> 당신이 태어난 날, 우주는 이런 모습이었어요

생년월일을 입력하면 NASA APOD에서 그날의 우주 사진을 가져오고,  
Claude AI가 감성적인 한국어 우주 이야기 · 별자리 운세 · 타로 운세를 생성해주는 웹앱.

---

## 🚀 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경변수 설정
`.env.local.example`을 복사해 `.env.local`로 만들고 API 키를 입력합니다.

```bash
cp .env.local.example .env.local
```

`.env.local`:
```
NASA_API_KEY=your_nasa_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

- **NASA API Key**: https://api.nasa.gov (무료)
- **Anthropic API Key**: https://console.anthropic.com

### 3. 개발 서버 실행
```bash
npm run dev
```

http://localhost:3000 에서 확인

---

## 📦 Vercel 배포

1. GitHub 저장소에 push
2. https://vercel.com 에서 GitHub repo import
3. **Environment Variables** 등록:
   - `NASA_API_KEY`
   - `ANTHROPIC_API_KEY`
4. Deploy 클릭 → 자동 빌드 & 배포

---

## 🗂 프로젝트 구조

```
starborn/
├── app/
│   ├── page.tsx              # 홈 (날짜 입력)
│   ├── result/page.tsx       # 결과 페이지 (APOD + 운세)
│   ├── tarot/page.tsx        # 타로 카드 선택
│   └── api/
│       ├── apod/route.ts     # NASA APOD 프록시
│       ├── story/route.ts    # Claude 우주 스토리 + 번역
│       ├── horoscope/route.ts # Claude 별자리 운세
│       ├── tarot/route.ts    # Claude 타로 해석
│       └── lunar/route.ts    # 음력→양력 변환
├── components/
│   ├── DatePicker.tsx        # 날짜 입력 컴포넌트
│   ├── LoadingCosmos.tsx     # 로딩 애니메이션
│   └── ShareButton.tsx       # 이미지 저장/공유
├── lib/
│   ├── zodiac.ts             # 별자리 계산
│   └── tarotDeck.ts          # 78장 타로 카드 데이터
└── types/
    └── lunar-javascript.d.ts # 타입 선언
```

---

## 🛠 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | Next.js 14 (App Router) |
| 언어 | TypeScript |
| 스타일 | Tailwind CSS |
| AI | Claude API (claude-sonnet-4-6) |
| 우주 사진 | NASA APOD API |
| 음력 변환 | lunar-javascript |
| 이미지 캡처 | html2canvas |
| 배포 | Vercel |

---

## 📋 주요 기능

1. **NASA 우주 사진** — 생년월일에 해당하는 APOD 이미지 + Claude가 번역한 한글 설명
2. **감성 우주 스토리** — Claude AI가 생성하는 시적인 한국어 탄생일 이야기
3. **별자리 운세** — 사랑운 · 직업운 · 건강운 + 행운의 숫자/색
4. **타로 카드** — 78장 중 1장 선택 → Claude AI 한국어 해석
5. **공유 기능** — html2canvas로 결과 카드 PNG 저장 / SNS 공유

---

Powered by **NASA APOD** · **Anthropic Claude API**
