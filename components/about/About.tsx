import { FC } from 'react'
import styles from './About.module.scss'
import { Fade } from 'react-awesome-reveal'
import Title from '@/components/helpers/title/Title'

const About: FC = () => {
  return (
    <div className={styles.about}>
      <Fade direction='up'>
        <Title title='About' />
        <div className={styles.container}>
          <div className={styles.about_text}>
            <p>
              I want my job to be diverse and changing. As a result, I try to mix up my development and learning by
              taking on daily challenges. After completing a 10-month Front-end development course, I started my career
              as a developer. This is a thrilling adventure that has forever changed my life.
            </p>
            <p>
              I possess the skills and qualities required for this position. On the one hand, I have personal qualities
              such as problem-solving, analytical thinking, attention to detail, learning new things, and being
              supportive.
            </p>
            <p>
              On the other hand, curious about my skills? Check them out below!
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default About
