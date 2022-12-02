import { Frequency, Goal } from '../types/types'

export const goalsData:Goal[] = [
  {
    name: '6pack',
    tick: '6PK',
    objective: 'Develop a 6-packed body',
    keyResult: 9,
    unit: 'body fat percentage',
    habits: [
      {
        name: 'Cardio',
        description: '1h of cardio exercise everyday',
        frequency: Frequency.DAILY,
        scores: [1, 0, 3, 2, 1]
      },
      {
        name: 'Muscle Strength',
        description: '3x4x12 reps of strength exercises',
        frequency: Frequency.DAILY,
        scores: [3, 3, 3, 2, 1]
      },
      {
        name: 'Nutrition',
        description: '500 calories of daily deficit',
        frequency: Frequency.DAILY,
        scores: [0, 0, 0, 0, 0]
      },
    ]
  },
  {
    name: 'Finance',
    tick: 'R$',
    objective: 'Obtain financial independence for my kids',
    keyResult: 1000000,
    unit: 'million bucks',
    habits: [
      {
        name: 'Investing',
        description: 'R$1000 invested monthly',
        frequency: Frequency.MONTHLY,
        scores: [1, 1, 1, 2, 3]
      }
    ]
  }

] 