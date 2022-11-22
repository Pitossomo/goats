import Head from "next/head"
import { ReactNode } from "react"
import styles from './Wrapper.module.css'

type WrapperProps = {
  title: string,
  children: ReactNode
}

export default function Wrapper({title, children}: WrapperProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Goats{title ? ` | ${title}` : ''}</title>
      </Head>
      <div className={styles.wrapper}>
        { children }
      </div>
    </div>
  )
}
