import { FC } from 'react'
import styles from './Skill.module.scss'

type SkillsProps = {
  title: string,
  skills: string[],
}

const Skill: FC<SkillsProps> = ({ title, skills }) => {
  return (
    <div className={styles.skill_item}>
      <h2>{title}</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Skill
