import Link from "next/link";
import HabitToday from "../Components/HabitToday/HabitToday";
import Wrapper from "../Components/Wrapper/Wrapper";
import { goalsData } from '../data/habits'
import Habits from "./habits";

export default function Today() {
  return (
    <Wrapper title='Today'>
      <h1>To do Today</h1>
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