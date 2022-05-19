import { FC } from 'react'
import Image from 'next/image'
import styles from './Logo.module.scss'
import logo from '../../../public/logo.svg'

const LogoTitle: FC = () => {
  return (
    <a className={styles.logo} href='/pages' aria-label='Home'>
      <Image src={logo} alt='header logo' />
    </a>
  )
}

export default LogoTitle
