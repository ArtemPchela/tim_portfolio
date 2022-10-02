import { FC } from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styles from './Project.module.scss'
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

export type ProjectProps = {
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  pic: string
  direction?: 'left' | 'right'
}

const Project: FC<ProjectProps> = (props) => {
  const { title, description, technologies, github, demo, pic, direction = 'left' } = props

  return (
    <Fade className={styles.project} direction={direction}>
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
          <div className={styles.project_content_description}>
            <p>
              {description}
            </p>
            <ul className={styles.project_content_tech}>
              <li>Stack:</li>
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.links}>
            <a href={github} target='_blank' rel='noreferrer'>
              <FaGithub />
            </a>
            <a href={demo} target='_blank' rel='noreferrer'>
              <CgWebsite />
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
            src={pic}
            alt={`${title} image`}
            width={600}
            height={500}
            objectFit='cover'
          />
        </a>
      </div>
    </Fade>
  )
}

export default Project
