import React, { useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import styles from './Theme.module.scss'

const whatTime = new Date().getHours()

const Theme = () => {
  const { theme, setTheme } = useTheme()

  /**
   *@function: Auto ThemeSwitcher depend on the current time
   */

  const isTime = () => whatTime < 19 ? setTheme('dark') : setTheme('light')

  useEffect(() => {
    isTime()
  }, [])

  return (
    <div className={styles.theme}>
      {theme === 'dark'
        ? <Image onClick={() => setTheme('light')} src='/theme/light.svg' width={35} height={35} alt='theme icon' />
        : <Image onClick={() => setTheme('dark')} src='/theme/dark.svg' width={35} height={35} alt='theme icon' />
      }
    </div>
  )
}

export default Theme
