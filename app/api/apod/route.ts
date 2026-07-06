import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  const apiKey = process.env.NASA_API_KEY || "DEMO_KEY";

  try {
    // Check if date is before APOD launch (June 16, 1995)
    if (date) {
      const requestedDate = new Date(date);
      const apodLaunch = new Date("1995-06-16");
      if (requestedDate < apodLaunch) {
        // Use a fallback date close to birth year if possible, else use APOD launch date
        const fallbackYear = Math.max(requestedDate.getFullYear(), 1995);
        const fallbackDate = fallbackYear === 1995 ? "1995-06-16" : `${fallbackYear}-06-16`;
        const fallbackRes = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${fallbackDate}`
        );
        if (fallbackRes.ok) {
          const data = await fallbackRes.json();
          return NextResponse.json({ ...data, isFallback: true, originalDate: date });
        }
      }
    }

    const url = date
      ? `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
      : `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    const res = await fetch(url);
    if (!res.ok) {
      // Try today's APOD as fallback
      const todayRes = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
      if (todayRes.ok) {
        const data = await todayRes.json();
        return NextResponse.json({ ...data, isFallback: true, originalDate: date });
      }
      return NextResponse.json({ error: "NASA API 요청 실패" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("APOD error:", err);
    return NextResponse.json({ error: "서버 오류가 발생했습니다" }, { status: 500 });
  }
}
