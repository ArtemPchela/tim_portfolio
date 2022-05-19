import { FC } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Fade } from 'react-awesome-reveal'
import Title from '@/components/helpers/title/Title'
import styles from './Contact.module.scss'

const Contact: FC = () => {
  const yearNow = new Date().getFullYear()

  return (
    <div className={styles.contact}>
      <Fade triggerOnce direction='up'>
        <Title title='Contact' />
        <div className={styles.container}>
          <a
            href='https://www.linkedin.com/in/artem-pchelenkov'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin />
          </a>
          <a
            href='mailto:artempchelenkov@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <FaEnvelope />
          </a>
          <a href='https://github.com/ArtemPchela' target='_blank' rel='noreferrer'>
            <FaGithub />
          </a>
        </div>
        <div className={styles.copy}>
          <div>Created by Tim
            <sup className={styles.copy_sign}>&#169;</sup>
            {' '}
            <span>{yearNow}</span>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Contact
