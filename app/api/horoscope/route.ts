import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { zodiac, birthDate } = await request.json();
    const { default: OpenAI } = await import("openai");
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const today = new Date();
    const todayStr = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월 " + today.getDate() + "일";

    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "당신은 별자리 운세 전문가 AI입니다. 오늘 날짜 기준으로 특정 별자리의 상세한 운세를 JSON 형식으로 생성합니다. 운세는 긍정적이고 희망적이되 현실적인 조언을 담아야 합니다. 반드시 한국어로만 답하며, 마크다운 없이 순수 JSON만 출력합니다." },
        { role: "user", content: "오늘은 " + todayStr + "입니다.\n생일: " + birthDate + "\n별자리: " + zodiac + "\n\nJSON 형식으로 오늘의 운세를 생성해주세요:\n{\"overall\": \"전체 총운 (3문장)\", \"love\": \"사랑운 (2문장)\", \"career\": \"직업/학업운 (2문장)\", \"health\": \"건강운 (2문장)\", \"money\": \"재물운 (2문장)\", \"luckyNumber\": 정수, \"luckyColor\": \"색\", \"luckyItem\": \"아이템\", \"advice\": \"오늘의 한마디 (1문장)\"}" },
      ],
      temperature: 0.8,
    });

    const raw = res.choices[0].message.content || "{}";
    let horoscope;
    try {
      horoscope = JSON.parse(raw.replace(/```json\n?|\n?```/g, "").trim());
    } catch {
      horoscope = { overall: "오늘 " + zodiac + "에게 우주의 에너지가 흐르는 날입니다.", love: "진솔한 대화가 관계를 깊게 만들어줍니다.", career: "창의적 아이디어가 빛을 발하는 시기입니다.", health: "몸과 마음의 균형을 유지하는 것이 중요합니다.", money: "계획적인 소비가 현명합니다.", luckyNumber: 7, luckyColor: "보라색", luckyItem: "별 모양 액세서리", advice: "작은 것에 감사하는 마음이 큰 행복을 불러옵니다." };
    }
    return NextResponse.json(horoscope);
  } catch (err) {
    console.error("Horoscope error:", err);
    return NextResponse.json({ error: "운세 생성 실패" }, { status: 500 });
  }
}
