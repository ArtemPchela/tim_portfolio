import { FC } from 'react'
import Title from '@/components/helpers/title/Title'
import Project from '@/components/projects/project/Project'
import styles from './Projects.module.scss'
import { Fade } from 'react-awesome-reveal'
import {projectsData} from '@/components/helpers/data/projectsData';

const Projects: FC = () => {
  return (
    <div className={styles.projects}>
      <Fade triggerOnce direction='up'>
        <Title title='Projects' />
      </Fade>
      <div className={styles.projects_list}>
          {projectsData && projectsData.map((props, index) => (
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
