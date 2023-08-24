import { FC } from 'react'
import styles from './About.module.scss'
import { Fade } from 'react-awesome-reveal'
import Title from '@/components/helpers/title/Title'

const About: FC = () => {
  return (
    <div className={styles.about}>
      <Fade direction="up">
        <Title title="About" />
        <div className={styles.container}>
          <div className={styles.about_text}>
            <p>
              I strive to keep my work dynamic and varied by taking on new
              challenges every day, which allows me to continually grow and
              learn. My journey as a developer began after completing a 10-month
              front-end development course, and it has been a truly
              transformative experience.
            </p>
            <p>
              I possess the essential abilities and traits necessary for this
              job. I am a skilled problem solver, capable of thinking critically
              and paying close attention to detail. I am constantly seeking out
              new opportunities to learn and improve, and I am always willing to
              lend a helping hand to those in need.
            </p>
            <p>
              On the other side, interested in my abilities? Look at them down
              below!
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default About
