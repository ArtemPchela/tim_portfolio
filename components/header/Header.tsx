import { FC, MouseEvent, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styles from './Header.module.scss'
import MobileMenu from '@/components/header/mobileMenu/MobileMenu'
import Logo from '@/components/helpers/logo/Logo'
import useScrollActiveLink from '@/components/helpers/hooks/useScrollActiveLink'
import HeaderMenu from '@/components/header/HeaderMenu'

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

  const closeOnClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Fade duration={1000}>
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
            damping={0.2}
            duration={isLargeNavSize ? 500 : 0}
            delay={isLargeNavSize ? 300 : 0}
          >
            <HeaderMenu
              handleClickNav={handleClickNav}
              closeOnClick={closeOnClick}
            />
          </Fade>
        </nav>

        <div className={styles.nav_btn}>
          <Fade duration={1000}>
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
