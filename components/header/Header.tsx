import { useState, MouseEvent, FC } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styles from './Header.module.scss'
import MobileMenu from '@/components/header/mobileMenu/MobileMenu'
import Logo from '@/components/helpers/logo/Logo'
import { mobileMenu } from '@/components/helpers/data/menuData'
import useScrollActiveLink from '@/components/helpers/hooks/useScrollActiveLink'

const Header: FC = () => {
  useScrollActiveLink(styles.nav_menu, styles.active_link)
  const [menuOpen, setMenuOpen] = useState(false)
  const isLargeNavSize = useMediaQuery({
    query: '(min-width: 48em)'
  })

  const toggleMenu = () => setMenuOpen((prevState) => !prevState)

  const handleClickNav = (event: MouseEvent<HTMLAnchorElement>) => {
    const href = (event.target as HTMLAnchorElement).getAttribute('href')!
    document.querySelector(href)?.scrollIntoView()
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Fade triggerOnce duration={1000}>
          <Logo />
        </Fade>
        <nav
          className={`${styles.nav_menu} ${
            menuOpen ? styles.open : styles.close
          }`}
        >
          <Fade
            direction='down'
            cascade
            triggerOnce
            damping={0.2}
            duration={isLargeNavSize ? 500 : 0}
            delay={isLargeNavSize ? 300 : 0}
          >
            <ul>
              {mobileMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.href} onClick={handleClickNav}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </Fade>
        </nav>

        <div className={styles.nav_btn}>
          <Fade triggerOnce duration={1000}>
            <MobileMenu
              open={menuOpen}
              onClick={toggleMenu}
            />
          </Fade>
        </div>
      </div>
    </header>
  )
}

export default Header
