import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { cardName, cardNameKo, isReversed, keywords } = await request.json();
    const { default: OpenAI } = await import("openai");
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const direction = isReversed ? "역방향" : "정방향";
    const keywordStr = (keywords || []).join(", ");

    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "당신은 경험 많은 타로 카드 리더입니다. 라이더-웨이트 타로 덱을 기반으로 카드의 상징, 이미지, 의미를 깊이 있게 해석합니다. 해석은 현실적이고 실용적이며 희망적입니다. 반드시 한국어로만 답하며, 마크다운 없이 순수 JSON만 출력합니다." },
        { role: "user", content: "타로 카드: " + cardNameKo + " (" + cardName + ")\n방향: " + direction + "\n키워드: " + keywordStr + "\n\nJSON 형식으로 상세한 타로 해석을 작성해주세요:\n{\"symbolism\": \"카드 상징 설명 (2문장)\", \"mainMessage\": \"핵심 메시지 (3문장)\", \"love\": \"사랑/관계 의미 (2문장)\", \"career\": \"직업/목표 의미 (2문장)\", \"advice\": \"실용적 조언 (2문장)\", \"warning\": \"주의할 점 (1문장)\", \"reflection\": \"성찰 질문 (1문장, 물음표)\", \"affirmation\": \"오늘의 확언 (1문장, 긍정 선언)\"}" },
      ],
      temperature: 0.7,
    });

    const raw = res.choices[0].message.content || "{}";
    let interpretation;
    try {
      interpretation = JSON.parse(raw.replace(/```json\n?|\n?```/g, "").trim());
    } catch {
      interpretation = { symbolism: cardNameKo + " 카드는 강력한 상징을 담고 있습니다.", mainMessage: cardNameKo + " 카드가 " + direction + "으로 나타났습니다. 중요한 통찰을 제공합니다.", love: "진정성 있는 소통이 중요한 시기입니다.", career: "꾸준한 노력이 미래의 결실로 이어집니다.", advice: "내면의 목소리에 귀를 기울이세요.", warning: "성급한 판단을 주의하세요.", reflection: "지금 이 순간, 당신이 원하는 변화는 무엇인가요?", affirmation: "나는 내 안의 지혜를 믿으며 올바른 길을 걷고 있습니다." };
    }
    return NextResponse.json(interpretation);
  } catch (err) {
    console.error("Tarot error:", err);
    return NextResponse.json({ error: "타로 해석 생성 실패" }, { status: 500 });
  }
}
