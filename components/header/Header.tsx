import React, { FC, MouseEvent, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styles from './Header.module.scss'
import MobileBtn from '@/components/header/mobileMenu/MobileBtn'
import Logo from '@/components/helpers/logo/Logo'
import useScrollActiveLink from '@/components/helpers/hooks/useScrollActiveLink'
import HeaderMenu from '@/components/header/HeaderMenu'
import Theme from '@/components/theme/Theme'

const Header: FC = () => {
  useScrollActiveLink(styles.nav_menu, styles.active_link)
  const [menuOpen, setMenuOpen] = useState(false)
  const isLargeNavSize = useMediaQuery({
    query: '(min-width: 48em)',
  })

  const toggleMenu = () => setMenuOpen((prevState) => !prevState)

  const handleClickNav = (event: MouseEvent<HTMLAnchorElement>) => {
    const href = (event.target as HTMLAnchorElement).getAttribute('href')!
    document.querySelector(href)?.scrollIntoView()
    setMenuOpen(false)
  }

  const renderFadeComponent = (
    children: React.ReactNode,
    direction?: string,
  ) => (
    <Fade
      direction="down"
      cascade
      damping={0.2}
      duration={isLargeNavSize ? 500 : 0}
      delay={isLargeNavSize ? 300 : 0}
    >
      {children}
    </Fade>
  )

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        {renderFadeComponent(<Logo />)}

        <nav
          className={`${styles.nav_menu} ${
            menuOpen ? styles.open : styles.close
          }`}
        >
          {renderFadeComponent(<HeaderMenu handleClickNav={handleClickNav} />)}
          {renderFadeComponent(<Theme />)}
        </nav>

        <div className={styles.nav_btn}>
          {renderFadeComponent(
            <MobileBtn menuOpen={menuOpen} toggleMenu={toggleMenu} />,
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
