import { FC } from 'react'
import { Fade } from 'react-awesome-reveal'
import styles from './Exp.module.scss'
import { expData } from '@/components/helpers/data/experienceData'

const Exp: FC = () => {
  return (
    <>
      <Fade triggerOnce direction='up'>
        {expData && expData.map((item) => (
          <div key={item.company} className={`${styles.container} ${styles.experience_wrapper}`}>
            <div className={`${styles.timeline_block} ${styles[item.direction]}`}>
              <div className={styles.marker} />
              <div className={styles.timeline_content}>
                <div className={styles.year}>{item.year}</div>
                <div className={styles.company}>{item.company}</div>
                <div className={styles.position}>{item.position}</div>
                <p className={styles.desc}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </>
  )
}

export default Exp
