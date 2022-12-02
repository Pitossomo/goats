import Head from "next/head"
import { ReactNode } from "react"
import NavBar from "../NavBar/NavBar"
import styles from './Wrapper.module.scss'

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
      <NavBar current={title} />
      <div className={styles.wrapper}>
        { children }
      </div>
    </div>
  )
}
