import { FC } from 'react'
import Title from '@/components/helpers/title/Title'
import styles from './Skills.module.scss'
import { Fade } from 'react-awesome-reveal'
import Skill from './skillItem/Skill'
import { skillsData } from '@/components/helpers/data/skillsData'

const Skills: FC = () => {
  return (
    <div className={styles.skills}>
      <Fade triggerOnce={true} direction='up'>
        <Title title='Skills' />
      </Fade>
      <div className={styles.skill_wrapper}>
        {Object.entries(skillsData).map(([title, skills]) => (
          <Skill
            key={title}
            title={title}
            skills={skills}
          />
        ))}
      </div>
    </div>
  )
}

export default Skills
