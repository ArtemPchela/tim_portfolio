import { FC } from 'react'
import Title from '@/components/helpers/title/Title'
import Project, { ProjectProps } from '@/components/projects/project/Project'
import styles from './Projects.module.scss'
import { Fade } from 'react-awesome-reveal'

const projects: ProjectProps[] = [
  {
    title: 'RÖVARSPRÅK',
    description: 'Rövarspråket (English: The Robber Language) is a Swedish language game. It became popular after the books about Bill Bergson by Astrid Lindgren, where the children use it as a code, both at play and in solving actual crimes.',
    technologies: ['React', 'CSS', 'i18n', 'PWA'],
    github: 'https://github.com/ArtemPchela/Rovarspraket_Game',
    demo: 'https://rovarspraketgame.netlify.app/',
    screen: '/rovarsproket.jpg'
  },
]

const Projects: FC = () => {
  return (
    <div className={styles.projects}>
      <Fade triggerOnce direction='up'>
        <Title title='Projects' />
      </Fade>
      <div className={styles.projects_list}>
          {projects.map((props, index) => (
            <Project
              key={index}
              {...props}
              direction={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
      </div>
    </div>
  )
}

export default Projects
