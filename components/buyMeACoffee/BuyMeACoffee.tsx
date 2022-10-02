import { FC } from 'react'
import Image from 'next/image'
import styles from './BuyMeACoffee.module.scss'

const BuyMeACoffee: FC = () => {
  return (
    <div className={styles.buyCoffee}>
      <a href='https://www.buymeacoffee.com/timdev' target='_blank' rel='noreferrer'>
        <Image
          width={160}
          height={50}
          alt='Buy Me a Coffee Widget'
          src='/yellow-button.png'
        />
      </a>
    </div>
  )
}

export default BuyMeACoffee
