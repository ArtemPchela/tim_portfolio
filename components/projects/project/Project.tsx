import { FC } from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styles from './Project.module.scss'
import { FaGithub } from 'react-icons/fa'
import { VscGoToFile } from 'react-icons/vsc'

export type ProjectProps = {
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  screen: string
  direction?: 'left' | 'right'
}

const Project: FC<ProjectProps> = (props) => {
  const { title, description, technologies, github, demo, screen, direction = 'left' } = props

  return (
    <Fade className={styles.project} triggerOnce direction={direction}>
      <div className={styles.project_wrapper}>
        <div className={styles.project_content}>
          <a
            href={demo}
            target='_blank'
            rel='noreferrer'
            className={styles.project_content_title}
          >
            {title}
          </a>
          <div className={styles.project_content_description}>{description}</div>
          <ul className={styles.project_content_tech}>
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className={styles.links}>
            <a href={github} target='_blank' rel='noreferrer'>
              <FaGithub />
            </a>
            <a href={demo} target='_blank' rel='noreferrer'>
              <VscGoToFile />
            </a>
          </div>
        </div>
        <a
          href={demo}
          target='_blank'
          rel='noreferrer'
          className={styles.project_image}
        >
          <Image
            loading='eager'
            src={screen}
            alt={`${title} image`}
            width={700}
            height={500}
            // layout="fill"
            objectFit='cover'
          />
        </a>
      </div>
    </Fade>
  )
}

export default Project
