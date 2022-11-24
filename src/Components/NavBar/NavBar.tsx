import Link from 'next/link'
import styles from './NavBar.module.scss' 

type NavBarProps = {
  current: string
}

const LINKS = [
  { url: '/', title: 'Today' }, 
  { url: 'habits', title: 'Habits' },
  { url: '#', title: 'Goals'}
]

export default function NavBar ({current}: NavBarProps) {
  return (
    <nav className={styles.navbar}>
      { LINKS.map(({url, title}) => (
        <Link
          href={url}
          className={title === current ? styles.active : styles.inactive}
        >
          {title}
        </Link>
      ))}
    </nav>
  )
}