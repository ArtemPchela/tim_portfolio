import { FC } from 'react'
import styles from './About.module.scss'
import { Fade } from 'react-awesome-reveal'
import Title from '@/components/helpers/title/Title'

const About: FC = () => {
  return (
    <div className={styles.about}>
      <Fade triggerOnce direction='up'>
        <Title title='About' />
        <div className={styles.container}>
          <div className={styles.about_text}>
            <p>
              I don&#x27;t want my job to become monotonous.
              As a result, I try to mix up my development and learning by taking on daily challenges.
              After completing a 10-month Front-end development course, I started my career as a developer.
              This is a thrilling adventure that has forever changed my life.
            </p>
            <p>
              I humbly submit that I possess the skills and qualities required for this position.
              On the one hand, I possess personal qualities such as problem-solving, hard work, critical thinking,
              attention to detail, quick learning, supportive, goal-oriented, friendly,
              time management, stress-resistance, teamwork, and analytical thinking.
            </p>
            <p>
              JavaScript, React.js, Next.js, React Native, Axios/REST API,
              Postman, Git/GitHub, and node.js, on the other hand, are among my skills.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default About
