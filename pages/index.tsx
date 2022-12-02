import HabitToday from "../components/HabitToday/HabitToday";
import Wrapper from "../components/Wrapper/Wrapper";
import { goalsData } from '../data/habits'

export default function Today() {
  return (
    <Wrapper title='Today'>
      {
        goalsData.flatMap(goal => (
          goal.habits.map(habit => (
            <HabitToday 
              key={`${goal.tick}-${habit.name}`}
              name={habit.name}
              score={habit.scores ? habit.scores[0] : 0 }
            />
          ))
        ))
      }
    </Wrapper>
  )
}