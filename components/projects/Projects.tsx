import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Controller, EffectCoverflow, Navigation, Pagination, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'
import 'swiper/css/thumbs'
import styles from './Projects.module.scss'
import { projectsData } from '@/components/helpers/data/projectsData'
import Title from '@/components/helpers/title/Title'
import { Fade } from 'react-awesome-reveal'
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import { motion } from 'framer-motion'

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, EffectCoverflow])
// const menuItems = [...new Set(projectsData.map((Val) => Val.category))]
const allCategories = ['All', ...new Set(projectsData.map(item => item.category))]
const Projects = () => {
  // const [item, setItem] = useState(projectsData)
  // const [active, setActive] = useState(menuItems)

  const [menuItem, setMenuItem] = useState(projectsData)
  const [buttons] = useState(allCategories)
  const [active, setActive] = useState(0)

  const filter = (button: string, index: any) => {

    if (button === 'All') {
      setMenuItem(projectsData)
      setActive(index)
      return
    }
    setActive(index)

    const filteredData = projectsData.filter(item => item.category === button)
    setMenuItem(filteredData)
  }


  // const filterItem = (curcat: any) => {
  //   const newItem = projectsData.filter((newVal) => {
  //     return newVal.category === curcat
  //     // comparing category for displaying data
  //   })
  //   setItem(newItem)
  // }


  // const [projectItems, setProjectItems] = useState(projectsData)
  // const [isActive, setIsActive] = useState(null)
  //
  // /**
  //  * filtering items
  //  **/
  // const filterItem = (categoryItem: any, index: any) => {
  //   const updatedItem = projectsData.filter((currElem) => {
  //     return currElem.category === categoryItem
  //   })
  //   setProjectItems(updatedItem)
  //   setIsActive(index)
  // }
  //
  // const getCategories = (arr: any[]) => {
  //   return arr.reduce((accumulator: any, element: any) => {
  //     if (!accumulator.includes(element['category'])) {
  //       accumulator.push(element['category']);
  //     }
  //     return accumulator;
  //   }, []);
  // };
  //
  // const categories = getCategories(projectsData);

  return (
    <div className={styles.projects}>
      <div className={styles.projects_wrapper}>
        <Fade direction='up'>
          <Title title='Projects' />
        </Fade>
        <div className={styles.projects_tabs}>
          {buttons.map((cat: any, i: number) => (
            <motion.button
              // animate={{ opacity: 1, transition: { duration: 2, delay: 1 } }}
              // initial={{ opacity: 0 }}
              layoutId={cat}
              animate='visible'
              custom={(i + 1) * 0.2}
              whileHover={{ scale: 1.05 }}
              key={i}
              type='button' onClick={() => filter(cat, i)}
              className={!(i === active) ? `${styles.projects_tabs_tab}` : `${styles.tab_active}`}>
              {cat}
            </motion.button>
          ))}

          {/*  <div*/}
          {/*    className={active ? `${styles.active}` : `${styles.projects_tabs_tab}`}*/}
          {/*    // className={`${styles.projects_tabs_tab}`}*/}
          {/*    onClick={() => {*/}
          {/*      setItem(projectsData)*/}
          {/*      isToggle()*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    All*/}
          {/*  </div>*/}
          {/*  {menuItems.map((Val: any, id: number) => (*/}
          {/*    <div key={id}*/}
          {/*         className={*/}
          {/*           active ? `${styles.active}` : `${styles.projects_tabs_tab}`*/}
          {/*         }*/}
          {/*         onClick={() => {*/}
          {/*           filterItem(Val)*/}
          {/*           isToggle()*/}
          {/*         }}*/}
          {/*    >*/}
          {/*      {Val}*/}
          {/*    </div>*/}
          {/*  ))}*/}
        </div>

        {/*<div className={styles.projects_tabs}>*/}
        {/*  <div*/}
        {/*      // className={!isActive ? `${styles.projects_tabs_tab}` : `${styles.active}`}*/}
        {/*      className={`${styles.projects_tabs_tab}`}*/}
        {/*    onClick={() => setProjectItems(projectsData)}*/}
        {/*  >*/}
        {/*    All*/}
        {/*  </div>*/}
        {/*  {categories.map((element: any, index: number) => (*/}
        {/*    <div key={element}*/}
        {/*         className={*/}
        {/*           !(index === isActive) ? `${styles.projects_tabs_tab}` : `${styles.active}`}*/}
        {/*         onClick={() => filterItem(element, index)}*/}
        {/*    >*/}
        {/*          {element}*/}
        {/*    </div>*/}
        {/*  ))}*/}
        {/*</div>*/}

        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={false}
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          pagination={{
            clickable: true
          }}
          navigation
          grabCursor={true}
          spaceBetween={5}
          className={styles['swiper']}
        >
          {menuItem.map((projectItem) => {
            const { id, title, description, technologies, github, demo, pic } = projectItem
            return (
              <SwiperSlide
                className={styles['swiper-slide']}
                key={id}
                style={{backgroundImage: `url(${pic})`}}
              >
                <div className={styles.project}>
                  <h3 className={styles.project_title}>
                    {title}
                  </h3>
                  <div className={styles.project_description}>
                    {description}
                  </div>
                  <div className={styles.project_description_title}>Stack:</div>
                  <ul className={styles.stack}>
                    {technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.links}>
                  <a
                    href={github}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaGithub
                      size={30}
                      className={`${styles.links_all} ${styles.links_all_git}`}
                    />
                  </a>
                  <a
                    href={demo}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <CgWebsite
                      size={30}
                      className={`${styles.links_all} ${styles.links_all_demo}`}
                    />
                  </a>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Projects
