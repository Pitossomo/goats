import StarRating from "../StarRating/StarRating"
import styles from "./HabitToday.module.css"

type HabitTodayProps = {
  name: string,
  score: number
}

export default function HabitToday({name, score}:HabitTodayProps) {
  return (
    <div className={styles.habitToday}>
      <span>{name}</span>
      <StarRating rating={score} setRating={(newScore: number) => console.log(newScore)} />
    </div>
  )
}