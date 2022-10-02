import { FC } from 'react'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/header/Header'

const Layout: FC = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <Header />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout
