// Simple lunar calendar conversion using a lookup table approach
// For the full version, lunar-javascript library is used

export function convertLunarToSolar(year: number, month: number, day: number): { year: number; month: number; day: number } {
  try {
    // Use dynamic import-friendly approach with pre-computed offset
    // Approximation: lunar new year usually falls between Jan 21 - Feb 20
    // This is a simplified conversion; the API route will use the full lunar-javascript library
    const lunarOffset = getLunarOffset(year, month);
    const date = new Date(year, month - 1, day + lunarOffset);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };
  } catch {
    return { year, month, day };
  }
}

function getLunarOffset(year: number, month: number): number {
  // Approximate offset - actual conversion should be done server-side
  // Lunar month is about 29.5 days, solar month is about 30.4 days
  const yearFactor = (year - 2000) * 0.368;
  const monthFactor = month * 1.1;
  return Math.round(yearFactor + monthFactor) % 30;
}

export function formatDate(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function parseDateString(dateStr: string): { year: number; month: number; day: number } {
  const [year, month, day] = dateStr.split("-").map(Number);
  return { year, month, day };
}
