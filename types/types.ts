export type Goal = {
  name: string,
  symbol: string;
  objective: string;
  keyResult: number;
  unit: number;
  multipleHabits: Habit[]
}

export type Habit = {
  name: string,
  frequency: Frequency,
  scores: number[],
}

enum Frequency {
  Hourly,
  Daily,
  Weekly,
  Monthly,
  Quarterly,
  Yearly
}