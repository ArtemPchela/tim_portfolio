import { FC } from 'react'
import Header from '@/components/header/Header'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
