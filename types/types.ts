export type Goal = {
  name: string,
  tick: string,
  objective: string;
  keyResult: number;
  unit: string;
  habits: Habit[]
}

export type Habit = {
  name: string,
  description: string,
  frequency: Frequency,
  scores?: Score[],
}

export type Score = {
  date: Date,
  value: number
}

export enum Frequency {
  DAILY,
  WEEKLY,
  MONTLHLY,
  QUARTERLY,
  YEARLY
}

export enum Progress {
  NONE,
  SMALL,
  MEDIUM,
  GOOD
}

