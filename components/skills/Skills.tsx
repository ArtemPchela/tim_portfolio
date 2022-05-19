import { FC } from 'react'
import Title from '@/components/helpers/title/Title'
import styles from './Skills.module.scss'
import { Fade } from 'react-awesome-reveal'
import Skill from './skillItem/Skill'

const skills = {
  Languages: [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS / module.(s)css'
  ],
  Libraries: [
    'React'
  ],
  Frameworks: [
    'Next.js',
    'React Native / Expo CLI',
    'Node.js',
    'Express',
    'MongoDB'
  ],
  Tools: [
    'Git / GitHub',
    'Docker',
    'Agile',
    'Scrum',
    'Postman'
  ]
}

const Skills: FC = () => {
  return (
    <div className={styles.skills}>
      <Fade triggerOnce={true} direction='left'>
        <Title title='Skills' />
        <div className={styles.skill_wrapper}>
          {Object.entries(skills).map(([section, skills]) => (
            <Skill key={section} title={section} skills={skills} />
          ))}
        </div>
      </Fade>
    </div>
  )
}

export default Skills
