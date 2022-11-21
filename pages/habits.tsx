import Head from 'next/head'
import styles from '../styles/Habits.module.scss'
import { goalsData } from '../data/habits'

export default function Habits() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Goats | Habits</title>
      </Head>
      <div className={styles.wrapper}>
        <h1>Habits</h1>
        { goalsData.map(goalData => (
          <div className={styles.goal} key={goalData.tick}>
            <h2>{goalData.name}</h2>
            {
              goalData.habits.map(habit => (
                <div key={habit.name} className={styles.habit}>
                  <p>{habit.name}</p>
                  <div className={styles.scores}>
                    {habit.scores?.map(score => (
                      <div key={Math.random()}className={styles[`score${score}`]}>
                        &nbsp;
                      </div>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
        ))}
      </div>
    </div>
  )
}