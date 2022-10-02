import { FC } from 'react'
import Image from 'next/image'
import photo from '../../public/artsiom.png'
import { Fade } from 'react-awesome-reveal'
import { useMediaQuery } from 'react-responsive'
import styles from './Home.module.scss'
import { FaDownload } from 'react-icons/fa'

const Home: FC = () => {
  const isLargeNavSize = useMediaQuery({
    query: '(min-width: 48em)'
  })

  function handleClick() {
    window.open('/files/artsiom_CV.docx.pdf', '_blank')
  }

  return (
    <div className={styles.home}>
      <div className={styles.home_text}>
        <Fade
          cascade
          direction='up'
          damping={0.5}
          duration={500}
          delay={isLargeNavSize ? 800 : 200}
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
            cascade
            direction='down'
            damping={0.5}
            duration={150}
            delay={isLargeNavSize ? 800 : 200}
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
