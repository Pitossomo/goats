import Link from 'next/link'
import styles from './NavBar.module.scss' 
import hamburger from '../../public/assets/icons/hamburger.svg'
import Image from 'next/image'
import { useState } from 'react'

type NavBarProps = {
  current: string
}

const LINKS = [
  { url: '/', title: 'Today' }, 
  { url: 'habits', title: 'Habits' },
  { url: '#', title: 'Goals'}
]

export default function NavBar ({current}: NavBarProps) {
  const [collapsed, setCollapsed] = useState(true)

  const toggleCollapse = () => setCollapsed(!collapsed)

  return (
    <header className={styles.navbar}>
      <h1>{ current }</h1>
      <button className={styles.hamburger} onClick={toggleCollapse}>
        <Image src={hamburger} alt='Collapsible menu' /> 
      </button>
      <nav className={collapsed ? styles.collapsed : styles.visible}>
        { LINKS.map(({url, title}) => (
          <Link
            key={title}
            href={url}
            className={title === current ? styles.active : styles.inactive}
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
  )
}