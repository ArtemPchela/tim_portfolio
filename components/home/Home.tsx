import { FC } from 'react'
import Image from 'next/image'
import photo from '../../public/artsiom.png'
import { Fade } from 'react-awesome-reveal'
import styles from './Home.module.scss'
import { FaDownload } from 'react-icons/fa'

const Home: FC = () => {
  function handleClick() {
    window.open('/files/artsiom_CV.pdf', '_blank')
  }

  return (
    <div className={styles.home}>
      <div className={styles.home_text}>
        <Fade
          direction='bottom-left'
          delay={1e2}
          cascade
          damping={1e-1}
        >
          <div className={styles.greeting}>Hello!</div>
          <div className={styles.title}>My name is Artsiom,</div>
          <h1 className={styles.subtitle}>I am a Front-end Developer.</h1>
          <div className={styles.greet}>Welcome to my webpage.</div>
          <div className={styles.download}>

            <div
              onClick={handleClick}
              className={styles.download_link}
            >
              My CV{' '}
              <span className={styles.download_link_icon}><FaDownload /></span>
            </div>
          </div>
        </Fade>
      </div>
      <div className={styles.home_image}>
        <div>
          <Fade
            direction='top-left'
            delay={1e2}
            cascade
            damping={1e-1}
          >
            <Image src={photo}
                   alt='Picture of the author'
                   width={500}
                   height={500}
                   layout='intrinsic'
            />
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Home
