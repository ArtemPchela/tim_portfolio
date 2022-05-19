import { FC } from 'react'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styles from './Home.module.scss'
import { FaDownload } from 'react-icons/fa'

const Home: FC = () => {
  const isLargeNavSize = useMediaQuery({
    query: '(min-width: 48em)'
  })

  return (
    <div className={styles.home}>
      <Fade
        triggerOnce
        cascade
        direction='up'
        damping={0.5}
        duration={500}
        delay={isLargeNavSize ? 800 : 200}
      >
        <div className={styles.home_greeting}>Hello!</div>
        <div className={styles.title}>My name is Artsiom,</div>
        <h1 className={styles.subtitle}>I am a Front-end Developer.</h1>
        <div className={styles.greet}>Welcome to my webpage.</div>
        <div className={styles.download}>

          <a
            href='../helpers/pdf/CV_ARTSIOM_PCHALIANKOU_V8.1.pdf' download='CV_ARTSIOM_PCHALIANKOU_V8.1.pdf'
            className={styles.download_link}
          >
            <span className={styles.download_link_icon}><FaDownload /></span>{' '}
            Download CV{' '}
            <span className={styles.download_link_icon}><FaDownload /></span>
          </a>
        </div>
      </Fade>
    </div>
  )
}

export default Home
