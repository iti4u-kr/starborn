export interface ZodiacInfo {
  name: string;
  symbol: string;
  emoji: string;
  dateRange: string;
  element: string;
  elementEmoji: string;
}

export function getZodiac(month: number, day: number): ZodiacInfo {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
    return { name: "양자리", symbol: "♈", emoji: "🐏", dateRange: "3/21 – 4/19", element: "불", elementEmoji: "🔥" };
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
    return { name: "황소자리", symbol: "♉", emoji: "🐂", dateRange: "4/20 – 5/20", element: "땅", elementEmoji: "🌿" };
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
    return { name: "쌍둥이자리", symbol: "♊", emoji: "👯", dateRange: "5/21 – 6/20", element: "공기", elementEmoji: "🌬️" };
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
    return { name: "게자리", symbol: "♋", emoji: "🦀", dateRange: "6/21 – 7/22", element: "물", elementEmoji: "💧" };
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
    return { name: "사자자리", symbol: "♌", emoji: "🦁", dateRange: "7/23 – 8/22", element: "불", elementEmoji: "🔥" };
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
    return { name: "처녀자리", symbol: "♍", emoji: "👧", dateRange: "8/23 – 9/22", element: "땅", elementEmoji: "🌿" };
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
    return { name: "천칭자리", symbol: "♎", emoji: "⚖️", dateRange: "9/23 – 10/22", element: "공기", elementEmoji: "🌬️" };
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    return { name: "전갈자리", symbol: "♏", emoji: "🦂", dateRange: "10/23 – 11/21", element: "물", elementEmoji: "💧" };
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return { name: "사수자리", symbol: "♐", emoji: "🏹", dateRange: "11/22 – 12/21", element: "불", elementEmoji: "🔥" };
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
    return { name: "염소자리", symbol: "♑", emoji: "🐐", dateRange: "12/22 – 1/19", element: "땅", elementEmoji: "🌿" };
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return { name: "물병자리", symbol: "♒", emoji: "🏺", dateRange: "1/20 – 2/18", element: "공기", elementEmoji: "🌬️" };
  return { name: "물고기자리", symbol: "♓", emoji: "🐟", dateRange: "2/19 – 3/20", element: "물", elementEmoji: "💧" };
}
