import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

export async function POST(request: NextRequest) {
  try {
    const { title, explanation, date } = await request.json();
    const { default: OpenAI } = await import("openai");

    const claude = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    // ① OpenAI로 번역
    let translated = { title, explanation };
    try {
      const translateRes = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "NASA 천문 사진의 제목과 설명을 자연스럽고 아름다운 한국어로 번역합니다. JSON 형식으로만 응답합니다. 마크다운 없이 순수 JSON만 출력합니다." },
          { role: "user", content: "다음을 한국어로 번역하세요. JSON: {\"title\": \"번역된 제목\", \"explanation\": \"번역된 설명 (2-3문장 요약)\"}\n\nTitle: " + title + "\nExplanation: " + explanation },
        ],
        temperature: 0.3,
      });
      const raw = translateRes.choices[0].message.content || "{}";
      translated = JSON.parse(raw.replace(/```json\n?|\n?```/g, "").trim());
    } catch (e) {
      console.error("OpenAI translate error:", e);
    }

    // ② Claude로 감성 스토리
    const msg = await claude.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      system: "당신은 우주의 시인이자 이야기꾼입니다. NASA가 촬영한 천문 사진을 바탕으로, 그날 태어난 사람에게 전하는 따뜻하고 감성적인 한국어 이야기를 만들어냅니다. 반드시 한국어로만 답하며 200-250자 내외, 마크다운 없이 순수 텍스트로 작성합니다.",
      messages: [{ role: "user", content: "날짜: " + date + "\nNASA 사진 제목: " + title + "\n설명: " + explanation + "\n\n이 사진이 촬영된 날 태어난 사람에게 전하는 감성적인 한국어 우주 이야기를 200-250자로 작성해주세요. \"당신이 태어난 날,\" 로 시작해주세요." }],
    });
    const story = msg.content[0].type === "text" ? msg.content[0].text : "";

    return NextResponse.json({ story, translated });
  } catch (err) {
    console.error("Story API error:", err);
    return NextResponse.json({ error: "스토리 생성 실패" }, { status: 500 });
  }
}
