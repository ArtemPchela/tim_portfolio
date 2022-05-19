import { useEffect, useMemo } from 'react'

const useScrollActiveLink = (navClass: string, activeClass: string) => {
  const sections = useMemo(() => {
    if (typeof window !== 'undefined') {
      return document?.querySelectorAll<HTMLElement>('section[id]')
    } else {
      return []
    }
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const scrollY = window.pageYOffset
    const reachedBottom = document.body.getBoundingClientRect().bottom - 1 <= window.innerHeight

    sections.forEach((section, index) => {
      const sectionHeight = section.offsetHeight
      const sectionTop = section.offsetTop - 95
      const sectionId = section.getAttribute('id')

      const sectionElem = document?.querySelector(
        `.${navClass} a[href*=${sectionId}]`
      )

      if (reachedBottom) {
        if (index === sections.length - 1) {
          sectionElem?.classList.add(activeClass)
        } else {
          sectionElem?.classList.remove(activeClass)
        }
      } else if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + sectionHeight
      ) {
        sectionElem?.classList.add(activeClass)
      } else {
        sectionElem?.classList.remove(activeClass)
      }
    })
  }
}

export default useScrollActiveLink
