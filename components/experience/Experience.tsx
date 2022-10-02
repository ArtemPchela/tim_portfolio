import { FC } from 'react'
import { Fade } from 'react-awesome-reveal'
import Title from '@/components/helpers/title/Title'
import Exp from '@/components/experience/exp/Exp'
import styles from './Experience.module.scss'
import { experienceData } from '@/components/helpers/data/experienceData'

const Experience: FC = () => {
  return (
    <div className={styles.experience}>
      <Fade direction='up'>
        <Title title='Experience' />
      </Fade>
        {experienceData && experienceData.map((props, index) => (
        <Exp
          key={index}
          {...props}
          direction={index % 2 === 0 ? 'left' : 'right'}
        />
        ))}
    </div>
  )
}

export default Experience
