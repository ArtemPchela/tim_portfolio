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
              I want my work to be dynamic and varied. I therefore make an effort to mix up my growth and learning by
              accepting new challenges every day. I began my job as a developer after completing a 10-month front-end
              development course. This exciting journey has altered my life.
            </p>
            <p>
              I have the abilities and characteristics needed for this job. On the one side, I have traits like the
              ability to solve problems, think critically, pay attention to details, learn new things, and be
              supportive.
            </p>
            <p>
              On the other side, interested in my abilities ? Look at them down below!
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default About
