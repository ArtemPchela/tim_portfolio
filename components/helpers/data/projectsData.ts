import { ProjectProps } from '@/components/projects/project/Project'

export const projectsData: ProjectProps[] = [
  {
    title: 'RÖVARSPRÅKET',
    description: 'Rövarspråket (English: The Robber Language) is a Swedish language game. It became popular after the books about Bill Bergson by Astrid Lindgren, where the children use it as a code, both at play and in solving actual crimes.',
    technologies: ['React', 'CSS', 'i18n', 'PWA'],
    github: 'https://github.com/ArtemPchela/Rovarspraket_Game',
    demo: 'https://rovarspraketgame.netlify.app/',
    pic: '/projects/rovarsproket.jpg'
  },
  {
    title: 'SCB-React-API',
    description: 'Smaller SCB-React-API version of the original SCB (Statistiska centralbyrn). There is a wealth of knowledge nearby regarding what you require: "Democracy", "Culture and leisure", "Research and education" and more.',
    technologies: ['React', 'SCSS', 'Axios', 'Bootstrap', 'React-Bootstrap'],
    github: 'https://github.com/ArtemPchela/SCB_React_API',
    demo: 'https://scb-react-api.netlify.app/',
    pic: '/projects/scb.svg'
  }
]
