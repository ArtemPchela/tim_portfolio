import { FC } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Fade } from 'react-awesome-reveal'
import Title from '@/components/helpers/title/Title'
import styles from './Contact.module.scss'
import { ImEyePlus } from 'react-icons/im'
import Viewers from '@/components/helpers/viewer/Viewers'

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
          <div className={styles.viewers}>
            <div className={styles.viewers_icon}>
              <ImEyePlus size='1.2rem' fill='white' />
            </div>
            <Viewers />
          </div>
          <div className={styles.made}>
            <div className={styles.made_creator}>
              Created by Tim
            </div>
            <div className={styles.made_sign}>
              <p>Copyright<sup className={styles.made_sign_c}>&#169;</sup> {yearNow}</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Contact
