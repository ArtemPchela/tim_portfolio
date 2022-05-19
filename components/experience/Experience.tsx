import { FC } from 'react'
import { Fade } from 'react-awesome-reveal'
import Title from '@/components/helpers/title/Title'
import Exp from '@/components/experience/exp/Exp'
import styles from './Experience.module.scss'

const Experience: FC = () => {
  return (
    <div className={styles.experience}>
      <Fade triggerOnce direction='up'>
        <Title title='Experience' />
        <Exp />
      </Fade>
    </div>
  )
}

export default Experience
