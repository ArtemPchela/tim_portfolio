import { FC } from 'react'
import Home from '@/components/home/Home'
import About from '@/components/about/About'
import Skills from '@/components/skills/Skills'
import Experience from '@/components/experience/Experience'
import Projects from '@/components/projects/Projects'
import Contact from '@/components/contact/Contact'

export const Landing: FC = () => {
  return (
    <>
      <main id='main'>
        <section id='home'>
          <Home />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='experience'>
          <Experience />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      </main>
    </>
  )
}

export default Landing
