import { FC } from 'react'
import Image from 'next/image'
import styles from './Logo.module.scss'
import logo from '../../../public/logo.svg'

const LogoTitle: FC = () => {
  return (
    <a className={styles.logo} href="/" aria-label="Home">
      <Image src={logo} alt="header logo" width={55} height={55} />
    </a>
  )
}

export default LogoTitle
