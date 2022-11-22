import styles from '../styles/Habits.module.scss'
import { goalsData } from '../data/habits'
import Wrapper from '../Components/Wrapper/Wrapper'
import HabitReview from '../Components/HabitReview/HabitReview'

export default function Habits() {
  return (
    <Wrapper title='Habits'>
      <h1>Habits</h1>
      { goalsData.map(goalData => (
        <div className={styles.goal} key={goalData.tick}>
          <h2>{goalData.name}</h2>
          {
            goalData.habits.map(habit => (
              <HabitReview key={habit.name} name={habit.name} scores={habit.scores} />
            ))
          }
        </div>
      ))}
    </Wrapper>
  )
}