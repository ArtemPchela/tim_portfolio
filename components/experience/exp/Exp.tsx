import { FC } from 'react'
import { Fade } from 'react-awesome-reveal'
import styles from './Exp.module.scss'

export type ExperienceProps = {
  year: string
  company: string
  location: string
  position: string
  description: string
  direction?: 'left' | 'right'
}

const Exp: FC<ExperienceProps> = (props) => {
  const { year, company, location, position, description, direction = 'right' } = props

  return (
    <Fade triggerOnce direction={direction}>
      <div key={company} className={`${styles.container} ${styles.experience_wrapper}`}>
        <div className={`${styles.timeline_block} ${styles[direction]}`}>
          <div className={styles.marker} />
          <div className={styles.timeline_content}>
            <div className={styles.year}>{year}</div>
            <div className={styles.company}>{company}</div>
            <div className={styles.location}>{location}</div>
            <div className={styles.position}>{position}</div>
            <p className={styles.desc}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Exp
