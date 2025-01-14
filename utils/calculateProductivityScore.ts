interface Win {
  title: string;
  category: string;
  time: string;
  date: string;
}

export function calculateProductivityScore(wins: Win[], currentStreak: number): number {
  // Calculate win frequency (assuming wins array contains last 30 days of data)
  const winFrequency = wins.length / 30;

  // Calculate win diversity
  const categories = new Set(wins.map(win => win.category));
  const winDiversity = categories.size / 4; // Assuming 4 total categories

  // Factor in current streak
  const streakFactor = Math.min(currentStreak / 30, 1); // Cap at 30 days

  // Calculate the score (0-100)
  const score = ((winFrequency * 40) + (winDiversity * 30) + (streakFactor * 30)) * 100;

  // Round to one decimal place
  return Math.round(score * 10) / 10;
}

