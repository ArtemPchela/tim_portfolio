import { FC, useState } from 'react'
import styles from './MobileMenu.module.scss'

type MobileMenuProps = {
  menuOpen: boolean
  toggleMenu: () => void
}

const MobileBtn: FC<MobileMenuProps> = ({ menuOpen, toggleMenu }) => {
  const [isToggledMenu, setIsToggledMenu] = useState(false)

  const getBurgerMenu = () => {
    if (isToggledMenu) {
      return menuOpen ? styles.open : styles.close
    } else {
      return ''
    }
  }

  return (
    <div
      aria-label="toggle menu"
      className={`${styles.mobile_menu} ${getBurgerMenu()}`}
      onClick={() => {
        setIsToggledMenu(true)
        toggleMenu()
      }}
    >
      <div className={styles.mobile_menu_line} />
      <div className={styles.mobile_menu_line} />
      <div className={styles.mobile_menu_line} />
    </div>
  )
}

export default MobileBtn
