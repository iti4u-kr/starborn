import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const year = parseInt(searchParams.get("year") || "0");
  const month = parseInt(searchParams.get("month") || "0");
  const day = parseInt(searchParams.get("day") || "0");

  if (!year || !month || !day) {
    return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
  }

  try {
    const { Lunar } = await import("lunar-javascript");
    const lunar = Lunar.fromYmd(year, month, day);
    const solar = lunar.getSolar();
    return NextResponse.json({
      solarYear: solar.getYear(),
      solarMonth: solar.getMonth(),
      solarDay: solar.getDay(),
    });
  } catch (err) {
    console.error("Lunar conversion error:", err);
    const approxDate = new Date(year, month - 1, day + 30);
    return NextResponse.json({
      solarYear: approxDate.getFullYear(),
      solarMonth: approxDate.getMonth() + 1,
      solarDay: approxDate.getDate(),
    });
  }
}
