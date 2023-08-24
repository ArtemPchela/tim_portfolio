import React, { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Controller,
  EffectCoverflow,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'
import 'swiper/css/thumbs'
import styles from './Projects.module.scss'
import Title from '@/components/helpers/title/Title'
import { Fade } from 'react-awesome-reveal'
import { motion } from 'framer-motion'
import { projectsData } from '@/components/helpers/data/projectsData'

interface IProjectLinks {
  github: string
  demo: string
}

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, EffectCoverflow])

const allCategories = [
  'All',
  ...new Set(projectsData.map((item) => item.category)),
]

const ProjectLinks: FC<IProjectLinks> = ({ github, demo }) => (
  <div className={styles.links}>
    <a href={github} target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
    <a href={demo} target="_blank" rel="noopener noreferrer">
      Website
    </a>
  </div>
)

const Projects = () => {
  const [menuItem, setMenuItem] = useState(projectsData)
  const [buttons] = useState(allCategories)
  const [active, setActive] = useState(0)

  const filterProjects = (button: string, index: number) => {
    if (button === 'All') {
      setMenuItem(projectsData)
    } else {
      const filteredData = projectsData.filter(
        (item) => item.category === button,
      )
      setMenuItem(filteredData)
    }
    setActive(index)
  }

  return (
    <div className={styles.projects_wrapper}>
      <Fade direction="up">
        <Title title="Projects" />
      </Fade>
      <div className={styles.projects_tabs}>
        {buttons.map((button, index) => (
          <motion.button
            layoutId={button}
            animate="visible"
            custom={(index + 1) * 0.2}
            whileHover={{ scale: 1.05 }}
            key={index}
            type="button"
            onClick={() => filterProjects(button, index)}
            className={`${styles.projects_tabs_tab} ${
              index === active ? styles.tab_active : ''
            }`}
          >
            {button}
          </motion.button>
        ))}
      </div>

      <Swiper
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={false}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        grabCursor={true}
        spaceBetween={5}
        className={styles['swiper']}
      >
        {menuItem.map(
          ({ id, title, description, technologies, github, demo, pic }) => (
            <SwiperSlide
              className={styles['swiper-slide']}
              key={id}
              style={{ backgroundImage: `url(${pic})` }}
            >
              <div className={styles.project}>
                <h3 className={styles.project_title}>{title}</h3>
                <div className={styles.project_description}>{description}</div>
                <div className={styles.project_description_title}>Stack:</div>
                <ul className={styles.stack}>
                  {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <ProjectLinks github={github} demo={demo} />
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  )
}

export default Projects
