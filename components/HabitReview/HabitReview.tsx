import styles from './HabitReview.module.scss'

type HabitReviewProps = {
  name: string,
  scores?: number[]
}

export default function HabitReview ({name, scores}: HabitReviewProps) {
  return (
    <div className={styles.habit}>
      <p>{name}</p>
      <div className={styles.scores}>
        {scores?.map(score => (
          <div key={Math.random()} className={styles[`score${score}`]}>
            &nbsp;
          </div>
        ))}
      </div>
    </div>
  )
}

