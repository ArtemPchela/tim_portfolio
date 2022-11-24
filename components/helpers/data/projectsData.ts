// import { ProjectProps } from '@/components/projects/project/Project'

type ProjectProps = {
  id: number,
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  pic: string
  direction?: 'left' | 'right'
  category: string
}

export const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: 'RÖVARSPRÅKET',
    description: 'Rövarspråket (English: The Robber Language) is a Swedish language game. It became popular after the books about Bill Bergson by Astrid Lindgren, where the children use it as a code, both at play and in solving actual crimes.',
    technologies: ['React', 'CSS', 'i18n', 'PWA'],
    github: 'https://github.com/ArtemPchela/Rovarspraket_Game',
    demo: 'https://rovarspraketgame.netlify.app/',
    pic: '/projects/rovarsproket.svg',
    category: 'next'
  },
  {
    id: 2,
    title: 'SCB-React-API',
    description: 'Smaller SCB-React-API version of the original SCB (Statistiska centralbyrn). There is a wealth of knowledge nearby regarding what you require: "Democracy", "Culture and leisure", "Research and education" and more.',
    technologies: ['React', 'SCSS', 'Axios', 'Bootstrap', 'React-Bootstrap'],
    github: 'https://github.com/ArtemPchela/SCB_React_API',
    demo: 'https://scb-react-api.netlify.app/',
    pic: '/projects/scb.svg',
    category: 'react'
  },
  {
    id: 3,
    title: 'Dark-theme-react',
    description: 'Npm package theme toggle created with Rollup.js and React. Zero dependency',
    technologies: ['React', 'Rollup', 'React-Bootstrap'],
    github: 'https://github.com/ArtemPchela/dark-mode-react',
    demo: 'https://www.npmjs.com/package/dark-mode-react',
    pic: '/projects/darkMode.svg',
    category: 'npm'
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: 'Website about myself',
    technologies: ['React', 'Next', 'TypeScript'],
    github: 'https://github.com/ArtemPchela/tim_portfolio',
    demo: 'https://artempchelenkov.xyz/',
    pic: '/projects/personal.svg',
    category: 'next'
  }
]

