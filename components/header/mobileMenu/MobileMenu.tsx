import { FC, useState } from 'react'
import styles from './MobileMenu.module.scss'

type MobileMenuProps = {
  open: boolean
  onClick: () => void
}

const MobileMenu: FC<MobileMenuProps> = ({ open, onClick }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const getBurgerMenu = () => {
    if (toggleMenu) {
      return open ? styles.open : styles.close
    } else {
      return ''
    }
  }

  return (
    <div
      aria-label='toggle menu'
      className={`${styles.mobile_menu} ${getBurgerMenu()}`}
      onClick={() => {
        setToggleMenu(true)
        onClick()
      }}
    >
      <div className={styles.mobile_menu_line} />
      <div className={styles.mobile_menu_line} />
      <div className={styles.mobile_menu_line} />
    </div>
  )
}

export default MobileMenu
